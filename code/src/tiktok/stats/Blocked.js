const blocked = async (data, update) => {
    const blockList = data?.['App Settings']?.Block?.BlockList

    if (!blockList) {
        await update('blocked', { totalBlocked: 0, blockedList: [''] })
        return
    }

    const totalBlocked = blockList?.length
    const blockedList = blockList.map((x) => x?.UserName)

    let comment = ''

    if (totalBlocked <= 3) {
        comment = 'A very friendly person, who never blocks'
    } else if (totalBlocked <= 50) {
        comment = 'Sometimes blocking is the easy way out!'
    } else if (totalBlocked <= 100) {
        comment = 'You know where to find the block button dont you'
    } else {
        comment = 'Okay okay we understand, you do not care and block anyone you do not like'
    } 

    const blocked = { totalBlocked, blockedList, comment}

    await update('blocked', blocked)
}

export default blocked
