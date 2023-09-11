const viewedVideos = async (data, update) => {
    const videoList = data?.Activity?.['Video Browsing History']?.VideoList

    if (!videoList) {
        const viewedVideos = {
            viewedVideos: 0,
            firstVideo: null,
        }
        await update('viewedVideos', viewedVideos)
        return
    }

    const totalViewedVideos = videoList?.length ?? 0
    const firstVideo = new Date(videoList[0]?.Date)

    const viewedVideos = {
        totalViewedVideos,
        firstVideo,
    }

    await update('viewedVideos', viewedVideos)
}

export default viewedVideos
