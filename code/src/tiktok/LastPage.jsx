import React, { useContext } from 'react'
import { Context } from '../DataProvider'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import HomeButton from '../components/HomeButton'

export default function LastPage() {
    const { tiktokStats } = useContext(Context)

    const pageStyle = {
        textAlign: 'center',
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        position: 'relative',
    }

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
        color: '#929292',
    }

    const secondCell = {
        color: 'white',
    }

    const rowSeparator = {
        borderTop: '1px solid #ccc',
    }

    return (
        <div style={pageStyle}>
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
                            <TableCell sx={{ ...firstCell, ...rowSeparator }}>Total videos watched</TableCell>
                            <TableCell sx={{ ...secondCell, ...rowSeparator }}>{tiktokStats.viewedVideos}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ ...firstCell, ...rowSeparator }}>Total watch time</TableCell>
                            <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                {Math.round(tiktokStats.totalWatchTimeSec / 60)} minutes
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ ...firstCell, ...rowSeparator }}>Watch sessions</TableCell>
                            <TableCell sx={{ ...secondCell, ...rowSeparator }}>{tiktokStats.totalSessions}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ ...firstCell, ...rowSeparator }}>Average session length</TableCell>
                            <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                {Math.round(tiktokStats.averageSessionLengthSec / 60)} minutes
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ ...firstCell, ...rowSeparator }}>Longest watch session</TableCell>
                            <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                {Math.round(tiktokStats.longestWatchSession.lengthSec / 60)} minutes on{' '}
                                {tiktokStats.longestWatchSession.startTime.toLocaleDateString()}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ ...firstCell, ...rowSeparator }}>Earliest video watched in data</TableCell>
                            <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                {tiktokStats.firstVideo.toLocaleDateString()}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ ...firstCell, ...rowSeparator }}>Last video watched in data</TableCell>
                            <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                {tiktokStats.latestVideoWatched.toLocaleDateString()}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ ...firstCell, ...rowSeparator }}>Most active weekday</TableCell>
                            <TableCell sx={{ ...secondCell, ...rowSeparator }}>
                                {tiktokStats.mostActiveWeekday.weekday} with{' '}
                                {Math.round(tiktokStats.mostActiveWeekday.averageUsageTime / 60)} minutes
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
                            <TableCell sx={{ ...secondCell, ...rowSeparator }}>5</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
