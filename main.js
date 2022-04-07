'use strict';




(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const QUESTIONS_ENG = [' You have to enter one of rock(r..) scissor(s..) paper(p..) ?', ' Computer selected ', '  You selected ', ' Draw ', ' You won ', ' Computer won ', ' End the game ? ', ' Are you sure ?', ' Human {0} times won Computer {1}  times won '];
  const QUESTIONS_RUS = [' Усложненное задание 2 чего вы выберите камень(к..) ножница(н..) бумаг(б..)  ?', ' Computer выбрал ', ' Вы выбрали ', ' Ничье ', ' Вы выграли ', ' Сomputer выграл', ' Закончить игру ?', ' Вы уверены ?', ' ЧЕЛОВЕК {0} раз ВЫГРАЛ  КОМПЬЮТОР {1} раз выграл '];

   function getRandomIntInclusive(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    String.prototype.format = function() {
        // store arguments in an array
        const args = arguments;
        // use replace to iterate over the string
        // select the match and check if related argument is present
        // if yes, replace the match with the argument
        return this.replace(/{([0-9]+)}/g, (match, index) =>
        // check if the argument is present
          (typeof args[index] === 'undefined' ? match : args[index]),
        );
      };


  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const langNAMES = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;
    const langQUESTIONS = language === 'EN' || language === 'ENG' ? QUESTIONS_ENG : QUESTIONS_RUS;
    return function start() {
      let selectedOurIndex = -1;
      const selectWord = prompt(langQUESTIONS[0], '');
      console.log(langQUESTIONS[0], selectWord);
      if (langNAMES[0].indexOf(selectWord) === 0) {
        selectedOurIndex = 0; //   alert('ок камень');
      } else if (langNAMES[1].indexOf(selectWord) === 0) {
        //  alert('ок ножницы');
        selectedOurIndex = 1;
      } else if (langNAMES[2].indexOf(selectWord) === 0) {
        selectedOurIndex = 2;

        // alert('ок бумага');
      } else {
        start();
        return;
      }


      const selectedtheirindex = getRandomIntInclusive(0, 2);
      if (selectedtheirindex === selectedOurIndex) {
        alert(langQUESTIONS[1] + langNAMES[selectedtheirindex] + langQUESTIONS[2] + langNAMES[selectedOurIndex] + langQUESTIONS[3]);
      } else if ((selectedOurIndex + 1 === selectedtheirindex) || ((selectedtheirindex === 0) && (selectedOurIndex === 2))) {
        alert(langQUESTIONS[1] + langNAMES[selectedtheirindex] + langQUESTIONS[2] + langNAMES[selectedOurIndex] + langQUESTIONS[4]);
        result.player++;
      } else if ((selectedOurIndex === selectedtheirindex + 1) || ((selectedtheirindex === 2) && (selectedOurIndex === 0))) {
        alert(langQUESTIONS[1] + langNAMES[selectedtheirindex] + langQUESTIONS[2] + langNAMES[selectedOurIndex] + langQUESTIONS[5]);
        result.computer++;
      }


      if (confirm(langQUESTIONS[6])) {
        if (confirm(langQUESTIONS[7])) {
          alert(langQUESTIONS[8].format(result.player, result.computer));
          result.player = 0;
          result.computer = 0;
          return;
        } else {
          start();
        }
      } else {
        start(); // recursive
      }
    };
  };
  window.RPS = game;
})();
