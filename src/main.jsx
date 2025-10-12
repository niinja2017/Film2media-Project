import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './StyleSheet.css'
import AllSection from './AllSection'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AllSection />
    </StrictMode>,
)
