const slides = async (tiktokStats, update) => {
    const viewedVideos = {
        s1: 'Since ' + tiktokStats.firstVideo.toLocaleDateString() + ' you have watched',
        b1: tiktokStats.viewedVideos + ' videos!',
    }

    update('viewedVideos', viewedVideos)

    const date = tiktokStats.longestWatchSession.startTime.toLocaleDateString()
    const length = Math.round(tiktokStats.longestWatchSession.lengthSec / 60)
    const hours = Math.floor(length / 60)
    const minutes = length - 60 * hours
    const comment = tiktokStats.longestWatchSession.comment

    const longestSession = {
        s1: 'On ' + date + ' you set a personal record with a session of',
        b1:
            hours > 0
                ? `${hours} hour${hours > 1 ? 's' : ''} and ${minutes} minute${minutes !== 1 ? 's' : ''}`
                : `${minutes} minute${minutes !== 1 ? 's' : ''}`,
        s2: comment,
    }

    update('longestSession', longestSession)

    const weekday = {
        s1: 'Your most active day is ',
        b1: tiktokStats.mostActiveWeekday.weekday,
        s2: ' with on average a total time of',
        b2: Math.round(tiktokStats.mostActiveWeekday.averageUsageTime / 60) + ' minutes!',
    }

    update('weekday', weekday)
}

export default slides
