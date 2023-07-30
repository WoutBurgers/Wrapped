import React from 'react'
import Home from './pages/Home'
import tiktokRoutes from './tiktok/TikTokRoutes'
import twitterRoutes from './twitter/TwitterRoutes'
import { Route, Navigate, Routes } from 'react-router-dom'

export default function Paths() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />

                {tiktokRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.component} />
                ))}

                {twitterRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.component} />
                ))}

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}
