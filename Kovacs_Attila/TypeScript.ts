function osszesOszto(szam: number): number[] {
  let osztok: number[] = [];
  for (let i = 0; i <= szam; i++) {
    if (szam % i === 0) {
      osztok.push(i);
    }
  }
  return osztok.sort(function(a, b){return a-b});
}


function parosDarab(szam: number[]): number {
let kapottSzam:number = 0;

for (let i:number = 0; i<szam.length;i++) {
    if (szam[i] % 2 === 0) {
        kapottSzam++
    }
}
return kapottSzam;
}


function fuggvenyhivasPalindrom(palindrom: () => string):boolean {
    const szov: string = palindrom()
    const szokozNelkul: string = szov.replace(/\s/g, '')
    const forditva = szov.split("").reverse().join("");

    return forditva === szokozNelkul;
}
