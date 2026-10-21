import React, { useState, useEffect } from 'react';

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setUsers(JSON.parse(localStorage.getItem('users') || '[]'));
        setOrders(JSON.parse(localStorage.getItem('orders') || '[]'));
    }, []);

    const deleteUser = (login) => {
        const updated = users.filter(u => u.login !== login);
        setUsers(updated);
        localStorage.setItem('users', JSON.stringify(updated));
    };

    const updateOrderStatus = (id, status) => {
        const updated = orders.map(o => o.id === id ? { ...o, status } : o);
        setOrders(updated);
        localStorage.setItem('orders', JSON.stringify(updated));
    };

    return (
        <div className="page-card" style={{ maxWidth: '900px' }}>
            <h1>Панель администратора</h1>

            {/* Секция пользователей */}
            <h2>Пользователи ({users.length})</h2>
            <table className="admin-table">
                <tbody>
                {users.map((u, i) => (
                    <tr key={i}>
                        <td>{u.login}</td>
                        <td><button className="btn" onClick={() => deleteUser(u.login)}>Удалить</button></td>
                    </tr>
                ))}
                </tbody>
            </table>

            <hr style={{ margin: '40px 0' }} />

            {/* Секция заявок */}
            <h2>Заявки</h2>
            <table className="admin-table">
                <thead>
                <tr>
                    <th>Пользователь</th>
                    <th>Описание</th>
                    <th>Статус</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((o) => (
                    <tr key={o.id}>
                        <td>{o.userLogin}</td>
                        <td>{o.description}</td>
                        <td>{o.status}</td>
                        <td>
                            {o.status === 'Новая' && (
                                <>
                                    <button onClick={() => updateOrderStatus(o.id, 'Одобрено')}>✅</button>
                                    <button onClick={() => updateOrderStatus(o.id, 'Отклонено')}>❌</button>
                                </>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;