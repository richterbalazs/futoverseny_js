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
function befutott() {
  /* <!-- Ha a feladat_1-ben lévő táblázat egyik elemére kattintunk -->
  <!-- Az aktuális elem sora kapja meg a .befutott osztályt -->
  <!-- feladat_3 elembe töltsük be a versenyző nevét, idejét, nemzetiségét -->
  <!-- Oldjuk meg, hogy egy versenyző egyszer szerepelhessen a feladat_3 elemben --> */

  const befutottELEM = document.querySelectorAll("#feladat_1 tr")
    console.log(befutottELEM)
    for (let index = 0; index < befutottELEM.length; index++) {
        befutottELEM[index].addEventListener("click", function(){
            console.log(befutottELEM[index])
            befutottELEMEK.innerHTML += `<tr>
            <td>${FUTOK[index].nev}</td>
            <td>${FUTOK[index].versenyIdo}</td>
            <td>${FUTOK[index].nemzetiseg}</td>
            </tr>`
        })
    }
   
}
const befutottELEMEK = document.querySelectorAll("#feladat_3")[0]
befutott()


// 4. feladat
function torolEsemeny() {

}

// 5. feladat
function ellenoriz(){
  
}