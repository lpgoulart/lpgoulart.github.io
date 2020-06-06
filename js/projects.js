projects = [
    {
        id: 1,
        title: "primeiro",
        img: {
            path: '../assets/dev.png',
            width: "100%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },   
    {
        id: 2,
        title: "segundo",
        img: {
            path: '../assets/mexico.png',
            width: "100%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 3,
        title: "terceiro",
        img: {
            path: '../assets/nefroatlas.png',
            width: "100%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 4,
        title: "querto",
        img: {
            path: '../assets/forex.png',
            width: "100%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 5,
        title: "primeiro",
        img: {
            path: '../assets/quarkdocs.png',
            width: "100%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },   
    {
        id: 6,
        title: "segundo",
        img: {
            path: '../assets/bruna.png',
            width: "60%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 7,
        title: "terceiro",
        img: {
            path: '../assets/paint.png',
            width: "70%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 8,
        title: "querto",
        img: {
            path: '../assets/portfolio.png',
            width: "45%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 9,
        title: "primeiro",
        img: {
            path: '../assets/docs.png',
            width: "70%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },   
    {
        id: 10,
        title: "segundo",
        img: {
            path: '../assets/dashboard.png',
            width: "70%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 11,
        title: "terceiro",
        img: {
            path: '../assets/audrey.png',
            width: "100%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 12,
        title: "querto",
        img: {
            path: '../assets/trader.png',
            width: "100%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 13,
        title: "primeiro",
        img: {
            path: '../assets/renale.png',
            width: "100%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },   
    {
        id: 14,
        title: "segundo",
        img: {
            path: '../assets/phone.png',
            width: "100%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 15,
        title: "terceiro",
        img: {
            path: '../assets/flashcard.png',
            width: "100%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 16,
        title: "querto",
        img: {
            path: '../assets/surf.png',
            width: "45%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 17,
        title: "primeiro",
        img: {
            path: '../assets/morse.png',
            width: "100%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },   
    {
        id: 18,
        title: "segundo",
        img: {
            path: '../assets/login.png',
            width: "100%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 19,
        title: "terceiro",
        img: {
            path: '../assets/airplane.png',
            width: "100%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 20,
        title: "terceiro",
        img: {
            path: '../assets/rocketseat.png',
            width: "70%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },

]

id = 0
loaded = 5
timer = 700

function setTimer(time) {
    timer = time
    console.log(timer)
}

function load() {

    var myVar = setInterval(()=>{
        if(id === loaded) {
            clearInterval(myVar)
        }
        else {
            addProject(projects[id])
            id ++;
            if ( id == projects.length/2 ) {
                document.getElementById('loading').classList.add("hide")
            }
        }
    }, timer);
    if(loaded ==  10) {
        document.getElementById('more').innerHTML = "See All"
    }
    
}

function loadAll() {
    loaded = projects.length
    load()
}

function more () {
    if(loaded ==  10) {
        window.location.replace ("pages/seeAll.html")
    }
    else {
        loaded+=5
        load()
    }
}

function addProject(project) {

    let works = document.getElementById('works')

    const content = `
        <div class="card-project fade-in" id="project${project.id}" onclick="details(${project.id})">
            <div class="card-img" style="background-image: url(${project.img.path})"></div>

            <div class="card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tag">
                    <p>${project.tag}</p>
                </div>
            </div>
        </div>
        `

        works.innerHTML+=content

        setTimeout(() => {
            var removeFade = document.getElementById('project'+project.id)
            removeFade.classList.remove('fade-in')
        }, timer-50);

}

function details(id) {
    
    url = window.location.pathname


    if( url == "/index.html" || url == "/") {
        window.location.href ="pages/details.html?project_id="+id
    }
    else {
        window.location.href ="details.html?project_id="+id
    }

}

function projectInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = Number(urlParams.get('project_id'));

    let project_div = document.getElementById('project_about')
    
    let project = projects[id-1]
    
    project_div.innerHTML = `
        <div class="container">
            <div class="info">
                <h1>${project.title}</h1>
                <p>${project.description}</p>
            </div>
            <div class="img">
                <img src="${project.img.path}" alt="project" width="${project.img.width}">
            </div>
        </div>
    `
}

function showAll() {
    window.location.replace ("pages/seeAll.html");
}
function home() {
    window.location.replace ("/index.html");
}

function toggle() {
    let menu = document.getElementById('menuBar');

    if( !menu.classList.contains("animationIn") && !menu.classList.contains("animationOut") ) {
      menu.classList.toggle('animationIn')
      menu.classList.toggle('show')
    } else if ( menu.classList.contains("animationIn") ) {
      menu.classList.remove('animationIn')
      menu.classList.add('animationOut')
      setTimeout(()=> {menu.classList.toggle('show')}, 200)      
    } else {
      menu.classList.add('animationIn')
      menu.classList.remove('animationOut')
      menu.classList.toggle('show')
    }

  }

// ---------------------------------------------------------
// in case the client dont pay
// ---------------------------------------------------------
// function checkDate() {
//     const date = new Date();
    
//     const month = 5
//     const finalDay = 8

//     let opacity = (finalDay - date.getDate())/10 

//     console.log (opacity)

//     if ( (opacity >= 0 || opacity <= 1) && month == date.getMonth() ) {
//         if (finalDay == date.getDate()) {
//             document.getElementById('body').style.opacity = 0
//         }
//         else {
//             document.getElementById('body').style.opacity = opacity
//         }
//     }
//     else {
//         document.getElementById('body').style.opacity = 1
//     }

// }

// ---------------------------------------------------------
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

function typing() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};