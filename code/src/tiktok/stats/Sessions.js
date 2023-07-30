const sessions = async (data, update) => {
    let totalWatchTimeSec = 0
    let totalSessions = 1
    let currentSessionStartTime = null

    const MAX_TIME_BETWEEN_VIDEOS = 60 * 10
    const SESSION_END_TIME = 5
    const sessionLengths = []

    const videoList = data?.Activity['Video Browsing History']?.VideoList?.sort((a, b) => {
        return new Date(a.Date).getTime() - new Date(b.Date).getTime()
    })

    if (!videoList) return

    let longestWatchSession = {
        startTime: new Date(),
        endTime: new Date(),
        lengthSec: 0,
        comment: '',
    }

    const weekdayUsage = [0, 0, 0, 0, 0, 0, 0]
    const weekdaysWithSessions = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]

    for (let i = 1; i < videoList.length; i++) {
        const video = videoList[i]
        const previousVideo = videoList[i - 1]

        const videoStartTime = new Date(video.Date)
        if (!currentSessionStartTime) {
            currentSessionStartTime = videoStartTime
        }

        const previousVideoStartTime = new Date(previousVideo.Date)

        const timeBetweenVideoWatched = Math.abs((videoStartTime.getTime() - previousVideoStartTime.getTime()) / 1000) // in seconds

        const weekday = videoStartTime.getDay()

        if (weekdaysWithSessions[weekday]) {
            weekdaysWithSessions[weekday].add(videoStartTime.toDateString())
        }

        if (timeBetweenVideoWatched < MAX_TIME_BETWEEN_VIDEOS) {
            totalWatchTimeSec += timeBetweenVideoWatched
            weekdayUsage[weekday] += timeBetweenVideoWatched
        } else {
            totalWatchTimeSec += SESSION_END_TIME
            weekdayUsage[weekday] += SESSION_END_TIME
            totalSessions++

            const sessionLength = Math.abs(
                (previousVideoStartTime.getTime() - currentSessionStartTime.getTime()) / 1000
            )
            sessionLengths.push(sessionLength)

            if (sessionLength > longestWatchSession.lengthSec) {
                longestWatchSession = {
                    startTime: currentSessionStartTime,
                    endTime: videoStartTime,
                    lengthSec: sessionLength,
                }
            }

            currentSessionStartTime = videoStartTime
        }
    }

    const mostActiveWeekdayIndex = weekdayUsage.indexOf(Math.max(...weekdayUsage))
    const firstVideo = new Date(videoList[0].Date)
    const latestVideo = new Date(videoList[videoList.length - 1].Date)

    const utcDate1 = new Date(Date.UTC(firstVideo.getFullYear(), firstVideo.getMonth(), firstVideo.getDate()))
    const utcDate2 = new Date(Date.UTC(latestVideo.getFullYear(), latestVideo.getMonth(), latestVideo.getDate()))

    const differenceMs = Math.abs(utcDate2 - utcDate1)

    const daysDifference = differenceMs / (1000 * 60 * 60 * 24) + 1

    const lls = longestWatchSession.lengthSec

    if (lls <= 29) longestWatchSession.comment = 'No sessions??'
    else if (lls <= 600) longestWatchSession.comment = 'You must have a busy life!'
    else if (lls <= 3600) longestWatchSession.comment = "Not even an hour, that's alright!"
    else if (lls <= 7200) longestWatchSession.comment = 'Wowwww, that must have been a boring day!'
    else if (lls <= 14400) longestWatchSession.comment = 'This is getting out of hand, are you okay?'
    else if (lls > 14400) longestWatchSession.comment = "I'm sorry... WHAT?!?!?!"

    update('totalWatchTimeSec', totalWatchTimeSec)
    update('totalSessions', totalSessions)
    update('averageSessionLengthSec', sessionLengths.reduce((a, b) => a + b, 0) / sessionLengths.length)
    update('latestVideoWatched', latestVideo)
    update('longestWatchSession', longestWatchSession)
    update('mostActiveWeekday', {
        weekday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][mostActiveWeekdayIndex],
        averageUsageTime: weekdayUsage[mostActiveWeekdayIndex] / weekdaysWithSessions[mostActiveWeekdayIndex].size,
    })
    update('averagePerDay', totalWatchTimeSec / daysDifference)
}

export default sessions
