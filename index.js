import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];

// 1. feladat
function letrehozTablazat(lista) {
    let txt = `<table> `;
    for (let index = 0; index < lista.length; index++) {
      txt += `
          <tr>
            <td class = "futok">${lista[index].nev}</td>
            <td>${lista[index].nemzetiseg}</td>
            <td>${lista[index].versenySzam}</td>
          </tr>
          `;
    }
    txt += `</table>`;
    return txt;
  }
  
  const TABLAZAT = document.getElementById("feladat_1");
  TABLAZAT.innerHTML = letrehozTablazat(FUTOK);
  console.log(FUTOK);

// 2. feladat
function osszesites(FUTOK) {
    let felmaraton = 0;
    let maraton = 0;
    let km10 = 0
    let txt = `<p>`;

    for (let i = 0; i < FUTOK.length; i++) {
        if(FUTOK[i].versenySzam == "félmaraton") {
          felmaraton += 1;
        }
        if(FUTOK[i].versenySzam == "maraton") {
          maraton += 1;
        }
        if(FUTOK[i].versenySzam == "10 km"){
          km10 += 1;
        }
      }
        txt += `
                  <h2>Összesítő:</h2>
                  <br>
                  <li>félmaraton: ${felmaraton} db<br></li>
                  <li>maraton: ${maraton} db<br></li>
                  <li>10 km: ${km10} db</li>
                `;
        txt += `</p>`;
        return txt;
  }     

    const OSSZESITES = document.getElementById("feladat_2");
    OSSZESITES.innerHTML = osszesites(FUTOK);



// 3. feladat
function befutott(sor, adatok) {

    
}

// 4. feladat
function torolEsemeny() {

}

// 5. feladat
function ellenoriz(){
  
}