const herocd =
{
    "super heroe":"superman",
    "pulicacion":"abril de 1938",
    "abilidad":"súper fuerza, invulnerabilidad, la capacidad de volar, visión calorífica, el aliento helado.",
    "imgen":"https://www.mundodeportivo.com/alfabeta/hero/2024/10/clark-kent-superman-dc.jpg?width=1200&aspect_ratio=16:9",
    "chisme":"hussss lo mas buscado del franquisia "
}
const hard ={
    
    "super heroe":"batman",
    "pulicacion":"mayo de 1939",
    "abilidad":" capacidades fisicas de un humano maximo, inteligencia de nivel genio, maestro en artes marciales, experto en todo tipo de armas, maestro inventor, maestro detective, experto en el sigilo.",
    "imgen":"https://lafrikileria.com/blog/wp-content/uploads/2023/11/Batman-dc-comics.jpg",
    "chisme":"muy rico y intelectual pero la soledad lo va amatar"
   
}
const wonder={
    "super heroe":"wonder woman",
    "pulicacion":"1984, fue estrenada el 25 de diciembre de 2020 en Estados Unidos.",
    "abilidad":" La Mujer Maravilla defiende la igualdad con su lazo de la verdad y sus habilidades divinas.",
    "imgen":"https://lafrikileria.com/blog/wp-content/uploads/2023/11/wonder-woman-dc-comics.jpg",
    "chisme":"la mujer sequedo sin el lazo de balentia"
}
const linterna={
    "super heroe":"linterna Verde",
    "pulicacion":"julio de 1940",
    "abilidad":" su anillo le concede la voluntad para enfrentar cualquier amenaza",
    "imgen":"https://lafrikileria.com/blog/wp-content/uploads/2023/11/Linterna-Verde-dc-comics-1024x576.jpg",
    "chisme":"determinado pero da lastma su actitud"
}
const Shazam={
    "super heroe":"Shazam",
    "pulicacion":"1935 de 3 abril",
    "abilidad":" destaca por su honradez, valentía y humildad",
    "imgen":"https://lafrikileria.com/blog/wp-content/uploads/2023/11/Shazam-DC-Comics-1024x576.jpeg",
    "chisme":"guapo y damsiado seductor "
}
const Flash={
    "super heroe":"Flash",
    "pulicacion":"junio 1956",
    "abilidad":" Con su velocidad casi sobrenatural, Barry Allen corre a través del tiempo y el espacio. Divertido y dinámico",
    "imgen":"https://lafrikileria.com/blog/wp-content/uploads/2023/11/Flash-dc-comics.jpg",
    "chisme":"tan rapido que es y le quitaron la novia "
}
const Nightwing={
    "super heroe":"Nightwing",
    "pulicacion":"1978 de 9 mayo",
    "abilidad":" De compañero de Batman a héroe independiente, Nightwing es la personificación de la resiliencia",
    "imgen":"https://lafrikileria.com/blog/wp-content/uploads/2023/11/Nightwing-dc-comics.jpg",
    "chisme":"nunca salio de las costillas de batman"
}
const Catwoman={
    "super heroe":"Catwoman",
    "pulicacion":"1977 de 1 enero",
    "abilidad":"De villana a antiheroína, Catwoman ha reformado su imagen. Con la agilidad, reflejos y velocidad propias de un felino (y habilidades ladronas 😂",
    "imgen":"https://lafrikileria.com/blog/wp-content/uploads/2023/11/Catwoman-dc-comics.jpg",
    "chisme":"villana esotica y sexy "
}
const Flecha={
    "super heroe":"Flecha Verde",
    "pulicacion":"1965 de 17 junio",
    "abilidad":"Flecha Verde ha encontrado su propio camino al margen de Batman. Con su arco y flechas",
    "imgen":"https://lafrikileria.com/blog/wp-content/uploads/2023/11/Flecha-Verde-dc-comics-1024x620.jpg",
    "chisme":"conocido por su desempaño bajo de heroismo "
}
const batgirl={
    "super heroe":"batgirl",
    "pulicacion":"1975 de 30 de diciembre",
    "abilidad":"Flecha Verde ha encontrado su propio camino al margen de Batman. Con su arco y flechas",
    "imgen":"https://lafrikileria.com/blog/wp-content/uploads/2023/11/Batgirl-dc-comics-1024x576.jpg",
    "chisme":"la gran estrovertia  "
}

