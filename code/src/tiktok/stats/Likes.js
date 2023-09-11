const likes = async (data, update) => {
    const likedPosts = data?.Activity?.['Like List'].ItemFavoriteList?.reverse()
    const totalLikes = likedPosts?.length ?? 0

    if (!likedPosts) {
        const likes = {
            totalLikes: 0,
            dayWithMostLiked: null,
            firstLikedVideo: null,
        }

        await update('likes', likes)
        return
    }

    const likesMap = {}

    for (let i = 0; i < likedPosts?.length; i++) {
        const post = likedPosts[i]

        const date = new Date(post.Date)
        const day = date.toDateString()

        if (day in likesMap) {
            likesMap[day]++
        } else {
            likesMap[day] = 1
        }
    }

    const dayWithMostLiked = {
        day: '',
        count: 0,
    }

    for (const day in likesMap) {
        if (dayWithMostLiked.count < likesMap[day]) {
            dayWithMostLiked.day = day
            dayWithMostLiked.count = likesMap[day]
        }
    }

    const firstLikedVideo = new Date(likedPosts[likedPosts?.length - 1].Date)

    const likes = {
        totalLikes,
        dayWithMostLiked,
        firstLikedVideo,
    }

    await update('likes', likes)
}

export default likes
