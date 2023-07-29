const viewedVideos = async (data, update) => {
    const videoList = data?.Activity['Video Browsing History']?.VideoList
    const length = videoList?.length ?? 0
    const date = new Date(videoList[length - 1]?.Date)

    await update('viewedVideos', length)
    await update('firstVideo', date)
}

export default viewedVideos
