const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

if (menuIcon) {
    menuIcon.addEventListener('click', function (e) {
        nav.classList.toggle('active');
        e.preventDefault();
    })
}

const langs = document.querySelectorAll('.lang__link');

if (langs.length > 0) {
    for (let index = 0; index < langs.length; index++) {
        const lang = langs[index];

        lang.addEventListener('click', function (e) {

            for (let index = 0; index < langs.length; index++) {
                if (langs[index].classList.contains('active'))
                    langs[index].classList.remove('active');
            }
            lang.classList.add('active');
            e.preventDefault();
        });
    }
}