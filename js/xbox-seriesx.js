let videojuegosps5=[
    {
      id:1,
   
      urlvideo:`<iframe class='video-frame' src="https://www.youtube.com/embed/XCsQcdCXG5o?si=yqyg-Vqo_m3IIaQJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
       id:2,
       urlvideo:`<iframe class='video-frame'  src="https://www.youtube.com/embed/FYH9n37B7Yw?si=B1-qkfwON01KkfAJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
     }  ,
     {
       id:3,
       urlvideo:`<iframe class='video-frame'  src="https://www.youtube.com/embed/7UszxhWvVi0?si=IhPaifxGbt6US9yJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
     }   ,
     {
       id:4,
       urlvideo:`<iframe class='video-frame' src="https://www.youtube.com/embed/DS2lnPWpqks?si=E60gfbrG32vT_z7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` 
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

   const contentxboxseries= document.querySelector("#content-xboxX-vs-xboxs");
   const contentxboxps5=document.querySelector("#content-xbox-vs-ps5");
   const juegosxbox1=document.querySelector(".content-juego1-xbox");
   const juegosxbox2=document.querySelector(".content-juego2-xbox");
   const juegosxbox3=document.querySelector(".content-juego3-xbox");
   const juegosxbox4=document.querySelector(".content-juego4-xbox");

   
const observer=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    contentxboxseries.classList.add("animate__animated","animate__zoomInUp");
  }
});

const observer1=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    contentxboxps5.classList.add("animate__animated","animate__zoomInDown");
  }
});

const observer2=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    juegosxbox1.classList.add("animate__animated","animate__fadeInDown");
  }
});

const observer3=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    juegosxbox2.classList.add("animate__animated","animate__fadeInDown");
  }
});


const observer4=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    juegosxbox3.classList.add("animate__animated","animate__fadeInDown");
  }
});

const observer5=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    juegosxbox4.classList.add("animate__animated","animate__fadeInDown");
  }
});
observer.observe(contentxboxseries);
observer1.observe(contentxboxps5);
observer2.observe(juegosxbox1);
observer3.observe(juegosxbox2);
observer4.observe(juegosxbox3);
observer5.observe(juegosxbox4);