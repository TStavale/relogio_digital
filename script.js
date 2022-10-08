/*Relógio Digital*/
setInterval(()=>{
    let hora = document.getElementById('hora');
    let minuto = document.getElementById('minuto');
    let segundo = document.getElementById('segundo');


    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hora_dot = document.querySelector('.hora_dot');
    let min_dot = document.querySelector('.min_dot');
    let seg_dot = document.querySelector('.seg_dot');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();


    h = (h < 10) ? "0" + h: h;
    m = (m < 10) ? "0" + m: m;
    s = (s < 10) ? "0" + s: s;

    hora.innerHTML = h + "<br><span>Hora</span>";
    minuto.innerHTML = m + "<br><span>Minuto</span>";
    segundo.innerHTML = s + "<br><span>Segundo</span>";


    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    hora_dot.style.transform = `rotate(${h * 15}deg)`;
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    seg_dot.style.transform = `rotate(${s * 6}deg)`;


})

/* Button Dark/Light */

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');

})


/*Cronômetro*/

var sec=0;
var min=0;
var hr=0;

var interval;

var isRunnig = false

function twoDigits(digit){
    if(digit<10 ){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    if(!isRunnig) {             /*(!isRnning) assim é igual assim (isRunnig === false() */
        counter();
        interval= setInterval(counter,1000);
    }
    isRunnig = true;
}

function pause(){
    clearInterval(interval);
    isRunnig = false;
}

function stop(){
    clearInterval(interval);
    sec=0;
    min=0;
    document.getElementById('counter').innerText='00:00:00';
    isRunnig = false;
}


function counter(){
    sec++;
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('counter').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}