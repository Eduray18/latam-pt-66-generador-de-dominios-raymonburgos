const pronouns = ['the', 'our'];
const adjs = ['great', 'big'];
const nouns = ['jogger', 'racoon', 'puedes', 'amazing'];
const extensions = ['.com', '.net', '.us', '.io', '.es']; 
const generateDomain = (p, a, n, ext) => {
    let fullName = `${p}${a}${n}`;
    
    
    if (fullName.endsWith(ext.replace('.', ''))) {
        let nameWithoutExt = fullName.slice(0, -ext.replace('.', '').length);
        return `${nameWithoutExt}${ext}`;
    }
    return `${fullName}${ext}`;
};

console.log("--- Listado de Dominios Generados ---");
for (let p of pronouns) {
    for (let a of adjs) {
        for (let n of nouns) {
            for (let ext of extensions) {
                console.log(generateDomain(p, a, n, ext));
            }
        }
    }
}