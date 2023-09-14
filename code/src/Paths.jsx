import React from 'react'
import Home from './pages/Home'
import tiktokRoutes from './tiktok/prep/TikTokRoutes'
import twitterRoutes from './twitter/TwitterRoutes'
import { Route, Navigate, Routes } from 'react-router-dom'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function Paths() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/terms-of-service/" element={<TermsOfService />} />
                <Route path="/privacy-policy/" element={<PrivacyPolicy />} />

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
