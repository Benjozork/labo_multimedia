// Table des styles
const STYLES = ["css/modele11.css",  "css/modele08.css"];

// Appeler main au chargement
$('html').ready(() => main());

let styleCourrant = 0;

function main() {
    console.log('Changeur de style initialisé.');

    // Ajouter un eventHandler lors du clic sur le lien de changement de style
    $('#link-style-switch').click(() => {

        // Changer l'état
        styleCourrant = styleCourrant === 1 ? 0 : 1;

        console.log(`Style changé -> ${styleCourrant}`);

        // Modification feuille principale
        $('#feuille-modele')
            .attr('href', STYLES[styleCourrant]);

        // Enlever feuille custom sur modele11
        $('#feuille-custom')
            .attr('href', styleCourrant === 1 ? 'css/custom.css' : '');

        // Enlever id custom sur modele11 NE FONCTIONNE PAS, FIXME
        $('#navigation-custom')
            .id = styleCourrant === 1 ? 'navigation-custom' : 'navigation';
    });
}
