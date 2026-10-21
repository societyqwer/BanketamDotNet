import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({ login: '', password: '', fio: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Получаем текущий список пользователей
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        // 2. Проверяем, не занят ли логин
        if (users.find(u => u.login === formData.login)) {
            alert('Такой логин уже занят!');
            return;
        }

        // 3. Добавляем нового пользователя в массив
        users.push(formData);

        // 4. Сохраняем обновленный массив обратно в localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Регистрация успешна! Теперь вы можете войти.');
    };

    return (
        <div className="page-card">
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Логин"
                        onChange={(e) => setFormData({...formData, login: e.target.value})}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Пароль"
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        required
                    />
                </div>
                <button type="submit" className="btn">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Register;