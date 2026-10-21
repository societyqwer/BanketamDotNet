import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ currentUser, setCurrentUser }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
        navigate('/'); // После выхода кидаем на главную
    };

    return (
        <nav className="demo-nav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Главная</Link>

            {!currentUser ? (
                // Показываем ссылку на Auth вместо раздельных Регистрация/Вход
                <Link to="/auth" className={location.pathname === '/auth' ? 'active' : ''}>Вход</Link>
            ) : (
                <>
                    <Link to="/cabinet" className={location.pathname === '/cabinet' ? 'active' : ''}>Личный кабинет</Link>
                    <Link to="/order" className={location.pathname === '/order' ? 'active' : ''}>Оформление заявки</Link>

                    {currentUser.login === 'admin' && (
                        <Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>Админ</Link>
                    )}

                    <a onClick={handleLogout} style={{ cursor: 'pointer' }}>Выйти</a>
                </>
            )}
        </nav>
    );
};

export default Navbar;