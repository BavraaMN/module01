'use strict';

(() => {
  const TotalComp = 5;
  const TotalUser = 5;
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }


  /* select val == 1 для шариков val==2 для четный или нечетный*/

  function getPromptValue(selectval, totalball) {
    let selectUser = -1;
    do {
      if (selectval === 1) {
        selectUser = prompt('Введите с одно до количество свои шариков ?' + '  ' + totalball, '');
      } else {
        selectUser = prompt(' Введите 1 (Нечётные число) или 2 - (чётные число) ?', '');
        totalball = 2;
      }
    }
    while (((/^\d+$/.test(selectUser)) && (totalball < Number(selectUser) || Number(selectUser) < 0)) || !(/^\d+$/.test(selectUser)));

    if (selectval == 1) {
      alert('Human выбрал  ' + selectUser);
    } else {
      alert('Human выбрал ' + (selectUser == 1 ? 'Нечётные число' : 'Чётные число'));
    }
    return Number(selectUser);
  }


  function getRandomValue(selectval, totalball) {
    if (selectval == 1) {
      const myrandom = getRandomIntInclusive(0, 1);
      alert('Computer выбрал ' + (myrandom == 1 ? 'Нечётные число' : 'Чётные число'));
      return myrandom;
    } else {
      const myrandom = getRandomIntInclusive(1, totalball);
      alert('Computer выбрал ' + myrandom) + ' мячи';
      return myrandom;
    }
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
      // const langQUESTIONS = language === 'EN' || language === 'ENG' ? QUESTIONS_ENG : QUESTIONS_RUS;

    return function start() {
      let beginuser = 1;
      do {
        if (result.player === 0 || result.computer === 0) {
          if (result.computer == 0) {
            alert('Игра закончилась Human выграл ' + ' (100%)');
          } else if (result.player == 0) {
            alert('Игра закончилась Computer выграл ' + ' (100%)');
          }
          break;
        } else {
          let getmenu = getPromptValue(beginuser, beginuser == 1 ? result.player : result.computer);

          let getrandom = getRandomValue(beginuser, beginuser == 1 ? result.computer : result.player);


          // beginuser == 1  getmenu totalball -- getrandom 0,1
          // beginuser == 2  getmenu 0,1 ---  getrandom totalball


          if (beginuser === 1) {
            const temp = Number(getmenu);
            getmenu = temp;
          } else {
            const temp = Number(getmenu);
            getmenu = getrandom;
            getrandom = temp;
          }

          if (getmenu === Number(getrandom) % 2) {
            if (beginuser == 1) {
              alert('Этот игру компьютор выграл ');
              result.computer += Number(getmenu);
              result.player -= Number(getmenu);
              alert('RESULT result.computer ' + result.computer + ' result.player ' + result.player);
            } else {
              alert('Этот игру HUMAN выграл');
              result.computer -= Number(getmenu);
              result.player += Number(getmenu);
              alert('RESULT result.computer ' + result.computer + ' result.player ' + result.player);
            }
          } else {
            if (beginuser == 1) {
              alert('Этот игру HUMAN выграл');
              result.computer -= Number(getmenu);
              result.player += Number(getmenu);
              alert('RESULT result.computer ' + result.computer + ' result.player ' + result.player);
            } else {
              alert('Этот игру компьютор выграл');
              result.computer += Number(getmenu);
              result.player -= Number(getmenu);
              alert('RESULT result.computer ' + result.computer + ' result.player ' + result.player);
            }
          }
        }

        if (beginuser == 1) {
          beginuser = 2;
        } else {
          beginuser = 1;
        }
      }

      while (true);
    };
  };
  window.RPS = game;
})();
