import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化样式
import "reset-css"
// UI框架的样式

// 全局样式
import '@/assets/styles/global.scss'

import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
)
