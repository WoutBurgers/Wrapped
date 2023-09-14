import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'
import BottomNavigations from '../components/BottomNavigations'

function Home() {
    return (
        <div className="standard-style">
            <div style={{ height: '100px' }}></div>
            <h1>Lets Get Wrapped</h1>
            <p>Find out your social media habits! 🫵</p>
            <div>
                <div className="menu-buttons">
                    <Link to="/tiktok/upload/" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button variant="contained">TikTok</Button>
                    </Link>
                </div>
                <div className="menu-buttons">
                    <Link
                        to="/twitter/upload/"
                        style={{ textDecoration: 'none', color: 'white', pointerEvents: 'none' }}
                    >
                        <Button disabled variant="contained">
                            Twitter
                        </Button>
                    </Link>
                </div>
            </div>
            <div style={{ height: '50px' }}></div>
            <h3>Frequently Asked Questions</h3>
            <FAQ />
            <div style={{ height: '100px' }}></div>
            <BottomNavigations />
            <p style={{ fontSize: 'calc(2px + 2vmin)' }}>
                &quot;TikTok&quot; is a registered trademark owned by Bytedance Ltd. This website is not affiliated
                with, endorsed by, or sponsored by TikTok or Bytedance Ltd.
            </p>
        </div>
    )
}

export default Home
