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