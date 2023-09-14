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

    const shares = {
        totalShares: sharedPosts?.length,
        dayWithMostShares: { day: new Date(mostSharesDay), count: mostSharesCount },
        firstShare,
    }

    await update('shares', shares)
}

export default shares
