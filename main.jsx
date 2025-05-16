import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Users from './Users.jsx'
// import CreateUsers from './CreateUsers.jsx'
// import UpdateUsers from './UpdateUsers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)