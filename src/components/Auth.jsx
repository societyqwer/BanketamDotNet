import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ setCurrentUser }) => {
    const [isLogin, setIsLogin] = useState(true); // Переключатель: true = вход, false = регистрация
    const [formData, setFormData] = useState({ login: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        if (isLogin) {
            // ЛОГИКА ВХОДА
            const user = users.find(u => u.login === formData.login && u.password === formData.password);
            if (user) {
                setCurrentUser(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                navigate('/cabinet');
            } else {
                alert('Неверный логин или пароль');
            }
        } else {
            // ЛОГИКА РЕГИСТРАЦИИ
            if (users.find(u => u.login === formData.login)) {
                return alert('Логин занят!');
            }
            users.push(formData);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Регистрация прошла успешно! Теперь войдите.');
            setIsLogin(true); // Переключаем на форму входа
        }
    };

    return (
        <div className="page-card">
            <h1>{isLogin ? 'Вход' : 'Регистрация'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="Логин" required onChange={(e) => setFormData({...formData, login: e.target.value})} />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Пароль" required onChange={(e) => setFormData({...formData, password: e.target.value})} />
                </div>
                <button type="submit" className="btn">{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
            </form>

            {/* Ссылка-переключатель */}
            <p style={{ marginTop: '15px', cursor: 'pointer' }} onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
            </p>
        </div>
    );
};

export default Auth;