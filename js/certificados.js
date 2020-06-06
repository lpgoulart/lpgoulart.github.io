certificates = [
    {
        id: 1,
        path: '../assets/certificados/embc.png'
    },
    {
        id: 2,
        path: '../assets/certificados/angular.png'
    },
    {
        id: 3,
        path: '../assets/certificados/seo.png'
    },
    {
        id: 4,
        path: '../assets/certificados/frontcamp.png'
    },
    {
        id: 5,
        path: '../assets/certificados/respcamp.png'
    }
]

id = 0
loaded = 5

function loadCertificados() {

    var myVar = setInterval(()=>{
        if(id === loaded) {
            clearInterval(myVar)
        }
        else {
            addCertificados(certificates[id])
            id ++;
            if ( id == certificates.length/2 ) {
                document.getElementById('loading').classList.add("hide")
            }
        }
    }, timer);
    if(loaded ==  10) {
        document.getElementById('more').innerHTML = "See All"
    }
    
}

function loadAllCertificados() {
    loaded = certificates.length
    loadCertificados()
}

function addCertificados(certificado) {

    let works = document.getElementById('works')

    const content = `
        <div class="cert-info fade-in" id="certificado${certificado.id}" onclick="detailCertificate(${certificado.id})">
            <img src="${certificado.path}" width="100%" />
        </div>
        `

        works.innerHTML+=content

        setTimeout(() => {
            var removeFade = document.getElementById('certificado'+certificado.id)
            removeFade.classList.remove('fade-in')
        }, timer-50);

}

function detailCertificate(id) {
    var modal = document.getElementById("myModal");
    let certificado = certificates[id-1]


    
    // const detail = document.getElementById("myModal");
    const content = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <div id="certificado" style="color: black;">
                <img src="${certificado.path}" width="100%" />
            </div>
        </div>
    `
    modal.innerHTML = content
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


}
