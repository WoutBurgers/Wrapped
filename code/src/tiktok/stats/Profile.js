const profile = async (data, update) => {
    const userName = data?.Profile?.['Profile Information']?.ProfileMap?.userName ?? ''

    const profile = {
        userName,
    }

    update('profile', profile)
}

export default profile
