import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import './css/TicTacToe.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
