window.addEventListener('scroll', function () {
    let header = document.getElementById('header');
    let main = document.getElementById('main');
    let getStarted = document.querySelector('#getStartedButton')

    // Prendo l'altezza totale del documento
    let documentHeight = document.documentElement.scrollHeight;

    // Prendo l'altezza dell'area visibile
    let viewportHeight = window.innerHeight;

    // Prendo la posizione dello scroll
    let scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

    // Calcolo la percentuale di scroll con una proporzione
    let scrollPercentage = (scrollPosition / (documentHeight - viewportHeight)) * 100;

    // Cambio il colore di sfondo dell'header quando si raggiunge il 30% (ovvero l'altezza dell'header)
    if (scrollPercentage >= 30) {
        header.style.backgroundColor = 'white';
        getStarted.style.backgroundColor = 'green'
    } else {
        header.style.backgroundColor = '';
        getStarted.style.backgroundColor = ''
    }
});