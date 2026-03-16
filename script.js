// === CONTENIDO DEL LIBRO ===
// Personaliza body, body2, src y caption con tus propios textos, fotos y videos.

const pages = [
  {
    title: "", // no se usa, se deja por compatibilidad
    body: "Hola Daniela, hoy es un dia muy especial. Hoy nacio una persona que no pense que seria tan especial para mi, y al dia de hoy no puedo imaginar mis dias sin esa persona, sin su voz, su sonrisa y su risa c:.",
    body2: "Recuerdo el dia que te vi por primera vez y pense que queria hablarle a esa persona, porque para mi eras la mas genial que habia visto. Y habiendote conocido, no me arrepiento ni un poco, de verdad ni un poco.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&w=1000&q=80",
      caption: "Recuerdo bien mi primer regalo y lo tonto que fui XD.",
    },
  },
  {
    title: "",
    body: "Eres una persona muy feliz y quisiera que siempre lleves esa felicidad que te hace tan especial. Haces que los dias no sean aburridos con las cosas que haces o dices.",
    body2: "Quiza sientas que debes llorar para liberar todo lo que tienes dentro, y tienes razon, pero verte llorar me quiebra y me hace querer correr hacia ti para protegerte y secarte las lagrimas.",
    media: {
      type: "video",
      src: "https://cdn.coverr.co/videos/coverr-golden-sunrise-over-the-mountains-1579/1080p.mp4",
      caption: "Ese día despues de llorar de felicidad me abrazaste c:",
    },
  },
  {
    title: "",
    body: "Todos merecen a alguien que este en sus momentos mas oscuros, y aunque el destino quiera o no, yo quisiera ser esa persona en tus momentos mas debiles, cuando una mano pueda sostenerte.",
    body2: "Se que no puedo cargar todos los problemas que tienes adentro, pero quiero ser fuerte para que no sufras sola, porque cuando yo estaba mal, tu lo intentabas con todas tus fuerzas porque me amabas.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80",
      caption: "las bengalas contigo fueron maravillosas",
    },
  },
  {
    title: "",
    body: "Cuando nos conocimos pense que te iba a espantar XD. Espere al frente del gym no esperando nada, pero solo te bastaron unos minutos para embellecerme la vida con tu forma de ser.",
    body2: "Ahi decidi que serias la mujer por la cual iba a quedarme a intentar, por primera vez en mi vida, arriesgarme para sentir algo diferente a escapar como siempre lo hacia.",
    media: {
      type: "video",
      src: "https://cdn.coverr.co/videos/coverr-young-couple-walking-by-the-sea-3154/1080p.mp4",
      caption: "Quisiera no haber perdido la carta y gracias por la flor",
    },
  },
  {
    title: "",
    body: "Eres la mujer que me hace creer en el amor de verdad, porque contigo las cosas tienen color y emocion como con ninguna otra persona habia sentido.",
    body2: "Tienes algo en tus ojos que hace que quiera verlos siempre. Son los ojos mas preciosos que haya visto; de verdad tienen magia down XD, y haria lo que fuera por despertar con ellos todos los dias.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1000&q=80",
      caption: "Enfoca a la señora XDDD",
    },
  },
  {
    title: "",
    body: "Cuando me dijiste que mis ojos no te daban miedo, me senti aliviado. No sabes lo feliz que volvi a mi casa despues de conocerte, porque habia conocido a la persona con la que queria compartir mi felicidad.",
    body2: "Eres increible, siempre tratas de mejorar cada dia a pesar de los tropiezos. En lugar de quedarte abajo, te levantas, y eso me inspira muchisimo.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80",
      caption: "Sentir tu olor siempre maravilloso y el que quisieras sentir el mio era lindo",
    },
  },
  {
    title: "",
    body: "Encajas perfecto con la mayoria de personas y haces que hablar con un desconocido sea pan comido XD. Gracias por incluirme con tus amig@s, en serio.",
    body2: "Cada vez que te miraba me daban ganas de ser mejor para darte lo mejor, porque aunque pienses que no, te lo mereces todo.",
    media: {
      type: "video",
      src: "https://cdn.coverr.co/videos/coverr-golden-sunrise-over-the-mountains-1579/1080p.mp4",
      caption: "Girasol siempre hará un día malo en uno bueno y me hizo feliz que te gustara",
    },
  },
  {
    title: "",
    body: "Quiza digas que eres dificil de amar, pero para mi nunca lo fuiste. Amarte fue entregar mi corazon a la persona que lo trato bien a pesar de muchas cosas.",
    body2: "Tambien recuerdo cuando planee muchas cosas para la primera cita y todo salio hasta el pincho XD, pero para ti fue lindo. Estabas un poco agripada, te invite al tercer piso de agronomia y jugamos cartas sin saber bien las reglas.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80",
      caption: "Firework",
    },
  },
  {
    title: "",
    body: "Te reiste, me ganaste casi todas las rondas y ahi supe que habia encontrado a alguien especial. En artes, con todo oscuro, me contaste que no sabias que hacer y si eras alguien buena.",
    body2: "No supe expresarme en ese momento, pero queria decirte que para mi eres alguien que se preocupa de verdad por sus amigos y amigas. Eres muy buena, y me alegraba que compartieras algo tan intimo conmigo.",
    media: {
      type: "video",
      src: "https://cdn.coverr.co/videos/coverr-young-couple-walking-by-the-sea-3154/1080p.mp4",
      caption: "Tus ojos son mis favoritos",
    },
  },
  {
    title: "",
    body: "Cuando comimos canchitas en las escaleras porque no sabiamos a donde ir, o cuando caminabamos juntos, todo era maravilloso. A tu lado podia ir de cono sur a san pincho (tu casa) XD.",
    body2: "Despues del cine, aunque no fue como esperaba, me levantaste el animo y me hiciste reir como nadie. Yo no solia sonreir mucho, pero contigo se hizo habitual, y me gusta como soy cuando estoy contigo.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1000&q=80",
      caption: "Comer contigo es gracioso pero increible XD",
    },
  },
  {
    title: "",
    body: "Me arrepiento de no haber pasado mas tiempo contigo solo siendo felices. Aprecio mucho que estuviste alli cuando Taz estaba mal, me hiciste muy feliz y quise devolverte ese amor mil veces mas.",
    body2: "El dia que sali de tu casa despues de confesarme volvi muuuy feliz, porque por primera vez mis sentimientos fueron aceptados por la persona que yo queria.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80",
      caption: "Ese abrazo que me diste por atras fue el mas especial que sentí desde hace tiempo",
    },
  },
  {
    title: "",
    body: "Tambien me prometi apoyarte en todo lo que quieras lograr. Incluso imagine cosas muy wtf sobre el futuro, pero contigo imaginarme el futuro me hacia feliz, porque si estabas tu, sabia que seria un buen futuro.",
    body2: "Quisiera entenderte mejor y escucharte mas. Te distraes facil, pero tratas de cambiar y eso es lo importante: que lo intentas. Aun cuando yo era un dolor de cabeza andante, te quedaste conmigo.",
    media: {
      type: "video",
      src: "https://cdn.coverr.co/videos/coverr-golden-sunrise-over-the-mountains-1579/1080p.mp4",
      caption: "Esas chocotejas son god y me alegre que te gustara la pistola XD",
    },
  },
  {
    title: "",
    body: "Quizas soy solo un tonto enamorado, pero se cuando amo de verdad y contigo siempre ame de verdad. Hasta hoy te sigo amando. Si quisiera pasar mi vida con alguien, serias tu y solamente tu.",
    body2: "Siento haberme interpuesto en tus objetivos o no haberte escuchado tanto; solo queria que fueras feliz. Tus abrazos y besos son de las mejores sensaciones del mundo.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&w=1000&q=80",
      caption: "Ir al parque chino fue increible por con quien estaba",
    },
  },
  {
    title: "",
    body: "Te amo tanto que duele imaginar que te vayas de mi vida y que un dia seamos desconocidos. Quisiera ser esa persona con la que quieras formar una familia, y aunque el amor no sea de merecimientos, amame como puedas, sin miedo.",
    body2: "Siempre te esperare, porque soy un ave de un solo vuelo. Contigo vi el cielo mas claro y azul posible; incluso con tormentas, prefiero eso a un cielo soso y aburrido.",
    media: {
      type: "video",
      src: "https://cdn.coverr.co/videos/coverr-young-couple-walking-by-the-sea-3154/1080p.mp4",
      caption: "Mirar peces fue god a tu lado",
    },
  },
  {
    title: "",
    body: "Tener una relacion contigo, aunque a veces se sintiera agotador y asfixiante, tambien me hacia sentir que tenia a alguien con quien podia ser yo. Detras de todo lo malo, fui muy feliz contigo.",
    body2: "Si por tu bien debo desaparecer de tu vida, lo hare aunque no quiera irme. Soy feliz a tu lado. No me queda mucho tiempo, pero fue maravilloso pasarlo contigo. Te extraño mucho.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80",
      caption: "El mejor san valentín que pase c:",
    },
  },
  {
    title: "",
    body: "Sentirme tan debil y a la vez tan fuerte demuestra un poco de todo lo que pasamos: cosas tristes y felices. Pero no hay persona en el mundo con la que quisiera pasar todo eso que no seas tu.",
    body2: "Eres maravillosa e increible Daniela. Mereces un mundo hecho de amor. Si alguna vez corres de tus problemas y sin rumbo, mis brazos siempre estaran abiertos para apoyarte y abrazarte en la tormenta.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1000&q=80",
      caption: "Dulce como lo nuestro",
    },
  },
  {
    title: "",
    body: "Nacio una luna hermosa el dia de hoy, una luna que siempre mirare y que siempre me hara sacar una sonrisa.",
    body2: "Te amo, mi senorita, y feliz cumpleaños c':.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80",
      caption: "Ese día fui muy feliz",
    },
  },
];

