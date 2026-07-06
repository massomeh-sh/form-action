import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import "react-datepicker/dist/react-datepicker.css";
import './index.css'
import App from './App.tsx'
import LoginProvider from "./store/LoginProvider.tsx";
import {Toaster} from "sonner";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Toaster richColors closeButton duration={2000} position="top-right"/>
        <LoginProvider>
            <App/>
        </LoginProvider>
    </StrictMode>,
)
