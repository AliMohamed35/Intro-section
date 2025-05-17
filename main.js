function showSideBar() {
    let burger = document.querySelector('.sideBar');
    const body = document.body;
    body.style.backgroundColor = '#00000094';
    burger.style.display = 'flex';
}

function hideSideBar() {
    let hide = document.querySelector('.sideBar');
    const body = document.body;
    body.style.backgroundColor = 'white';
    hide.style.display = 'none';
}
