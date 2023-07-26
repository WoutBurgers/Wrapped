import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import tiktokRoutes from './tiktok/TikTokRoutes'
import twitterRoutes from './twitter/TwitterRoutes'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
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
        </BrowserRouter>
    </React.StrictMode>
)
