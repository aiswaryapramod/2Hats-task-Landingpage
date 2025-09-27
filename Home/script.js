document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const sidebar = document.getElementById('sidebar');

    const sidebarLinks = document.querySelectorAll('.sidebar-nav-links a');

    // Function to open the sidebar
    const openSidebar = () => {
        sidebar.classList.add('open');
    };

    // Function to close the sidebar
    const closeSidebar = () => {
        sidebar.classList.remove('open');
    };

    burgerBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);

    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
});