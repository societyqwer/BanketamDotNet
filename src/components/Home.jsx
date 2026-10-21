import React from 'react';
import banketImg from '../assets/BanketZal.jpg'; // Импорт фото

const Home = () => {
    return (
        <div className="home-container">
            <header className="page-card">
                <h1>Банкетам.Нет</h1>
                <p>Лучший сервис для выбора площадок для ваших мероприятий.</p>
                {/* Используем класс из style.css */}
                <img src={banketImg} alt="Банкетный зал" className="hero-image" />
            </header>

            <section className="page-card" id="about">
                <h2>О нас</h2>
                <p>Мы работаем уже более 10 лет, помогая сотням пар и компаний найти идеальное место для торжества.</p>
            </section>

            <section className="page-card" id="price">
                <h2>Прайс-лист</h2>
                <table className="admin-table">
                    <thead>
                    <tr>
                        <th>Услуга</th>
                        <th>Цена</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr><td>Базовый подбор</td><td>Бесплатно</td></tr>
                    <tr><td>VIP-сопровождение</td><td>5000 руб.</td></tr>
                    </tbody>
                </table>
            </section>

            <footer className="page-card">
                <h3>Контакты</h3>
                <p>Телефон: +7 (999) 000-00-00</p>
                <p>Email: info@banketam.net</p>
            </footer>
        </div>
    );
};

export default Home;