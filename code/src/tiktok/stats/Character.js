const character = async (data, update) => {
    const scores = {
        activeViewer: 30000,
        longWatcher: 5400,
        emojiEnthusiast: 500,
        socialCommenter: 500,
    }

    const points = {
        activeViewer: data?.viewedVideos?.totalViewedVideos / scores?.activeViewer,
        longWatcher: data?.session?.longestWatchSession?.lengthSec / scores?.longWatcher,
        emojiEnthusiast: data?.comments?.mostUsedEmoji?.count / scores?.emojiEnthusiast,
        socialCommenter: data?.comments?.totalComments / scores?.socialCommenter,
    }

    let characterWithMostPoints = null
    let maxPoints = -Infinity

    for (const p in points) {
        if (points[p] > maxPoints) {
            maxPoints = points[p]
            characterWithMostPoints = p
        }
    }

    console.log(characterWithMostPoints)

    const s1 = 'Your character is the'

    if (characterWithMostPoints === 'activeViewer')
        await update('character', {
            s1,
            b1: 'Active Viewer',
            image: 'ActiveViewer.jpeg',
            s2: 'You have binged so many TikToks that Netflix called for binge-watching tips! 🍿📺😅',
        })
    else if (characterWithMostPoints === 'longWatcher')
        await update('character', {
            s1,
            b1: 'Long Watcher',
            image: 'LongWatcher.jpeg',
            s2: "You've mastered the art of 'TikTok-Asana' - holding your phone in the same position for hours! 🧘‍♂️📱😄",
        })
    else if (characterWithMostPoints === 'emojiEnthusiast')
        await update('character', {
            s1,
            b1: 'Emoji Enthusiast',
            image: 'EmojiEnthusiast.jpeg',
            s2: 'You speak fluent emoji, and your comments are emoji symphonies! 🎶🤩📝',
        })
    else if (characterWithMostPoints === 'socialCommenter')
        await update('character', {
            s1,
            b1: 'Social Commenter',
            image: 'SocialCommenter.jpeg',
            s2: 'You comment on TikToks like you are the official TikTok critic - keep those comments coming! 🎭💬👏',
        })
    else
        await update('character', {
            s1,
            b1: '',
            image: '',
            s2: 'Something went wrong',
        })
}

export default character
