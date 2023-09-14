const sessions = async (data, update) => {
    let totalWatchTimeSec = 0
    let totalSessions = 1
    let currentSessionStartTime = null

    const MAX_TIME_BETWEEN_VIDEOS = 60 * 10
    const SESSION_END_TIME = 5
    const sessionLengths = []

    const videoList = data?.Activity?.['Video Browsing History']?.VideoList?.sort((a, b) => {
        return new Date(a.Date).getTime() - new Date(b.Date).getTime()
    })

    if (!videoList) {
        const session = {
            totalWatchTimeSec: 0,
            totalSessions: 0,
            averageSessionLengthSec: 0,
            latestVideoWatched: {
                video: '',
                date: null,
            },
            longestWatchSession: 0,
            mostActiveWeekday: {
                weekday: '',
                averageUsageTime: 0,
            },
            averagePerDay: 0,
            watchTimeComment: '',
        }

        await update('session', session)
        return
    }

    let longestWatchSession = {
        startTime: new Date(),
        endTime: new Date(),
        lengthSec: 0,
        comment: 'Never watched a video?',
    }

    const weekdayUsage = [0, 0, 0, 0, 0, 0, 0]
    const weekdaysWithSessions = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]

    for (let i = 1; i < videoList?.length; i++) {
        const video = videoList[i]
        const previousVideo = videoList[i - 1]

        const videoStartTime = new Date(video?.Date)

        if (!currentSessionStartTime) {
            currentSessionStartTime = videoStartTime
        }

        const previousVideoStartTime = new Date(previousVideo?.Date)

        const timeBetweenVideoWatched = Math.abs((videoStartTime?.getTime() - previousVideoStartTime?.getTime()) / 1000)

        const weekday = videoStartTime?.getDay()

        if (weekdaysWithSessions[weekday]) {
            weekdaysWithSessions[weekday].add(videoStartTime?.toDateString())
        }

        if (timeBetweenVideoWatched < MAX_TIME_BETWEEN_VIDEOS) {
            totalWatchTimeSec += timeBetweenVideoWatched
            weekdayUsage[weekday] += timeBetweenVideoWatched
        } else {
            totalWatchTimeSec += SESSION_END_TIME
            weekdayUsage[weekday] += SESSION_END_TIME
            totalSessions++

            const sessionLength = Math.abs(
                (previousVideoStartTime?.getTime() - currentSessionStartTime?.getTime()) / 1000
            )
            sessionLengths.push(sessionLength)

            if (sessionLength > longestWatchSession?.lengthSec) {
                longestWatchSession = {
                    startTime: currentSessionStartTime,
                    endTime: videoStartTime,
                    lengthSec: sessionLength,
                }
            }

            currentSessionStartTime = videoStartTime
        }
    }

    const mostActiveWeekdayIndex = weekdayUsage?.indexOf(Math.max(...weekdayUsage))
    const firstVideo = new Date(videoList[0]?.Date)
    const latestVideo = new Date(videoList[videoList?.length - 1]?.Date)

    const utcDate1 = new Date(Date.UTC(firstVideo?.getFullYear(), firstVideo?.getMonth(), firstVideo?.getDate()))
    const utcDate2 = new Date(Date.UTC(latestVideo?.getFullYear(), latestVideo?.getMonth(), latestVideo?.getDate()))

    const latestVideoWatched = { video: videoList[videoList?.length - 1]?.Link, date: latestVideo }

    const differenceMs = Math.abs(utcDate2 - utcDate1)

    const daysDifference = differenceMs / (1000 * 60 * 60 * 24) + 1

    const lls = longestWatchSession?.lengthSec

    if (lls <= 29) longestWatchSession.comment = 'No sessions??'
    else if (lls <= 600) longestWatchSession.comment = 'You must have a busy life!'
    else if (lls <= 3600) longestWatchSession.comment = "Not even an hour, that's alright!"
    else if (lls <= 7200) longestWatchSession.comment = 'Wowwww, that must have been a boring day!'
    else if (lls <= 14400) longestWatchSession.comment = 'This is getting out of hand, are you okay?'
    else if (lls > 14400) longestWatchSession.comment = "I'm sorry... WHAT?!?!?!"

    const hours = totalWatchTimeSec / 3600
    let comment = ''

    if (hours <= 0) {
        comment = 'opened TikTok and get some data.'
    } else if (hours <= 1) {
        comment = 'watched a classic movie!'
    } else if (hours <= 2) {
        comment = 'cooked a delicious meal from scratch!'
    } else if (hours <= 4) {
        comment = 'explored a new hobby or skill!'
    } else if (hours <= 8) {
        comment = 'taken a scenic bike ride through your city!'
    } else if (hours <= 16) {
        comment = 'hosted a virtual game night with friends!'
    } else if (hours <= 24) {
        comment = 'planned a spontaneous day trip!'
    } else if (hours <= 50) {
        comment = 'completed an entire season of a TV series!'
    } else if (hours <= 100) {
        comment = 'built a piece of furniture from scratch!'
    } else if (hours <= 150) {
        comment = 'volunteered at a local charity!'
    } else if (hours <= 200) {
        comment = 'started writing your own book!'
    } else if (hours <= 250) {
        comment = 'taken up painting and created a masterpiece!'
    } else if (hours <= 300) {
        comment = 'learned to play a new musical instrument!'
    } else if (hours <= 350) {
        comment = 'explored a national park or gone hiking!'
    } else if (hours <= 400) {
        comment = 'organized a neighborhood block party!'
    } else if (hours <= 450) {
        comment = 'trained for a local charity run!'
    } else if (hours <= 500) {
        comment = 'designed and built your own website!'
    } else if (hours <= 1000) {
        comment = 'embarked on an epic road trip adventure!'
    } else {
        comment = 'accomplished so much in that time!'
    }

    const averageSessionLengthSec = sessionLengths?.reduce((a, b) => a + b, 0) / sessionLengths?.length
    const mostActiveWeekday = {
        weekday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][mostActiveWeekdayIndex],
        averageUsageTime: weekdayUsage[mostActiveWeekdayIndex] / weekdaysWithSessions[mostActiveWeekdayIndex]?.size,
    }
    const averagePerDay = totalWatchTimeSec / daysDifference

    const session = {
        totalWatchTimeSec,
        totalSessions,
        averageSessionLengthSec,
        latestVideoWatched,
        longestWatchSession,
        mostActiveWeekday,
        averagePerDay,
        watchTimeComment: comment,
    }

    await update('session', session)
}

export default sessions
