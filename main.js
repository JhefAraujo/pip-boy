function changeSection(section) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector("." + section).classList.add('active');
}