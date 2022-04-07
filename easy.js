'use strict';

(() => {
  const QUESTIONS_ENG = [' You have to enter number not bigger than your total balls?', ' Computer win ', '  Computer win ', ' Human has {0} balls Computer has {1} balls', 'Game End'];
  const QUESTIONS_RUS = [' Выберите с одно до количество свои шариков ?', ' Computer выграл ', ' Computer проиграл ', ' ЧЕЛОВЕК имееться {0} шариков  КОМПЬЮТОР {1} шариков ', 'Игра закончилась'];
  const TotalComp = 5;
  const TotalUser = 5;
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  String.prototype.format = function() {
    const args = arguments;
    return this.replace(/{([0-9]+)}/g, (match, index) =>
    // check if the argument is present
      (typeof args[index] === 'undefined' ? match : args[index]),
    );
  };


  const game = (language) => {
    const result = {
      player: TotalUser,
      computer: TotalComp,
    };
    const langQUESTIONS = language === 'EN' || language === 'ENG' ? QUESTIONS_ENG : QUESTIONS_RUS;

    return function start() {
      do {
        if (result.player === 0 || result.computer === 0) {
          if (result.player == 0) {
            alert(langQUESTIONS[2] + ' (100%)');
          } else if (result.computer == 0) {
            alert(langQUESTIONS[1] + ' (100%)');
          }
          alert(langQUESTIONS[4]);
          break;
        } else {
          let selectUser = 0;
          do {
            selectUser = prompt(langQUESTIONS[0] + '  ' + result.player, '');
            console.log(langQUESTIONS[0], selectUser);
          }
          while (((/^\d+$/.test(selectUser)) && (result.player < Number(selectUser) || Number(selectUser) < 0)) || !(/^\d+$/.test(selectUser)));


          const selectComputer = getRandomIntInclusive(0, 1);
          alert('Computer выбрал ' + (selectComputer == 1 ? 'Нечётные число' : 'Чётные число'));
          if (selectComputer === Number(selectUser) % 2) {
            alert(langQUESTIONS[1]);
            result.computer += Number(selectUser);
            result.player -= Number(selectUser);
          } else {
            alert(langQUESTIONS[2]);
            result.computer -= Number(selectUser);
            result.player += Number(selectUser);
          }
        }
      }
      while (true);
    };
  };
  window.RPS = game;
})();
