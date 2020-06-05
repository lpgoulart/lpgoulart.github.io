projects = [
    {
        id: 1,
        title: "primeiro",
        img: '../assets/dashboard.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },   
    {
        id: 2,
        title: "segundo",
        img: '../assets/mexico.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 3,
        title: "terceiro",
        img: '../assets/paint.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 4,
        title: "querto",
        img: '../assets/dev.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 5,
        title: "primeiro",
        img: '../assets/airplane.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },   
    {
        id: 6,
        title: "segundo",
        img: '../assets/audrey.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 7,
        title: "terceiro",
        img: '../assets/bruna.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 8,
        title: "querto",
        img: '../assets/docs.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 9,
        title: "primeiro",
        img: '../assets/flashcard.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },   
    {
        id: 10,
        title: "segundo",
        img: '../assets/forex.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 11,
        title: "terceiro",
        img: '../assets/trader.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 12,
        title: "querto",
        img: '../assets/login.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 13,
        title: "primeiro",
        img: '../assets/morse.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },   
    {
        id: 14,
        title: "segundo",
        img: '../assets/nefroatlas.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 15,
        title: "terceiro",
        img: '../assets/phone.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 16,
        title: "querto",
        img: '../assets/portfolio.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 17,
        title: "primeiro",
        img: '../assets/quarkdocs.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },   
    {
        id: 18,
        title: "segundo",
        img: '../assets/renale.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 19,
        title: "terceiro",
        img: '../assets/surf.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },
    {
        id: 20,
        title: "terceiro",
        img: '../assets/rocketseat.png',
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },

]

id = 0


function load() {

    var myVar = setInterval(()=>{
        if(id == projects.length) {
            clearInterval(myVar)
        }
        else {
            addProject(projects[id])
        }
        id ++;
    }, 1000);

}

function addProject(project) {

    let works = document.getElementById('works')

    const content = `
        <div class="card-project fade-in" id="project0${project.id}">
            <div class="card-img" style="background-image: url(${project.img})"></div>

            <div class="card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tag">
                    <p>${project.tag}</p>

                    <span class="level">${project.lvl}</span>
                </div>
            </div>
        </div>
        `

        works.innerHTML+=content

        setTimeout(() => {
            var removeFade = document.getElementById('project0'+project.id)
            removeFade.classList.remove('fade-in')
        }, 1000);
}


function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML += d.toLocaleTimeString();
}