$(document).ready(main);

var contador = 1;

function main(){
	$('.hamburguesa').click(function(){
		//simple//$('nav').toggle();
		if(contador==1){
			$('nav').animate({
				left:'0'
			});
			contador='0';
		}else{
			contador=1;
			$('nav').animate({
				left:'-100%'
			});
		}
	});
}
//document.querySelectorAll(".reloj")[0].addEventListener("click",()=>{
//   let relojh=document.querySelectorAll(".hora")[0]
//    let horap=new Date();
//    relojh.innerText="La Hora es:"+horap.getHours()+":"+horap.getMinutes()+":"+horap.getSeconds();
//    relojh.classList.toggle("mostrar")
//})
