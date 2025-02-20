

 // $(document).ready(main);
  $( document ).ready(function() {
    main();
   
  });

  window.addEventListener("load", function() {
    const loadingdiv= document.querySelector(".content-spinner-carga");
    setTimeout(() => {
      loadingdiv.classList.add("contetn-spinner-remover");
    }, 200);

  });


const divlogoComputer=document.querySelector(".logo-computer");
const divTitleProduct=document.querySelectorAll(".title-product");

var contador = 1;
 function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;

		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}

$( "#button-advanced-filter" ).on( "click", function() {
  $("#content-advanced-filters").toggle('slow');
});

function resumenTexto(){


  for(let i=0;i< divTitleProduct.length;i++){
    let titleProduct=String(divTitleProduct[i].textContent).trim();

    let cadenaTitle= titleProduct.slice(0,80)+" ...";
    divTitleProduct[i].innerHTML=cadenaTitle;
  }
}



resumenTexto();


/*Pagination js */
const element = document.querySelector(".pagination ul");
let totalPages = 15;
let page = 1;
//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page){
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){ //show the next button if the page value is greater than 1
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
  }
  if(page > 2){ //if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if(page > 3){ //if page value is greater than 3 then add this (...) after the first li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }
  // how many pages or li show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // how many pages or li show after the current li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage  = afterPage + 1;
  }
  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { //if plength is greater than totalPage length then continue
      continue;
    }
    if (plength == 0) { //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }
    if(page == plength){ //if page is equal to plength than assign active string in the active variable
      active = "active";
    }else{ //else leave empty to the active variable
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }
  if(page < totalPages - 1){ //if page value is less than totalPage value by -1 then show the last li or page
    if(page < totalPages - 2){ //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }
  if (page < totalPages) { //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }
  element.innerHTML = liTag; //add li tag inside ul tag

mostrarData(page);
  return liTag; //reurn the li tag
}

function mostrarData(page){
    console.log("page",page);
    //Conexion a mysql , solicitud http para traer data por pagina
}

const botonAccordion=document.querySelectorAll(".accordion-open");
const accordionTitle=document.querySelectorAll(".content-title-filter");
//const contentAccordion=$(".content-options-filter");
function accordion(){

  for(let i=0;i<accordionTitle.length;i++){
    let aux=true;
    accordionTitle[i].addEventListener('click',(e)=>{
      if(aux){
        botonAccordion[i].innerHTML='-';
      }
      if(!aux){
        botonAccordion[i].innerHTML='+';
      }
      $(`.content-options-filter:eq(${i})`).toggle("slow");
      aux=!aux;
    });
  }

}
accordion();

