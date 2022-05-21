// MENU

$(".navbar__menu-btn").on("click", function () {
  $(".navbar__links").toggleClass("active");
  $(this).find("i").toggleClass("fa-bars");
  $(this).find("i").toggleClass("fa-times");
});

// CARROCEL
$(document).ready(() => {
  const slickOptions = {
    autoplay: true,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
    nextArrow:
      '<button type="button" class="slick-next slider__next-arrow">Previous</button>;'
  };

  $(".slider").slick(slickOptions);
  /* autoplay: true - inicializará o carrocel automaticamente */
  /* dots: false - fará com que as bolinhas para transitar entre imagens não apareçam */

  /* Será responsável por fazer o botão do formulário do footer enviar o e-mail - não colocar e-mail pessoal, mas gerar no site smtpJS.com, na seção "Setup and SMTP server here - ai cria uma conta pra teste e coloca os dados aqui para disparar o e-mail*/
  $(".footer__form-button").on("click"),
    () => {
      const email = $("#email").val();
      Email.send({
        Host: "smtp.yourisp.com",
        Username: "username",
        Password: "password",
        To: "them@website.com",
        From: email,
        Subject: "Por favor me adicione na newsletter",
        Body: `Olá,
        Eu gostaria de ser adicionado na newsletter do site.
        Meu email é ${email}.

        Obrigado!
        `
      }).then(message => alert(message));
    };

  /* Ele pegará a classe .footer__form-button / através do addEventListener que no Jquery é "on" / queremos que aconteça algo quando for ("click") / então queremos que algo aconteça quando ele for clicado () = > - arrow function / e tudo o que eu colocar dentro da arrow function será executado quando for clicado */
  /* Criamos uma variável para nos referenciarmos a ele, usando const (para que não seja alterada) / damos um nome a ela (value) / ai faremos a referencia a um ID, portando usando # - $("#email") e selecionando o value (val()) para pegar o seu valor */

  /*Será responsável por aumentar o número dos contadores - neste caso automaticamente, mas num caso real, baseado em dados do backend*/
  setInterval(() => {
    const numbersCollection = document.querySelectorAll(".counter__number");

    numbersCollection.forEach(number => {
      const currentNumber = parseInt(number.innerHTML);
      number.innerHTML = currentNumber + 1;
    });
  }, 1000);

  /* Será responsável por dar o efeito counterUp para iniciar a contagem, em que rola o número de 0 até chegar no número base que começará a contagem em tempo real */
  const counterOptions = {
    delay: 10,
    time: 1000
  };

  $(".counter__number").counterUp(counter.counterOptions);
});
