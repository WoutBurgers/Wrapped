import React, { useContext } from 'react'
import { Context } from '../../DataProvider'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import HomeButton from '../../components/HomeButton'

export default function LastPage() {
    const { tiktokStats } = useContext(Context)

    const tableContainer = {
        backgroundColor: 'transparent',
        width: '60%',
        margin: '100px auto',
        outline: 'none',
        boxShadow: 'none',
    }

    const tableHeader = {
        fontWeight: 'bold',
        fontSize: 'calc(12px + 2vmin)',
        color: '#3c74dd',
    }

    const firstCell = {
        width: '30%',
        fontWeight: 'bold',
        color: 'black',
    }

    const secondCell = {
        color: 'black',
    }

    const rowSeparator = {
        borderTop: '1px solid #ccc',
    }

    return (
        <>
            <div className="standard-style">
                <HomeButton />
                <TableContainer component={Paper} sx={tableContainer}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={2} sx={tableHeader}>
                                    Watch Sessions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Total watch time</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {Math.floor((tiktokStats?.session?.totalWatchTimeSec ?? 0) / 3600)} hours and{' '}
                                    {Math.round((tiktokStats?.session?.totalWatchTimeSec ?? 0) / 60) -
                                        Math.floor((tiktokStats?.session?.totalWatchTimeSec ?? 0) / 3600) * 60}{' '}
                                    minutes
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Total videos watched</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.viewedVideos?.totalViewedVideos ?? 0}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Average per day</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {Math.round((tiktokStats?.session?.averagePerDay ?? 0) / 60)} minutes
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Most active weekday</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.session?.mostActiveWeekday?.weekday ?? 'Something went wrong'} with{' '}
                                    {Math.round(tiktokStats?.session?.mostActiveWeekday?.averageUsageTime / 60)} minutes
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Total watch sessions</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.session?.totalSessions ?? 0}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Longest watch session</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {Math.round((tiktokStats?.session?.longestWatchSession?.lengthSec ?? 0) / 60)}{' '}
                                    minutes on{' '}
                                    {tiktokStats?.session?.longestWatchSession?.startTime
                                        ? tiktokStats?.session?.longestWatchSession?.startTime?.toLocaleDateString()
                                        : 'error'}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Average session length</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {Math.round((tiktokStats?.session?.averageSessionLengthSec ?? 0) / 60)} minutes
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>First video in data</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.viewedVideos?.firstVideo?.date
                                        ? tiktokStats?.viewedVideos?.firstVideo?.date.toLocaleDateString()
                                        : 'Something went wrong'}{' '}
                                    (
                                    <a
                                        style={{ color: 'grey' }}
                                        href={tiktokStats?.viewedVideos?.firstVideo?.video}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Link
                                    </a>
                                    )
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Latest video in data</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.session?.latestVideoWatched?.date
                                        ? tiktokStats?.session?.latestVideoWatched?.date?.toLocaleDateString()
                                        : 'Something went wrong'}{' '}
                                    (
                                    <a
                                        style={{ color: 'grey' }}
                                        href={tiktokStats?.session?.latestVideoWatched?.video}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Link
                                    </a>
                                    )
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={2} sx={tableHeader}>
                                    Likes
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Total liked videos</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.likes?.totalLikes ?? 0}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Day with most liked videos</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.likes?.dayWithMostLiked?.day
                                        ? tiktokStats?.likes?.dayWithMostLiked?.day?.toLocaleDateString()
                                        : 'Something went wrong'}{' '}
                                    with {tiktokStats?.likes?.dayWithMostLiked?.count} videos
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>First liked video in data</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.likes?.firstLikedVideo?.date
                                        ? tiktokStats?.likes?.firstLikedVideo?.date?.toLocaleDateString()
                                        : 'Something went wrong'}{' '}
                                    (
                                    <a
                                        style={{ color: 'grey' }}
                                        href={tiktokStats?.likes?.firstLikedVideo?.video}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Link
                                    </a>
                                    )
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={2} sx={tableHeader}>
                                    Comments
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Total posted comments</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.comments?.totalComments ?? 0}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Average comment length</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {Math.round(tiktokStats?.comments?.commentLength ?? 0)} characters
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Favorite emoji</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.comments?.mostUsedEmoji?.emoji ?? ''} (
                                    {tiktokStats?.comments?.mostUsedEmoji?.count ?? ''} times)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>First comment in data</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.comments?.firstComment?.comment ?? ''}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Date of first comment </TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.comments?.firstComment?.date
                                        ? tiktokStats?.comments?.firstComment?.date?.toLocaleDateString()
                                        : 'Something went wrong'}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={2} sx={tableHeader}>
                                    Shares
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}> Total shares</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {' '}
                                    {tiktokStats?.shares?.totalShares ?? 0}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>First share </TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.shares?.firstShare?.date
                                        ? tiktokStats?.shares?.firstShare?.date?.toLocaleDateString()
                                        : 'Something went wrong'}{' '}
                                    (
                                    <a
                                        style={{ color: 'grey' }}
                                        href={tiktokStats?.shares?.firstShare?.video}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Link
                                    </a>
                                    )
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Day with most shares</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.shares?.dayWithMostShares?.day
                                        ? tiktokStats?.shares?.dayWithMostShares?.day?.toLocaleDateString()
                                        : 'Something went wrong'}{' '}
                                    with {tiktokStats?.shares?.dayWithMostShares?.count} videos
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={2} sx={tableHeader}>
                                    Lives
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Total lives viewed </TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.live?.totalLiveViewed ?? 0}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Total comments on lives </TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.live?.totalLiveComments ?? 0}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Total gifted coins</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.gifts?.totalGiftAmount ?? 0}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Most gifted user </TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.gifts?.mostGiftsUser ?? ''}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>
                                    Total coins to most gifted user{' '}
                                </TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.gifts?.mostGiftsCount ?? ''}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Total money spent </TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    ${Math.round(tiktokStats?.money?.totalMoneySpent ?? 0)} US Dollars
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={2} sx={tableHeader}>
                                    Blocked
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Total blocked users</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.blocked?.totalBlocked ?? 0}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ ...firstCell, ...rowSeparator }}>Blocked users</TableCell>
                                <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                    {tiktokStats?.blocked?.blockedList?.join(', ')}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}