function mostrarDatoheroes() {
    const datosheroes = document.getElementById("Heroes-generales");
    datosheroes.innerHTML=`
    <p><strong> super heroe : </strong> ${herocd["super heroe"]}
    <p><strong> publicacion : </strong> ${herocd.pulicacion}
    <p><strong> abilidad : </strong> ${herocd.abilidad}
    <p><strong> chisme : </strong> ${herocd.chisme}
    <div class="imagen"><img src="${herocd.imgen}"></div>`
}
function mostrarDatoshar() {
    const datoshar = document.getElementById("Heroes-har");
    datoshar.innerHTML=`
    <p><strong> super heroe : </strong> ${hard["super heroe"]}
    <p><strong> publicacion : </strong> ${hard.pulicacion}
    <p><strong> abilidad : </strong> ${hard.abilidad}
    <p><strong> chisme : </strong> ${hard.chisme}
    <div class="imagen"><img src="${hard.imgen}"></div>
    `
}
function mostrarDatoswonder() {
    const datoswonder = document.getElementById("Heroes-wonder");
    datoswonder.innerHTML=`
    <p><strong> super heroe : </strong> ${wonder["super heroe"]}
    <p><strong> publicacion : </strong> ${wonder.pulicacion}
    <p><strong> abilidad : </strong> ${wonder.abilidad}
    <p><strong> chisme : </strong> ${wonder.chisme}
    <div class="imagen"><img src="${wonder.imgen}"></div>
    `
}
function mostrarDatoslinterna() {
    const datoslinterna = document.getElementById("Heroes-linterna");
    datoslinterna.innerHTML=`
    <p><strong> super heroe : </strong> ${linterna["super heroe"]}
    <p><strong> publicacion : </strong> ${linterna.pulicacion}
    <p><strong> abilidad : </strong> ${linterna.abilidad}
    <p><strong> chisme : </strong> ${linterna.chisme}
    <div class="imagen"><img src="${linterna.imgen}"></div>
    `
}
function mostrarDatosShazam() {
    const datosShazam = document.getElementById("Heroes-Shazam");
    datosShazam.innerHTML=`
    <p><strong> super heroe : </strong> ${Shazam["super heroe"]}
    <p><strong> publicacion : </strong> ${Shazam.pulicacion}
    <p><strong> abilidad : </strong> ${Shazam.abilidad}
    <p><strong> chisme : </strong> ${Shazam.chisme}
    <div class="imagen"><img src="${Shazam.imgen}"></div>
    `
}
function mostrarDatosFlash() {
    const datosFlash = document.getElementById("Heroes-Flash");
    datosFlash.innerHTML=`
    <p><strong> super heroe : </strong> ${Flash["super heroe"]}
    <p><strong> publicacion : </strong> ${Flash.pulicacion}
    <p><strong> abilidad : </strong> ${Flash.abilidad}
    <p><strong> chisme : </strong> ${Flash.chisme}
    <div class="imagen"><img src="${Flash.imgen}"></div>
    `
}
function mostrarDatosNighwing() {
    const datosNighwing = document.getElementById("Heroes-Nighwing");
    datosNighwing.innerHTML=`
    <p><strong> super heroe : </strong> ${Nightwing["super heroe"]}
    <p><strong> publicacion : </strong> ${Nightwing.pulicacion}
    <p><strong> abilidad : </strong> ${Nightwing.abilidad}
    <p><strong> chisme : </strong> ${Nightwing.chisme}
    <div class="imagen"><img src="${Nightwing.imgen}"></div>
    `
}

window.onload=()=>{
    mostrarDatoheroes();
    mostrarDatoshar();
    mostrarDatoslinterna();
    mostrarDatoswonder();
    mostrarDatosNighwing();
    mostrarDatosFlash();
    mostrarDatosShazam();
    
};