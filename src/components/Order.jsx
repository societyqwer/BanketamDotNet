import React, { useState } from 'react';

const Order = ({ currentUser }) => {
    // Теперь состояние хранит объект с несколькими полями
    const [orderData, setOrderData] = useState({
        hall: 'Зал №1',
        date: '',
        service: '',
        description: ''
    });

    const handleCreateOrder = (e) => {
        e.preventDefault();

        // Простая валидация даты
        if (!orderData.date) return alert('Выберите дату!');

        const newOrder = {
            id: Date.now(),
            userLogin: currentUser.login,
            ...orderData, // Копируем все поля из формы
            status: 'Новая'
        };

        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push(newOrder);
        localStorage.setItem('orders', JSON.stringify(orders));

        alert('Заявка успешно отправлена!');
        setOrderData({ hall: 'Зал №1', date: '', service: '', description: '' });
    };

    return (
        <div className="page-card">
            <h2>Бронирование</h2>
            <form onSubmit={handleCreateOrder}>
                <div className="form-group">
                    <label>Номер зала</label>
                    <select value={orderData.hall} onChange={(e) => setOrderData({...orderData, hall: e.target.value})}>
                        <option>Зал №1</option>
                        <option>Зал №2</option>
                        <option>Конференц-зал</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Дата</label>
                    <input type="date" required onChange={(e) => setOrderData({...orderData, date: e.target.value})} />
                </div>

                <div className="form-group">
                    <label>Тип услуги</label>
                    <input type="text" placeholder="Например: Аренда, Кейтеринг" onChange={(e) => setOrderData({...orderData, service: e.target.value})} />
                </div>

                <div className="form-group">
                    <label>Комментарий</label>
                    <textarea rows="4" placeholder="Дополнительные пожелания..." onChange={(e) => setOrderData({...orderData, description: e.target.value})} />
                </div>

                <button type="submit" className="btn">Отправить заявку</button>
            </form>
        </div>
    );
};

export default Order;