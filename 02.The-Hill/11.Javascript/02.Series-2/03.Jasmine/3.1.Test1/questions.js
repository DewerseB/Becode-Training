
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let text = texte1 + texte2;
    return text;
}
let afficherCar5 =  (texte) => {
    return texte[4];
}
let afficher9Car =  (texte) => {
    return texte.slice(0, 9);
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
    return (typeof texte === 'string');
}
let AfficherExtensionString =  (texte) => {
    return texte.split('.').pop();
}
let NombreEspaceString =  (texte) => {
    let nb = 0;
    for (let i = 0; i <texte.length; i++) {
        texte[i] === " " && nb++;
    }
    return nb;
}
let InverseString =  (texte) => {
    let inverted = '';
    for (let i = texte.length - 1; i >= 0; i--) {
        inverted = inverted + texte[i];
    }
    return inverted;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x, y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    let absArray = [];
    array.forEach(element => {
        absArray.push(Math.abs(element));
    })
    return absArray;
}
let sufaceCercle =  (rayon) => {
    return Math.round(rayon*rayon*Math.PI);
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt((ab * ab) + (ac * ac));
}
let calculIMC =  (poids, taille) => {
    let imc = poids/Math.pow(taille, 2);
    return parseFloat(imc.toFixed(2));
}
