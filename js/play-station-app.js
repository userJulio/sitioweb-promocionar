let videojuegosps5=[
 {
   id:1,

   urlvideo:`<iframe class='video-frame'
                                    src="https://www.youtube.com/embed/-L1EuRo54pI?si=bZP3atBt4sMcE99M"
                                    title="YouTube video player" frameborder="0"
                                    
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
 },
 {
    id:2,
    urlvideo:`<iframe class='video-frame'src="https://www.youtube.com/embed/F3jePdO9_jc?si=OQ2rWnyfxFzgGoQ3"
                                loading="lazy"
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
  }  ,
  {
    id:3,
    urlvideo:` <iframe class='video-frame' src="https://www.youtube.com/embed/rCIV0y8jNy4?si=-Q7bwxqDIVbr8GAn" title="YouTube video player" loading="lazy"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
  }   ,
  {
    id:4,
    urlvideo:` <iframe class='video-frame' src="https://www.youtube.com/embed/ygvGLIgi0v0?si=FtzmpaNzbzWu9Bmq" title="YouTube video player" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
  } ,
  {
    id:5,
    urlvideo:`<iframe class='video-frame' src="https://www.youtube.com/embed/ySktL_lzdCk?si=s_4f8z1k8AG8GRsA" title="YouTube video player"  loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
  }  ,
  {
    id:6,
    urlvideo:`<iframe class='video-frame' src="https://www.youtube.com/embed/S6GTl_vPRvU?si=ICpVMCIMOtqfbZmh" title="YouTube video player"  loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
  }         
];

const imgVideo=document.querySelectorAll(".img-juegos-video");
const poput=document.querySelector(".content-poput-video");
const poputvideo=document.querySelector(".content-poput-video");
const divContetnVideo=document.querySelector(".poput-video");

function mostrarPoputVideo(){

    poputvideo.addEventListener("click",()=>{
        poput.classList.remove('active');
        $('.video-frame').each(function(){
          var el_src = $(this).attr("src");
          $(this).attr("src",el_src);
        });
    });

    for(let i=0;i<imgVideo.length;i++){
        imgVideo[i].addEventListener('click',(e)=>{
            poput.classList.add('active');
            let pos=i+1;
            if(pos==videojuegosps5[i].id){
              divContetnVideo.innerHTML=videojuegosps5[i].urlvideo;
            }
           
        });
    }



}

mostrarPoputVideo();


const descripcionps5Ps4=document.querySelector(".description-ps5-vs-ps4");
const divDescriptionPs5=document.querySelector("#content-border-ps5");
const divDescriptionPs4=document.querySelector("#content-border-ps4");

const divContenttipops51=document.querySelector("#content-tipos1-ps5");
const divContenttipops52=document.querySelector("#content-tipos2-ps5");
const divContenttipops53=document.querySelector("#content-tipos3-ps5");
const divContenttipops54=document.querySelector("#content-tipos4-ps5");
const divContenttipops55=document.querySelector("#content-tipos5-ps5");

const divTitposPs4=document.querySelector("#contet-tipos-ps4");
const contetndivjuegoPs15=document.querySelector(".content-juego1-ps5");
const contetndivjuegoPs25=document.querySelector(".content-juego2-ps5");
const contetndivjuegoPs35=document.querySelector(".content-juego3-ps5");
const contetndivjuegoPs45=document.querySelector(".content-juego4-ps5");
const contetndivjuegoPs55=document.querySelector(".content-juego5-ps5");
const contetndivjuegoPs65=document.querySelector(".content-juego6-ps5");

const observer=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
      descripcionps5Ps4.classList.add("animate__animated","animate__fadeInUp");
    }
});

const observer1=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    divDescriptionPs5.classList.add("animate__animated","animate__zoomInUp");
  }
});

const observer2=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    divDescriptionPs4.classList.add("animate__animated","animate__zoomInUp");
  }
});

const observer3=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    divContenttipops51.classList.add("animate__animated","animate__zoomInUp");
  }
});
const observer4=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    divContenttipops52.classList.add("animate__animated","animate__zoomInUp");
  }
});
const observer5=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    divContenttipops53.classList.add("animate__animated","animate__zoomInUp");
  }
});
const observer6=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    divContenttipops54.classList.add("animate__animated","animate__zoomInUp");
  }
});
const observer7=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    divContenttipops55.classList.add("animate__animated","animate__zoomInUp");
  }
});

const observer8=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    divTitposPs4.classList.add("animate__animated","animate__zoomInUp");
  }
});

const observer9=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    contetndivjuegoPs15.classList.add("animate__animated","animate__zoomInUp");
  }
});

const observer10=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    contetndivjuegoPs25.classList.add("animate__animated","animate__zoomInUp");
  }
});

const observer11=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    contetndivjuegoPs35.classList.add("animate__animated","animate__zoomInUp");
  }
});

const observer12=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    contetndivjuegoPs45.classList.add("animate__animated","animate__zoomInUp");
  }
});

const observer13=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    contetndivjuegoPs55.classList.add("animate__animated","animate__zoomInUp");
  }
});

const observer14=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    contetndivjuegoPs65.classList.add("animate__animated","animate__zoomInUp");
  }
});


observer.observe(descripcionps5Ps4);
observer1.observe(divDescriptionPs5);
observer2.observe(divDescriptionPs4);
observer3.observe(divContenttipops51);
observer4.observe(divContenttipops52);
observer5.observe(divContenttipops53);
observer6.observe(divContenttipops54);
observer7.observe(divContenttipops55);
observer8.observe(divTitposPs4);

  observer9.observe(contetndivjuegoPs15);
  observer10.observe(contetndivjuegoPs25);
  observer11.observe(contetndivjuegoPs35);
  observer12.observe(contetndivjuegoPs45);
  observer13.observe(contetndivjuegoPs55);
  observer14.observe(contetndivjuegoPs65);