// Usa tus archivos locales: pagina1..pagina17.
// Videos: 5, 8, 13 y 17. El resto son imagenes .jpeg
const videoPages = new Set([5, 8, 13, 17]);

pages.forEach((page, index) => {
  const pageNumber = index + 1;
  const isVideo = videoPages.has(pageNumber);
  page.media.type = isVideo ? "video" : "image";
  page.media.src = `extras/imagenes/pagina${pageNumber}.${isVideo ? "mp4" : "jpeg"}`;
});

// === TRANSICION DE PORTADA ===
const bookCover   = document.getElementById("bookCover");
const openBookBtn = document.getElementById("openBookBtn");
const bookShell   = document.getElementById("bookShell");

const bgMusic = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

bgMusic.volume = 0.45;

muteBtn.addEventListener("click", () => {
  bgMusic.muted = !bgMusic.muted;
  muteBtn.textContent = bgMusic.muted ? "🔇" : "🎵";
  muteBtn.setAttribute("aria-label", bgMusic.muted ? "Activar musica" : "Silenciar musica");
});

openBookBtn.addEventListener("click", () => {
  bookCover.classList.add("is-closing");
  bgMusic.play().catch(() => {});
  muteBtn.removeAttribute("hidden");
  setTimeout(() => {
    bookCover.style.display = "none";
    bookShell.removeAttribute("hidden");
  }, 360); // mismo tiempo que la animacion cover-close
});

