import update from "./UpdateData"

const viewedVideos = async (data, setStats) => {
    console.log(data)

    update("viewedVideos", 1, setStats)
    
}

export default viewedVideos
