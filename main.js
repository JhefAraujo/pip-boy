function changeSection(section) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector("." + section).classList.add('active');
    document.querySelector('.main').classList.remove('main');
    document.getElementById(section).classList.add('main');
}