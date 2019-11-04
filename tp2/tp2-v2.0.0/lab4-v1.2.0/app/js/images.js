/**
 * @type {number}
 */
const NOMBRE_IMAGES = 4;

function images() {

    for (let i = 1; i < NOMBRE_IMAGES + 1; i++) {
        ajouterChangementImage(i); // Ajouter les événements pour chaque image
    }

    /**
     * @param index {number}
     */
    function ajouterChangementImage(index) { // Ajouter un événement pour une image
        let petiteImage = $(`#petite-image-${index}`);
        let grandeImage = $(`#grande-image-${index}`);

        $(grandeImage).hide();

        petiteImage.click(() => {
            $(grandeImage).slideDown(); // Afficher l'image
            $(`.grande-image:not(#grande-image-${index})`).slideUp(); // Cacher les autres
        })
    }

}

images();
