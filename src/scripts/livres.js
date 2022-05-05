export default (spells) => {
    let livres = {};

    spells.forEach((spell) => {
        if (livres[spell[0]] != undefined) {
            livres[spell[0]] = livres[spell[0]] + 1;
        } else {
            livres[spell[0]] = 1;
        }
    });

    return livres;
}