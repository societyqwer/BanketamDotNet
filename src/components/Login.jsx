import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setCurrentUser }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.login === login && u.password === password);

        if (user) {
            setCurrentUser(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            navigate('/cabinet');
        } else {
            alert('Неверный логин или пароль');
        }
    };

    return (
        <div className="page-card">
            <h1>Вход</h1>
            <form onSubmit={handleLogin}>
                {/* Теперь каждый input находится внутри своего блока с отступами */}
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Логин"
                        onChange={(e) => setLogin(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Пароль"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn">Войти</button>
            </form>
        </div>
    );
};
export default Login;