import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router"
import { ChatPage } from './pages/chatPage.tsx'
import { LoginPage } from './pages/loginPage/loginPage.tsx'
import { RegistrationPage } from './pages/registrationPage/registrationPage.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/chat' element={<ChatPage/>}/>
      <Route path='/registration' element={<RegistrationPage/>}/>
    </Routes>
  </BrowserRouter>
)