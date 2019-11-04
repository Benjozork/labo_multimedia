// Table des styles
const STYLES = ["css/modele11.css",  "css/modele08.css"];

let styleCourrant = 1;

function main() {
    console.log('Changeur de style initialisé.');

    // Ajouter un eventHandler lors du clic sur le lien de changement de style
    document.querySelector('#link-style-switch').addEventListener('click', () => {

        // Changer l'état
        styleCourrant = styleCourrant === 1 ? 0 : 1;

        console.log(`Style changé -> ${styleCourrant}`);

        // Modification feuille principale
        let baliseFeuilleModele = document.querySelector('#feuille-modele');
        let lienModeleCourrant = baliseFeuilleModele.getAttribute('href');
        baliseFeuilleModele
            .setAttribute('href', lienModeleCourrant.replace(STYLES[styleCourrant === 1 ? 0 : 1], STYLES[styleCourrant]));

        /*
        // Enlever feuille custom sur modele11
        document.querySelector('#feuille-custom')
            .setAttribute('href', styleCourrant === 1 ? 'css/custom.css' : '');

        // Enlever id custom sur modele11
        document.querySelector('.navigation-alternative')
            .setAttribute('id',  styleCourrant === 1 ? 'navigation-custom' : 'navigation');
         */
    });
}

main();
