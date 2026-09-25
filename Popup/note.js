function abrirPopup() {
    fatalError()
    document.body.style.overflow = "hidden";
    document.body.insertAdjacentHTML("beforeend", `
<section class="backgroundBlur" id="backgroundBlur">
   <div id="tremor">
    <div id="popup" class="popup">
        <img
            src="Popup/personagem.png"
            class="personagem"
            alt=""
        >
    <div class="barra">
        <div class="titulo">
            System Error :D
        </div>

        <a href="#" class="fechar" onclick="fecharPopup(event)">
            <img src="Popup/close_popup.png" alt="Fechar">
        </a>
    </div>

    <div class="conteudo">

        <!-- Personagem na FRENTE da janela -->

        <p>I can see you :)</p>

    </div>

  </div>
 </div>
</section>

  
<style>

.backgroundBlur {
    position: fixed;
    inset: 0;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.45);

    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);

    z-index: 9999;
    animation: none;
}
   
.popup {
    width: 420px;
    height: 200px;

    background: #eee0b9;

    border: 5px solid #0874c9;
    border-radius: 3px;

    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.45);

    font-family: "Segoe UI", Tahoma, Arial, sans-serif;

    position: fixed;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    overflow: visible;
    transform-origin: center;

    animation: entradaGlitch 0.15s steps(1, end) 0.5s forwards;
    opacity: 0%;
}

@keyframes entradaGlitch {

    /* 1 — começa achatado verticalmente */
    0% {
        transform: translate(-50%, -50%)
                   scaleX(1.15) scaleY(0.5);
        opacity: 100%;
    }

    /* 2 — comprime e estica para os lados */
    20% {
        transform: translate(-50%, -50%)
                   scaleX(0.75) scaleY(1.15);
        opacity: 100%;
    }

    /* 3 — fica extremamente fino horizontalmente */
    40% {
        transform: translate(-50%, -50%)
                   scaleX(0.10) scaleY(2);
        opacity: 100%;
    }

    /* 4 — volta rapidamente, passando um pouco do tamanho */
    60% {
        transform: translate(-50%, -50%)
                   scaleX(1.12) scaleY(0.88);
        opacity: 100%;
    }

    /* 5 — pequena deformação de retorno */
    80% {
        transform: translate(-50%, -50%)
                   scaleX(0.96) scaleY(1.04);
        opacity: 100%;
    }

    /* 6 — normal */
    100% {
        transform: translate(-50%, -50%)
                   scaleX(1) scaleY(1);
        opacity: 100%;
    }
}

/* =========================
   BARRA
   ========================= */

.barra {
    height: 34px;

    background: #0874c9;

    position: relative;

    display: flex;
    align-items: center;
    border-bottom: 4px solid #1b58ad;

    z-index: 5;
}

@font-face {
    font-family: 'TahomaCustom';
    src: url('Popup/winFonts/Tahoma.ttf') format('truetype');
}

.titulo {
    color: white;

    font-size: 16px;
    font-weight: normal;

    padding-left: 12px;
    font-family: TahomaCustom;
}


/* =========================
   BOTÃO X
   ========================= */

.fechar {
    position: absolute;

    right: 5px;

    width: 28px;
    height: 28px;

    display: block;

    z-index: 10;
}

.fechar img {
    width: 28px;
    height: 28px;

    display: block;

    cursor: pointer;
}


/*CONTEÚDO*/

.conteudo {
    height: calc(100% - 34px);

    background: #eee0b9;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: visible;

    z-index: 1;
}


.conteudo p {
    margin: 0;

    color: #0874c9;

    font-family: TahomaCustom;

    font-size: 28px;
    font-weight: 600;

    position: relative;
    z-index: 2;

    /* empurra o texto para a direita */
    margin-top: -25px;
    margin-left: 20px
}


/* */

/* PERSONAGEM */

.personagem {
    position: absolute;

    width: 225px;

    left: -43px;
    bottom: -37px;

    z-index: 8;

    pointer-events: none;
}

#tremor {
    position: fixed;

    left: 50%;
    top: 50%;

    width: 420px;
    height: 200px;

    transform: translate(-50%, -50%);

    animation: tremorGlitch 3.5s steps(1) 0.65s infinite;
}

@keyframes tremorGlitch {

    0% {
        transform: translate(-50%, -50%);
    }

    15% {
        transform: translate(calc(-50% - 5px), calc(-50% + 1px));
    }

    30% {
        transform: translate(calc(-50% + 4px), calc(-50% - 2px));
    }

    45% {
        transform: translate(calc(-50% - 2px), calc(-50% + 4px));
    }

    60% {
        transform: translate(calc(-50% + 5px), calc(-50% - 3px));
    }

    75% {
        transform: translate(calc(-50% - 4px), calc(-50% - 1px));
    }

    90% {
        transform: translate(calc(-50% + 2px), calc(-50% + 3px));
    }

    100% {
        transform: translate(-50%, -50%);
    }
}

</style>

`);
}

document.addEventListener("DOMContentLoaded", abrirPopup);


function fecharPopup(event) {
    event.preventDefault();
    document.getElementById("backgroundBlur").remove();
    document.body.style.overflow = "";
}

function fatalError() {
    const som = new Audio("fatalError.mp3");
    som.play();
}
