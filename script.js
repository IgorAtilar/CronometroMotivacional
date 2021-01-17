(function (win, doc) {
  var $inputTimer = doc.querySelector('[data-js="inputTimer"]');
  var $buttonStart = doc.querySelector('[data-js="inputButtonStart"]');
  var $buttonStop = doc.querySelector('[data-js="inputButtonStop"]');
  var $buttonRestart = doc.querySelector('[data-js="inputButtonReset"]');
  //Cronômetro
  var sec = 0;
  var min = 0;
  var security = true;
  var timeoutID;

  $inputTimer.value = formatNumber(min) + " : " + formatNumber(sec);

  function formatNumber(number) {
    return number > 9 ? "" + number : "0" + number;
  }

  function timer() {
    $inputTimer.value = formatNumber(min) + " : " + formatNumber(sec);
    sec++;
    if (sec > 59) {
      min++;
      sec = 0;
    }
    timeoutID = setTimeout(timer, 1000);
  }

  $buttonStart.addEventListener("click", function () {
    if (security) {
      clearTimeout(timeoutID);
      timer();
    }
    security = false;
  });

  $buttonStop.addEventListener("click", function () {
    clearTimeout(timeoutID);
    security = true;
    $message.classList.add("show");
    $message.classList.remove("hide");
    $buttonStop.classList.add("hide");
    $buttonStop.classList.remove("show");
  });
  $buttonRestart.addEventListener("click", function () {
    sec = 0;
    min = 0;
    $inputTimer.value = formatNumber(min) + " : " + formatNumber(sec);
    clearTimeout(timeoutID);
    security = true;
  });

  //Personalização da Página
  var root = doc.querySelector(":root");
  var $buttonDarkMode = doc.querySelector('[data-js="buttonDarkMode"]');
  var $buttonLightMode = doc.querySelector('[data-js="buttonLightMode"]');

  $buttonDarkMode.addEventListener("click", function () {
    root.style.setProperty("--color1", "#2b2b2b");
  });
  $buttonLightMode.addEventListener("click", function () {
    root.style.setProperty("--color1", "#e6e6e6");
  });

  //Mensagem Motivacional
  var $closeButton = doc.querySelector(".closeButton");
  var $message = doc.querySelector(".motivationMessage");
  var $changeMessage = doc.querySelector(".changeMessage");

  $closeButton.addEventListener("click", function () {
    $message.classList.add("hide");
    $message.classList.remove("show");
    $buttonStop.classList.add("show");
    $buttonStop.classList.remove("hide");
  });

  var counter = 0;
  var motivationMessage = [
    `<p>
      Se não puder voar, corra. Se não puder correr, ande. Se não puder andar, rasteje, mas continue em frente de qualquer jeito.
    </p>
    <p>
      Martin Luther King
    </p>`,
    `<p>
      O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.
    </p>
    <p>
    José de Alencar
    </p>`,
    `<p>
    Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.
    </p>
    <p>
    Friedrich Nietzsche
    </p>`,
    `<p>
    Creia em si, mas não duvide sempre dos outros.
    </p>
    <p>
    Machado de Assis
    </p>`,
    `<p>
    Talento é dom, é graça. E sucesso nada tem a ver com sorte, mas com determinação e trabalho.
    </p>
    <p>
    Augusto Branco
    </p>`,
    `<p>
    As pessoas não carecem de força, carecem de determinação.
    </p>
    <p>
    Victor Hugo
    </p>`,
    `<p>
    A força não provém da capacidade física. Provém de uma vontade indomável.
    </p>
    <p>
    Mahatma Gandhi
    </p>`,
  ];

  $buttonStop.addEventListener("click", function () {
    if (counter === motivationMessage.length) {
      counter = 0;
    }
    $changeMessage.innerHTML = motivationMessage[counter];
    counter++;
  });
})(window, document);
