const herocd =
{
    "super heroe":"superman",
    "pulicacion":"abril de 1938",
    "abilidad":"súper fuerza, invulnerabilidad, la capacidad de volar, visión calorífica, el aliento helado.",
    "imgen":"https://www.mundodeportivo.com/alfabeta/hero/2024/10/clark-kent-superman-dc.jpg?width=1200&aspect_ratio=16:9",
    "chisme":"hussss lo mas buscado del franquisia "
};


function mostrarDatoheroes() {
    const datosheroes = document.getElementById("Heroes-generales");
    datosheroes.innerHtml=`
    <p><strong> super heroe : </strong> ${herocd["super heroe"]}
    <p><strong> publicacion : </strong> ${herocd.pulicacion}
    <p><strong> abilidad : </strong> ${herocd.abilidad}
    <p><strong> imgen: </strong> ${herocd.imgen}`
}

window.onload=()=>{
    mostrarDatoheroes();
};