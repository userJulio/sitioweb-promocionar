const textoLaptops= document.querySelector("#content-laptops-gamer");
const divtarjetagrafica=document.querySelector("#descripction-tarjet-grafica");
const divContNvidia=document.querySelector("#content-cards-nvidia");
const divMemoriaram=document.querySelector("#description-memoria-ram");
const divmemoriavram=document.querySelector("#description-memoria-vram");
const divprocesadorintel=document.querySelector("#content-processor-intel");
const divProcesadorAmd=document.querySelector("#content-processor-amd");
const divDiscoSolido=document.querySelector("#description-disco-solido");


const observer=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
        textoLaptops.classList.add("animate__animated","animate__zoomInUp");
    }
});


const observer2=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
        divtarjetagrafica.classList.add("animate__animated","animate__zoomInUp");
    }
});

const observer3=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
        divContNvidia.classList.add("animate__animated","animate__fadeInLeft");
    }
});

const observer4=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
        divMemoriaram.classList.add("animate__animated","animate__fadeInUp");
    }
});

const observer5=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
        divmemoriavram.classList.add("animate__animated","animate__zoomInDown");
    }
});

const observer6=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
        divprocesadorintel.classList.add("animate__animated","animate__zoomInUp");
    }
});

const observer7=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
        divProcesadorAmd.classList.add("animate__animated","animate__zoomInUp");
    }
});

const observer8=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
        divDiscoSolido.classList.add("animate__animated","animate__zoomInUp");
    }
});

observer.observe(textoLaptops);
observer2.observe(divtarjetagrafica);
observer3.observe(divContNvidia);
observer4.observe(divMemoriaram);
observer5.observe(divmemoriavram);
observer6.observe(divprocesadorintel);
observer7.observe(divProcesadorAmd);
observer8.observe(divDiscoSolido);