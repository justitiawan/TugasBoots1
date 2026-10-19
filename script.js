document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('header nav a, footer a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Menu diklik: ' + this.textContent.trim());
        });
    });

    document.getElementById('btnLearn').addEventListener('click', function () {
        alert('Learn More diklik!');
    });

    document.getElementById('btnStart').addEventListener('click', function () {
        alert('Get Started diklik!');
    });

    document.querySelectorAll('.menu-card').forEach(function (card) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function () {
            var judul = this.querySelector('.card-title').textContent;
            console.log(judul + ' dipilih');
        });
    });
});