const live = async (data, update) => {
    const livePostsMap = data?.['Tiktok Live']?.['Watch Live History']?.WatchLiveMap

    if (!livePostsMap) {
        const live = {
            totalLiveViewed: 0,
            totalLiveComments: 0,
        }
        await update('live', live)
        return
    }

    const totalLiveComments = Object.values(livePostsMap)?.reduce((acc, curr) => acc + (curr.Comments?.length ?? 0), 0)

    const totalLiveViewed = Object.keys(livePostsMap)?.length

    const live = {
        totalLiveViewed,
        totalLiveComments,
    }

    await update('live', live)
}

export default live
