import './registrationPage.css'

export const RegistrationPage  = () => {
    return (
        <div className="contanier">
            <div className="title">Регистрация</div>
            <img className="profile" src="src\assets\Profile.svg" alt=""/>
            <input className="box input" type="text" placeholder="Номер телефона"/>
            <input className="box input" type="text" placeholder="Почта"/>
            <input className="box input" type="password" placeholder="Пароль"/>
            <button className="box button">Продолжить</button>
        </div>
    )
}