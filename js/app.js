

let acordeon = document.querySelectorAll('.titulo')
let contenido = document.querySelectorAll('.contenido')
let flecha = document.querySelectorAll('.flecha')

for(let i = 0; i < acordeon.length; i ++) {
    acordeon[i].addEventListener('click', function(){
        contenido[i].classList.toggle('abierto')
        acordeon[i].classList.add('abajo')
        
        if (contenido[i].offsetHeight === 300) {
            acordeon[i].classList.remove('abajo')
            flecha[i].classList.add('flecha')
        }
        else {
             flecha[i].classList.remove('flecha')
        }
    })
}


