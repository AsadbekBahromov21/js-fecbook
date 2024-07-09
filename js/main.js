const main = document.querySelector(".main__box")
const form = document.querySelector(".form")
 const main__up = document.querySelector(".main__up")
 const main__name = document.querySelector(".input")
    // console.log(input);

main__name.addEventListener("click", ()=>{
    alert("maydon toldiring")
} )
 main__up.addEventListener("click", ()=>{
    alert("Sizga tashakur")
 

})
function toggleShow (){
    main.classList.toggle("show")
}