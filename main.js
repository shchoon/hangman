window.addEventListener('load', function () {
    init();
})

var wordList = ['elephant','lion' ,'tiger', 'fox', 'shark', 'snake'];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

var answer = document.querySelectorAll('.answer > div');
var clickedButton = 0;

function init() {
    var k = Math.floor(Math.random() * wordList.length);
    console.log(k);   
    console.log(wordList[k].length);
    var wLlength = wordList[k].length;

    var remains = answer.length - wLlength;
    console.log(remains);
   // var tag = document.createElement('div');
    //answer.appendChild(tag)
    //for(i=0; i < answer.length - wordList[k].length; i++) {
    for(i = 0; i < remains; i++) {
        answer[i].className += 'mi';
    }
    console.log(wLlength);
    for (i = answer.length - 1; i >= remains; i--) {
        answer[i].className += 'pl';
    }
    //    if(answer.length - wordList[k].length < )
    //}
    var ansAlphabet = document.querySelectorAll('.pl');

    
    var ansList = [];

    for(i = 0; i < wLlength; i++) {
        for(j=0; j < alphabet.length; j++) {
            if(wordList[k][i] == alphabet[j]) {
                ansList.push(alphabet[j]);
                //console.log(ansList);
            }
        }
    }

    //for(i = 0; i < ansList.length; i++) {
    //    ansAlphabet[i].innerHTML = ansList[i];
    //}

    console.log(ansList);
    console.log(ansAlphabet);

    var buttons = document.querySelectorAll('button');


     /*for (i = 0; i < alphabet.length; i++) {
        buttons[i].addEventListener('click', function (event) {
            for(j = 0; j < ansList.length; j++) {
                if(buttons[i].innerHTML == ansList[j]) {
                    ansAlphabet[j].innerHTML = ansList[j];
                }
            }
        })
    
    } */
    sol(k,ansList,ansAlphabet);
    //clicked(buttons);


}

function sol(k,ansList,ansAlphabet) {
    
    var buttons = document.querySelectorAll('button');
    console.log(ansList);
    console.log(k);
    var clicked = document.querySelector('.footer > div');

    buttons[0].addEventListener('click', event => {
        buttons[0].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();
        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[0].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
                console.log(ansAlphabet[i]);
            }
        }
    })
    buttons[1].addEventListener('click', event => {
        buttons[1].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        //console.log(clickedButton);
        for(i = 0; i < ansList.length; i++) {
            if(buttons[1].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[2].addEventListener('click', event => {
        buttons[2].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[2].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[3].addEventListener('click', event => {
        buttons[3].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[3].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[4].addEventListener('click', event => {
        buttons[4].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }


        for(i = 0; i < ansList.length; i++) {
            if(buttons[4].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[5].addEventListener('click', event => {
        buttons[5].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }


        for(i = 0; i < ansList.length; i++) {
            if(buttons[5].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[6].addEventListener('click', event => {
        buttons[6].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }


        for(i = 0; i < ansList.length; i++) {
            if(buttons[6].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[7].addEventListener('click', event => {
        buttons[7].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }


        for(i = 0; i < ansList.length; i++) {
            if(buttons[7].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[8].addEventListener('click', event => {
        buttons[8].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }


        for(i = 0; i < ansList.length; i++) {
            if(buttons[8].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[9].addEventListener('click', event => {
        buttons[9].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;  
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[9].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[10].addEventListener('click', event => {
        buttons[10].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[10].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[11].addEventListener('click', event => {
        buttons[11].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[11].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[12].addEventListener('click', event => {
        buttons[12].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[12].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[13].addEventListener('click', event => {
        buttons[13].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[13].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[14].addEventListener('click', event => {
        buttons[14].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[14].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[15].addEventListener('click', event => {
        buttons[15].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[15].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[16].addEventListener('click', event => {
        buttons[16].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[16].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[17].addEventListener('click', event => {
        buttons[17].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[17].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[18].addEventListener('click', event => {
        buttons[18].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[18].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[19].addEventListener('click', event => {
        buttons[19].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[19].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[20].addEventListener('click', event => {
        buttons[20].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[20].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[21].addEventListener('click', event => {
        buttons[21].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[21].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[22].addEventListener('click', event => {
        buttons[22].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[22].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[23].addEventListener('click', event => {
        buttons[23].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[23].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[24].addEventListener('click', event => {
        buttons[24].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }

        for(i = 0; i < ansList.length; i++) {
            if(buttons[24].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    })
    buttons[25].addEventListener('click', event => {
        buttons[25].style.opacity = 0.1;
        clickedButton += 1;
        clicked.innerHTML = clickedButton;
        if(clickedButton == 10) {
            alert('GAMEOVER');
            window.location.reload();

        }
        for(i = 0; i < ansList.length; i++) {
            if(buttons[25].innerHTML == ansList[i]) {
                ansAlphabet[i].innerHTML = ansList[i];
            }
        }
    }) 

    

}

