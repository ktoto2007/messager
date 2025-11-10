import { useNavigate } from 'react-router-dom'
import './loginPage.css'
import { useState } from 'react'

export const LoginPage = () => {
    const navigate = useNavigate()

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    const buttonHandler = () => {
        // реализовать проверку на то что поля заполнены
        // при наличии ввода переключить страницу
        if (login !== '' && password !== '') {
            navigate('/chat')
        }
    }

    return (
        <div className="contanier">
            <p className="login-text">Вход</p>
            <input onChange={(e) => setLogin(e.target.value)} className="box input" type="text" placeholder="Почта или номер телефона"/>
            <input onChange={(e) => setPassword(e.target.value)} className="box input password" type="password" placeholder="Пароль"/>
            <button onClick={buttonHandler} className="login-button box">Войти</button>
            <button className="forgot-password">Забыли пароль?</button>
        </div>
    )
}