(function() {
    
    // ДЕМО-НАВИГАЦИЯ
    // весь этот блок можно заменить на React
    const pages = {
        register: document.getElementById('page-register'),
        login: document.getElementById('page-login'),
        cabinet: document.getElementById('page-cabinet'),
        order: document.getElementById('page-order'),
        admin: document.getElementById('page-admin')
    };

    const navLinks = document.querySelectorAll('[data-page]');
    
    function showPage(pageId) {
        // скрыть все
        Object.keys(pages).forEach(key => {
            pages[key].style.display = 'none';
        });
        // показать нужную
        if (pages[pageId]) {
            pages[pageId].style.display = 'block';
        }
        // обновить активный пункт меню
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            }
        });
    }

    // Обработка кликов по навигационным ссылкам (включая ссылки "Вход"/"Регистрация")
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            if (page) {
                showPage(page);
            }
        });
    });

    // По умолчанию показываем страницу регистрации
    showPage('register');

})();