// === NAVEGACION ===
const textPanel    = document.getElementById("textPanel");
const mediaPanel   = document.getElementById("mediaPanel");
const pageCounter  = document.getElementById("pageCounter");
const pageBody     = document.getElementById("pageBody");
const pageBody2    = document.getElementById("pageBody2");
const pageNumber   = document.getElementById("pageNumber");
const mediaImage   = document.getElementById("mediaImage");
const mediaVideo   = document.getElementById("mediaVideo");
const mediaCaption = document.getElementById("mediaCaption");
const prevBtn      = document.getElementById("prevBtn");
const nextBtn      = document.getElementById("nextBtn");

let currentPage = 0;

function renderPage(index) {
  const page = pages[index];

  pageBody.textContent     = page.body;
  pageBody2.textContent    = page.body2;
  pageNumber.textContent   = `— ${index + 1} —`;
  pageCounter.textContent  = `${index + 1} / ${pages.length}`;
  mediaCaption.textContent = page.media.caption;

  if (page.media.type === "video") {
    mediaImage.hidden = true;
    mediaImage.removeAttribute("src");

    mediaVideo.hidden = false;
    mediaVideo.src = page.media.src;
    mediaVideo.muted = true;
    mediaVideo.defaultMuted = true;
    mediaVideo.playsInline = true;
    mediaVideo.autoplay = true;
    mediaVideo.play().catch(() => {
      // Algunos navegadores pueden bloquear autoplay; el video queda listo para reproducirse.
    });
  } else {
    mediaVideo.pause();
    mediaVideo.hidden = true;
    mediaVideo.removeAttribute("src");
    mediaVideo.load();

    mediaImage.hidden = false;
    mediaImage.src = page.media.src;
  }

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === pages.length - 1;
}

function switchPage(nextIndex) {
  if (nextIndex < 0 || nextIndex >= pages.length || nextIndex === currentPage) {
    return;
  }

  textPanel.classList.add("is-switching");
  mediaPanel.classList.add("is-switching");

  window.setTimeout(() => {
    currentPage = nextIndex;
    renderPage(currentPage);

    textPanel.classList.remove("is-switching");
    mediaPanel.classList.remove("is-switching");
  }, 220);
}

prevBtn.addEventListener("click", () => switchPage(currentPage - 1));
nextBtn.addEventListener("click", () => switchPage(currentPage + 1));

renderPage(currentPage);
