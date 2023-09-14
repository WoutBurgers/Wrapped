const slides = async (tiktokStats, update) => {
    const slides = ['/tiktok/viewedVideos/', '/tiktok/longestSession/', '/tiktok/weekday/', '/tiktok/ending/']
    await update('slides', slides)

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
}

export default slides
