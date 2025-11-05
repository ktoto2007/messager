import './loginPage.css'

export const LoginPage = () => {
    return (
        <div className="contanier">
            <p className="login-text">Вход</p>
            <input className="box input" type="text" placeholder="Почта или номер телефона"/>
            <input className="box input password" type="text" placeholder="Пароль"/>
            <button className="login-button box">Войти</button>
            <button className="forgot-password">Забыли пароль?</button>
        </div>
    )
}