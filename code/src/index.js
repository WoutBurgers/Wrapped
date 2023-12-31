import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Paths from './Paths'
import DataProvider from './DataProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <DataProvider>
            <Paths />
        </DataProvider>
    </BrowserRouter>
)
