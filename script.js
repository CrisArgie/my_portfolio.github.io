const percentElement = document.querySelectorAll('.percent')
const accordion = document.getElementsByClassName('content')

const projElement = document.getElementById('button-proj')
const certElement = document.getElementById('button-cert')
const leftsliderElement = document.getElementsByClassName('slider-l')
const rightsliderElement = document.getElementsByClassName('slider-r')

const lsectionElement = document.getElementsByClassName('l-section-slide')
const rsectionElement = document.getElementsByClassName('r-section-slide')

const fakeAccordion = document.querySelectorAll('[data-radio-menu]')

const selectorElement = document.querySelectorAll('[data-toggle-link]')
const openElement = document.getElementsByClassName('opening-1')
const openElement2 = document.getElementsByClassName('opening-2')


let slideActive = false

projElement.addEventListener('click', (e) => {

    leftsliderElement[0].classList.toggle('active')
    certElement.classList.toggle('z-index-1')
    openElement[0].classList.add('active')
    rsectionElement[0].classList.toggle('op-0')

    if (slideActive === false) {
        slideActive = true
        activeFunction()
    } else {
        slideActive = false
        activeFunction()
    }
})

certElement.addEventListener('click', (e) => {

    rightsliderElement[0].classList.toggle('active')
    projElement.classList.toggle('z-index-1')
    openElement2[0].classList.add('active')
    lsectionElement[0].classList.toggle('op-0')

    if (slideActive === false) {
        slideActive = true
        activeFunction()
    } else {
        slideActive = false
        activeFunction()
    }
})


function rtnBtn() {
    // leftsliderElement[0].classList.toggle('active')
    // rightsliderElement[0].classList.toggle('active')

    if (leftsliderElement[0].classList.value === 'slider-l op-0 active') {
        console.log('ok here left');

        leftsliderElement[0].classList.toggle('active')
        certElement.classList.toggle('z-index-1')
        openElement[0].classList.add('active')
        rsectionElement[0].classList.toggle('op-0')

        slideActive = false
        activeFunction()
    } else {
        console.log('ok here right');
        rightsliderElement[0].classList.toggle('active')
        projElement.classList.toggle('z-index-1')
        openElement2[0].classList.add('active')
        lsectionElement[0].classList.toggle('op-0')

        slideActive = false
        activeFunction()
    }
}


function activeFunction() {
    if (slideActive === true) {
        for (i = 0; i < selectorElement.length; i++) {
            selectorElement[i].addEventListener('click', (e) => {
                removeAllActive()
                if (slideActive) {

                    openElement[0].classList.remove('active')
                    openElement2[0].classList.remove('active')

                    e.target.classList.add('active')

                    switch (e.target.classList.value) {
                        case 'fake-l-1 active':
                            fakeAccordion[0].classList.add('show')
                            break;
                        case 'fake-l-2 active':
                            fakeAccordion[1].classList.add('show')
                            break;
                        case 'fake-l-3 active':
                            fakeAccordion[2].classList.add('show')
                            break;
                        case 'fake-r-1 active':
                            fakeAccordion[3].classList.add('show')
                            break;
                        case 'fake-r-2 active':
                            fakeAccordion[4].classList.add('show')
                            break;
                        case 'fake-r-3 active':
                            fakeAccordion[5].classList.add('show')
                            break;
                    }
                }
            })
        }
    } else {
        removeAllActive()
    }
}

function removeAllActive() {
    for (i = 0; i < selectorElement.length; i++) {
        selectorElement[i].classList.remove('active')
        fakeAccordion[i].classList.remove('show')
    }
}




for (x = 0; x < percentElement.length; x++) {
    percentElement[x].style.width = percentElement[x].classList[1] + "%"
}



let stateIsOpen = false
let accordGroup = {}

for (i = 0; i < accordion.length; i++) {
    // accordGroup[i] = accordion[i]
    // // console.log(accordion[i]);
    // if (accordion[i].classList.value === "content active" && stateIsOpen === false) {
    //     console.log("hellow [ppppOOsodadao")
    //     this.classList.remove('active')
    // }

    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')

        // // for (x = 0; x < accordion.length; x++) {
        // console.log(i);
        // // accordion.classList.remove('active')
        // // }
    })
}


// console.log(accordGroup);

// const percentageElement = document.querySelector(percentage)
// console.log(percentageElement);


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// CANVAS
var canvas = document.querySelector('#canvas'),
    ctx = canvas.getContext('2d'),
    points = [],
    m = { x: null, y: null },
    r = 0;

var a = 35; // how many dots to have
var b = 5; // how fast to spin
var c = 0.5; // how much to fade. 1 all, 0.5 half, 0 none
var d = 150; // distance from the mouse
let hue = 0

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

m.x = canvas.width / 2
m.y = canvas.height / 2

window.addEventListener('mousemove', function (e) {
    // m.x = e.clientX
    // m.y = e.clientY
    TweenMax.to(m, 0.3, { x: e.clientX, y: e.clientY, ease: 'linear' })

    // document.querySelector('.message').className = 'hide';
})

for (var i = 0; i < a; i++) {
    points.push({
        r: 360 / a * i,
        p: { x: null, y: null },
        w: Math.random() * 5,
        c: "#fff",
        d: Math.random() * (d + 5) - 5,
        s: Math.random() * (b + 5) - 5
    })
}



function render() {
    if (m.x == null || m.y == null) return;

    ctx.fillStyle = 'rgba(0,0,0,' + c + ')';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineCap = 'round';

    for (var i = 0; i < points.length; i++) {
        var p = points[i];

        p.c = "hsl(" + hue + ", 100%, 50%)"
        p.r += p.s;
        if (p.r >= 360) p.r = p.r - 360;

        var vel = {
            x: p.d * Math.cos(p.r * Math.PI / 180),
            y: p.d * Math.sin(p.r * Math.PI / 180)
        };

        if (p.p.x != null && p.p.y != null) {
            ctx.strokeStyle = p.c;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(p.p.x, p.p.y);
            ctx.lineTo(m.x + vel.x, m.y + vel.y)
            ctx.stroke();
            ctx.closePath();
        }

        p.p.x = m.x + vel.x;
        p.p.y = m.y + vel.y;
    }
}
// window.addEventListener("resize", function () {
//     canvas.width = innerWidth
//     canvas.height = innerHeight
// })

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
(function animloop() {
    requestAnimFrame(animloop);
    hue++

    if (hue == 99999) {
        hue = 0
    }

    render();
})();