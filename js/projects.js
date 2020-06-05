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
            width: "70%"
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
            width: "90%"
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
            width: "60%"
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
            width: "90%"
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
            width: "90%"
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
            width: "60%"
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
            width: "90%"
        },
        description: 'akjshdkajsdasdasd',
        tag: 'HTML, CSS',
        lvl: 'starter'
    },

]

id = 0
loaded = 5

function load() {

    var myVar = setInterval(()=>{
        if(id === loaded) {
            clearInterval(myVar)
        }
        else {
            addProject(projects[id])
            id ++;
        }
    }, 700);
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
        }, 650);
}

function details(id) {
    
    url = window.location.pathname

    if( url == "/index.html" ) {
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

    console.log(id);
}