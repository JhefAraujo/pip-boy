function changeSection(section) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector("." + section).classList.add('active');
    document.querySelector('.main').classList.remove('main');
    document.getElementById(section).classList.add('main');
    document.getElementsByClassName('eff')[0].style.display = 'block';
    document.getElementsByClassName('eff')[1].style.display = 'block';
    setTimeout(() => {
        document.getElementsByClassName('eff')[0].style.display = 'none';
        document.getElementsByClassName('eff')[1].style.display = 'none';
    }, 100);
}

function playAudio() {
        setTimeout(() => {
            var audio = document.getElementById('audio');
            audio.muted = false;
        }, 100);
}

function pauseAudio() {
    var audio = document.getElementById('audio');
    audio.muted = true;
}

window.onblur = function () {
    pauseAudio();
}

window.onfocus = function () {
    playAudio();
}