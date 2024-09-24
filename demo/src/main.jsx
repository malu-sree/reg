import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import Testingpage from './testingPage.jsx'
import Headerpage from './header.jsx'
import Addpage from './add.jsx'
import Area from './radius.jsx'
import RegistrationPage from './reg.jsx'
import Register from './register.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistrationPage/>
    
  </StrictMode>,
)
