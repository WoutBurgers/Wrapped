const blocked = async (data, update) => {
    const blockList = data?.['App Settings']?.Block?.BlockList

    if (!blockList) {
        await update('blocked', { totalBlocked: 0 })
        return
    }

    const totalBlocked = blockList?.length

    const blocked = { totalBlocked }

    await update('blocked', blocked)
}

export default blocked
