const form  =  document.querySelector("form")
const btn = document.getElementById("formSubmit")
const element = Array.from(form.elements)


btn.addEventListener("submit", (event)=>{
   event.preventDefault();
// for(e of element){
//     console.log(e.value)
// }
 console.log(event.target.value)
})