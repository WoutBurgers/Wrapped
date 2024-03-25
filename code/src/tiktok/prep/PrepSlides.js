const slides = async (tiktokStats, update) => {
    const viewedVideos = {
        s1: 'Since ' + tiktokStats?.viewedVideos?.firstVideo?.date?.toLocaleDateString() + ' you have watched',
        b1: tiktokStats?.viewedVideos?.totalViewedVideos + ' videos!',
    }

    await update('viewedVideos', viewedVideos)

    const date = tiktokStats?.session?.longestWatchSession?.startTime?.toLocaleDateString()
    const length = Math.round(tiktokStats?.session?.longestWatchSession?.lengthSec / 60)
    const hours = Math.floor(length / 60)
    const minutes = length - 60 * hours
    const comment = tiktokStats?.session?.longestWatchSession?.comment

    const longestSession = {
        s1: 'On ' + date + ' you set a personal record with a session of',
        b1:
            hours > 0
                ? `${hours} hour${hours > 1 ? 's' : ''} and ${minutes} minute${minutes !== 1 ? 's' : ''}`
                : `${minutes} minute${minutes !== 1 ? 's' : ''}`,
        s2: comment,
    }

    await update('longestSession', longestSession)

    const weekday = {
        s1: 'Your most active day is ',
        b1: tiktokStats?.session?.mostActiveWeekday?.weekday,
        s2: ' with on average a total time of',
        b2: Math.round(tiktokStats?.session?.mostActiveWeekday?.averageUsageTime / 60) + ' minutes!',
    }

    await update('weekday', weekday)

    const emoji = {
        s1: 'In total you posted',
        b1: tiktokStats?.comments?.totalComments + ' comments',
        s2: 'and you used the ' + tiktokStats?.comments?.mostUsedEmoji?.emoji + ' emoji ' + tiktokStats?.comments?.mostUsedEmoji?.count + ' times!'
    }

    await update('emoji', emoji)

    const shares = {
        s1: 'You shared a total of',
        b1: tiktokStats?.shares?.totalShares + ' videos!',
        s2: tiktokStats?.shares?.comment,
    }

    await update ('shares', shares)

    const lives = {
        s1: 'You viewed a total of ',
        b1: tiktokStats?.live?.totalLiveViewed + ' lives',
        s2: 'and in these lives you left a total of ',
        b2: tiktokStats?.live?.totalLiveComments + ' comments!'
    }

    await update ('lives', lives)

    const money = {
        s1: 'I am sorry to tell you but you gifted',
        s2: 'a total of ' + tiktokStats?.gifts?.totalGiftAmount + ' coins costing you a shocking',
        b1: Math.round(tiktokStats?.money?.totalMoneySpent) + ' US Dollars',
        s3: 'Supporting your favorite creator "' + tiktokStats?.gifts?.mostGiftsUser + '" with ' + tiktokStats?.gifts?.mostGiftsCount + ' coins!'
    }

    await update ('money', money)

    const blocked = {
        s1: 'Up until now you have blocked',
        b1: tiktokStats?.blocked?.totalBlocked + ' users!',
        s2: tiktokStats?.blocked?.comment,
    }

    await update ('blocked', blocked)

}

export default slides
