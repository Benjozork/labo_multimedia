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

        let boutonChangement = document.querySelector('#link-style-switch');
        boutonChangement
            .innerHTML = boutonChangement.innerHTML.replace(styleCourrant === 1 ? 'modele11' : 'modele08', styleCourrant === 1 ? 'modele08' : 'modele11');

    });
}

main();
