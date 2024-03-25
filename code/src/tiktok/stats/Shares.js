const shares = async (data, update) => {
    const sharedPosts = data?.Activity?.['Share History']?.ShareHistoryList?.reverse()

    if (!sharedPosts) {
        const shares = {
            totalShares: 0,
            dayWithMostShares: null,
            firstShare: {
                video: '',
                date: null,
            },
        }
        await update('shares', shares)

        return
    }

    const dayCounts = {}

    for (let i = 0; i < sharedPosts?.length; i++) {
        const post = sharedPosts[i]
        const date = new Date(post?.Date)
        const day = date.toDateString()

        if (day in dayCounts) {
            dayCounts[day]++
        } else {
            dayCounts[day] = 1
        }
    }

    let mostSharesDay = ''
    let mostSharesCount = 0

    for (const day in dayCounts) {
        if (dayCounts[day] > mostSharesCount) {
            mostSharesDay = day
            mostSharesCount = dayCounts[day]
        }
    }

    const firstShare = {
        video: sharedPosts[sharedPosts?.length - 1]?.Link,
        date: new Date(sharedPosts[sharedPosts?.length - 1]?.Date),
    }

    const totalShares = sharedPosts?.length

    let comment = ''

    if (totalShares <= 3) {
        comment = 'You have no friends??? I am so sorry :('
    } else if (totalShares <= 20) {
        comment = 'You like to be alone heh, time to find more friends!'
    } else if (totalShares <= 50) {
        comment = 'Okay okay you have a few friends, good job buddy!'
    } else if (totalShares <= 200) {
        comment = 'Not bad not bad, you are most likely a social person'
    } else if (totalShares <= 500) {
        comment = 'You must have a lot of friends, I like you'
    } else if (totalShares <= 1000) {
        comment = 'Sharing is not a job, find a life'
    } else {
        comment = 'I bet your friends never watch your videos and think you are annoying'
    } 


    const shares = {
        totalShares,
        dayWithMostShares: { day: new Date(mostSharesDay), count: mostSharesCount },
        firstShare,
        comment
    }

    await update('shares', shares)
}

export default shares
