function osszesOszto(szam) {
    var osztok = [];
    for (var i = 0; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok.sort(function (a, b) { return a - b; });
}
function parosDarab(szam) {
    var kapottSzam = 0;
    for (var i = 0; i < szam.length; i++) {
        if (szam[i] % 2 === 0) {
            kapottSzam++;
        }
    }
    return kapottSzam;
}
function fuggvenyhivasPalindrom(palindrom) {
    var szov = palindrom();
    var szokozNelkul = szov.replace(/\s/g, '');
    var forditva = szov.split("").reverse().join("");
    return forditva === szokozNelkul;
}
var elemek = ["Elem1", "Elem2", "Elem3"];
