const update = async (name, value, setStats) => {
    
    setStats((prevStats) => ({
        ...prevStats,
        [name]: value,
    }))
}

export default update
