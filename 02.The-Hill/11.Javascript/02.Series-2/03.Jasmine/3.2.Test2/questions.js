let CreationTableauLangages =  () => {
    let langages = ['Html', 'CSS', 'Java', 'PHP'];
    return langages;
}

let CreationTableauNombres =  () => {
    let nombres = [];
    for (let i = 0; i < 6; i++) {
        nombres.push(i);
    }
    return nombres;
}

let RemplacementElement =  (langages) => {
    langages[2] = 'Javascript';
    return langages;
}

let AjoutElementLangages =  (langages) => {
    langages.push('Ruby');
    langages.push('Python');
    return langages;
}

let AjoutElementNombres =  (nombres) => {
    let negatives = [-2, -1];
    return negatives.concat(nombres);
}

let SuppressionPremierElement =  (langages) => {
    return langages.slice(1, langages.length);
}

let SuppressionDernierElement =  (langages) => {
    return langages.slice(0, langages.length - 1);
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let reseaux_sociaux = reseaux_sociaux_chaine.split(',');
    return reseaux_sociaux;
}

let ConversionTableauChaine =  (langages) => {
    let langagesString = '';
    langages.forEach(langage => {
        langages.indexOf(langage) !== 0 && (langagesString = langagesString + ',');
        langagesString = langagesString + langage;
    });
    return langagesString;
}

let TriTableau =  (reseaux_sociaux) => {
    return reseaux_sociaux.sort();
}

let InversionTableau =  (reseaux_sociaux) =>{
    let reseaux_reverse = [];
    for (let i = reseaux_sociaux.length-1; i >= 0; i--) {
        reseaux_reverse.push(reseaux_sociaux[i]);
    }
    return reseaux_reverse;
}
