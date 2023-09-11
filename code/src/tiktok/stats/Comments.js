const comments = async (data, update) => {
    let totalComments = 0
    let totalCommentLength = 0
    const emojiMap = {}

    const commentsList = data?.Comment?.Comments?.CommentsList

    if (!commentsList) {
        const comments = {
            totalComments: 0,
            commentLength: 0,
            mostUsedEmoji: { times: 0, emoji: '' },
            firstComment: '',
            dayWithMostComments: { day: null, times: 0 },
        }

        await update('comments', comments)
        return
    }

    const sortedList = commentsList?.sort((a, b) => {
        return new Date(a.Date).getTime() - new Date(b.Date).getTime()
    })

    const firstComment = new Date(sortedList[0].Date)

    const commentCountsByDay = {}

    let maxDay = null
    let maxCommentCount = 0

    for (const comment of sortedList) {
        const date = new Date(comment.Date)
        const day = date.toDateString()

        if (commentCountsByDay[day]) {
            commentCountsByDay[day]++
        } else {
            commentCountsByDay[day] = 1
        }
    }

    for (const day in commentCountsByDay) {
        if (commentCountsByDay[day] > maxCommentCount) {
            maxCommentCount = commentCountsByDay[day]
            maxDay = day
        }
    }

    if (!commentsList) return

    for (let i = 0; i < commentsList?.length; i++) {
        const comment = commentsList[i]

        totalComments++
        totalCommentLength += comment?.Comment?.length

        const emojiRegex = /<a?:.+?:\d{18}>|\p{Extended_Pictographic}/gu
        const emojis = comment?.Comment?.match(emojiRegex) ?? []

        emojis
            ?.filter((x) => x !== '')
            ?.forEach((emoji) => {
                if (emoji in emojiMap) {
                    emojiMap[emoji]++
                } else {
                    emojiMap[emoji] = 1
                }
            })
    }

    const commentLength = totalCommentLength / totalComments

    let maxEmoji = ''
    let maxEmojiCount = 0

    Object.entries(emojiMap)?.forEach(([emoji, count]) => {
        if (count > maxEmojiCount) {
            maxEmoji = emoji
            maxEmojiCount = count
        }
    })

    const comments = {
        totalComments,
        commentLength,
        mostUsedEmoji: { count: maxEmojiCount, emoji: maxEmoji },
        firstComment,
        dayWithMostComments: { day: maxDay, count: maxCommentCount },
    }

    await update('comments', comments)
}

export default comments
