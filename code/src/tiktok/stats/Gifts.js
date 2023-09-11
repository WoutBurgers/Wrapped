const gifts = async (data, update) => {
    const sendGiftsData = data?.Activity?.['Purchase History']?.SendGifts?.SendGifts
    let totalGiftAmount = 0
    let mostGiftsUser = null
    let mostGiftsCount = 0

    if (!sendGiftsData) {
        const gifts = {
            totalGiftAmount: 0,
            mostGiftsUser: '',
            mostGiftsCount: 0,
        }

        await update('gifts', gifts)
    } else {
        const giftCounts = {}

        sendGiftsData?.forEach((gift) => {
            const giftAmount = parseInt(gift.GiftAmount)
            totalGiftAmount += giftAmount
            const username = gift.UserName
            giftCounts[username] = (giftCounts[username] || 0) + giftAmount
            if (giftCounts[username] > mostGiftsCount) {
                mostGiftsUser = username
                mostGiftsCount = giftCounts[username]
            }
        })
    }

    const buyGiftsData = data?.Activity?.['Purchase History']?.BuyGifts?.BuyGifts

    if (!buyGiftsData) {
        const money = {
            totalMoneySpent: 0,
        }
        await update('money', money)
        return
    }

    const totalMoneySpent = buyGiftsData?.reduce((total, gift) => {
        const price = parseFloat(gift.Price.replace('$', '').split(' ')[0])
        return total + price
    }, 0)

    const gifts = {
        totalGiftAmount,
        mostGiftsUser,
        mostGiftsCount,
    }

    const money = {
        totalMoneySpent,
    }

    await update('gifts', gifts)
    await update('money', money)
}

export default gifts
