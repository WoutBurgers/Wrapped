const blocked = async (data, update) => {
    const blockList = data?.['App Settings']?.Block?.BlockList

    if (!blockList) {
        await update('blocked', { totalBlocked: 0, blockedList: [''] })
        return
    }

    const totalBlocked = blockList?.length
    const blockedList = blockList.map((x) => x?.UserName)

    const blocked = { totalBlocked, blockedList }

    await update('blocked', blocked)
}

export default blocked
