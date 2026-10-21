import React, { useState, useEffect } from 'react';

const Cabinet = ({ currentUser }) => {
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        // Загружаем все заявки
        const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        // Оставляем только те, что принадлежат текущему пользователю
        const filtered = allOrders.filter(o => o.userLogin === currentUser.login);
        setMyOrders(filtered);
    }, []);

    return (
        <div className="page-card">
            <h1>Личный кабинет</h1>
            <p>Привет, <strong>{currentUser.login}</strong>! Здесь ваши заявки:</p>

            {myOrders.length === 0 ? (
                <p>У вас пока нет оформленных заявок.</p>
            ) : (
                <table className="admin-table">
                    <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Зал</th>
                        <th>Услуга</th>
                        <th>Статус</th>
                    </tr>
                    </thead>
                    <tbody>
                    {myOrders.map((o) => (
                        <tr key={o.id}>
                            <td>{o.date}</td>
                            <td>{o.hall}</td>
                            <td>{o.service}</td>
                            <td>
                                    <span className={`status-${o.status.toLowerCase()}`}>
                                        {o.status}
                                    </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Cabinet;