/*******************************
 * Datos usados
 *******************************/
data = [
  {
    id: 1,
    nombre: "Yoyito",
    img: "img/Alonso.jpeg",
    video: "video/video1.mp4",
  },
  {
    id: 2,
    nombre: "Noni",
    img: "img/Lisbeth.jpeg",
    video: "video/video2.mp4",
  },

  {
    id: 3,
    nombre: "Joshito",
    img: "img/Jose.jpeg",
    video: "video/video3.mp4",
  },
  {
    id: 4,
    nombre: "Betito",
    img: "img/Vilma.jpeg",
    video: "video/video4.mp4",
  },
  {
    id: 5,
    nombre: "Serenatas",
    img: "img/Todos.jpeg",
    video: "video/video5.mp4",
  },
];

/***************************************************************
 * Crear los Figuras del carrusel
 ****************************************************************/
const carrusel = document.querySelector(".carousel");

function crearFigura(identificador, nombre, img) {
  const figura = document.createElement("figure");
  figura.classList.add("carousel-figura");
  figura.setAttribute("id", `${identificador}`);
  figura.innerHTML = `
                    
                    <div class="card-Contenedor card">
                    <img class="card-img" src="${img}" alt="">
                    <div class="card-Titulo" >
                        <h2>
                        ${nombre}
                        </h2>
                        <img class="linkVideo" src="img/video.svg" alt="">
                    </div>
                    </div>
              `;
  return figura;
}

function mostrarFiguras(data) {
  carrusel.innerHTML = "";
  data.forEach((element) => {
    let figuracreada = crearFigura(element.id, element.nombre, element.img);
    carrusel.appendChild(figuracreada);
  });
}
mostrarFiguras(data);

/*****************************************************
 *            Construcción del carrusel 3d
 ******************************************************/

const figuras = document.querySelectorAll(".carousel-figura");

let angulo = 360 / figuras.length;
let anchoCarrusel = carrusel.clientWidth;
let distancia = anchoCarrusel / 2 / getTanFromDegrees(angulo / 2);

for (i = 0; i < figuras.length; i++) {
  figuras[i].style.transform = `rotateY(${
    angulo * i
  }deg) translateZ( ${distancia}px )`;
}

function getTanFromDegrees(degrees) {
  return Math.tan((degrees * Math.PI) / 180);
}

figuras.forEach(function (figura) {
  transformFigura = "";
  figura.addEventListener("mouseenter", (e) => {
    transformFigura = figura.style.transform;
    figura.style.transform = transformFigura + `scale(1.1) `;
  });

  figura.addEventListener("mouseleave", (e) => {
    figura.style.transform = transformFigura;
  });
});

/*********************************************
 *              Video
 *********************************************/
carrusel.addEventListener("click", (e) => {
  if (e.target.classList.contains("linkVideo")) {
    let figure = e.target.parentElement.parentElement.parentElement;
    let id = figure.id;
    editarvideo(id);
  }
});

const vid = document.getElementById("myVideo");

function editarvideo(id) {
  
const audio = document.querySelector(".audioinicial");
    pauseAudio(audio);
   


  if (id==5){
    
    mostrarAudio(dataaudio)
  }else{

    let rutavideo = data[id - 1].video;

    var video = document.createElement("video");
    video.setAttribute("id", "myVideo");
    video.setAttribute("controls", "controls");
  
    video.innerHTML = `
          <source src="${rutavideo}" type="video/mp4">
          
    <source src="movie.ogg" type="video/ogg">
      `;
    const boxVideo = document.querySelector(".boxVideo");
    boxVideo.innerHTML = "";
    boxVideo.appendChild(video);

    enableAutoplay();


  }
}
function enableAutoplay() {
  var x = document.getElementById("myVideo");
  x.autoplay = true;
  x.load();
}

/**************************************
 * Audio
 **********************************/

function playAudio(audio) {
  audio.autoplay=true
  audio.load();
}

function pauseAudio(audio) {
  
  audio.pause();
}

dataaudio = [
  {
    link: "audio1",
    nombre: "Feliz cumpleaños",
  },
  {
    link: "audio2",
    nombre: "En el Silencio",
  },
  {
    link: "audio3",
    nombre: "En Tu Dia 1",
  },
  {
    link: "audio4",
    nombre: "En Tu Dia 2",
  },
  {
    link: "audio5",
    nombre: "En Tu Dia 3",
  },
  {
    link: "audio6",
    nombre: "la bobeda azulada 1",
  },
  {
    link: "audio7",
    nombre: "la bobeda azulada 2",
  },
  {
    link: "audio8",
    nombre: "Serenata Varios",
  },
  {
    link: "audio9",
    nombre: "Ya Se Cumplió La Fecha 1",
  },
  {
    link: "audio10",
    nombre: "Ya Se Cumplió La Fecha 2",
  },
  {
    link: "audio11",
    nombre: "Ya Se Cumplió La Fecha 3",
  },
];



function crearAudio(link, nombre) {
  const boxaudio = document.createElement("div");
  boxaudio.classList.add("boxAudio");
  boxaudio.innerHTML = `
                <audio class="audioReproducir" src="audio/${link}.mp3"></audio>
                <div class="boxAudio-contenido">
                  <img  class="reproductorAudio" src="img/audio.svg" alt="">
                  <p class="reproductorAudio">${nombre}</p>
                </div>
              `;
  return boxaudio;
}

function mostrarAudio(dataaudio) {
  const contenedorAudios = document.createElement("div");
  contenedorAudios.classList.add("contenedorAudios");
  contenedorAudios.innerHTML= `
  <h2 class="tituloSerenata" >Serenatas Criollas</h2>
`;



  dataaudio.forEach((element) => {
    let figuracreada = crearAudio(element.link, element.nombre);
    contenedorAudios.appendChild(figuracreada);
  });
  const boxVideo = document.querySelector(".boxVideo");
  boxVideo.innerHTML = "";
  boxVideo.appendChild(contenedorAudios);
}

const boxVideo = document.querySelector(".boxVideo");

boxVideo.addEventListener("click", (e) => {
  if (e.target.classList.contains("reproductorAudio")) {
    const audios=document.querySelectorAll('.audioReproducir')
    
    audios.forEach((element) => {
      pauseAudio(element)
    
    })
    
    let audio = e.target.parentElement.parentElement.querySelector('.audioReproducir');
   
    playAudio(audio);
  }
});



function ReproduciraudioInicial(){
  const boxAudioInicial = document.createElement("div");
  boxAudioInicial.classList.add("ocultar");
  boxAudioInicial.innerHTML = `
                <audio class="audioinicial" controls autoplay>
                    <source src="audio/audio2.mp3" type="audio/mp3">
                </audio>
                
              `;
  document.body.append(boxAudioInicial)
  const audio = document.querySelector(".audioinicial");
  playAudioInicial(audio);
}

function playAudioInicial(audio){
  audio.autoplay=true
  audio.load();
  }
ReproduciraudioInicial()



