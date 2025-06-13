let slike = new Array()
slike[0] = "tehnoServis.jpg"
slike[1] = "TehnoServis2.jpg"
slike[2] = "OlgaTapeta.jpg"
slike[3] = "OlgaTapeta2.jpg"
slike[4] = "opekaAuto.jpg"
slike[5] = "DMinvestAuto.jpg"
slike[6] = "kljuckoAuto.jpg"
slike[7] = "kljuckoAuto2.jpg"
slike[8] = "kljuckoKamion.jpg"
slike[9] = "kljuckoKamion2.jpg"
slike[10] = "RoMetalCo.jpg"
slike[11] = "NarcisoBar.jpg"
slike[12] = "InstalMont1.jpg"
slike[13] = "InstalMont2.jpg"
slike[14] = "Kantina.jpg"
slike[15] = "peronica.jpg"
slike[16] = "Perionica2.jpg"
slike[17] = "LaganoSp.jpg"



let currentImige = 0
let totalNumber = slike.length


function next(){
    currentImige++
    if(currentImige == totalNumber) currentImige = 0
    document.getElementById("slika").src = slike[currentImige]
}

function previous(){
    currentImige--
    if(currentImige == -1) currentImige = totalNumber -1
    document.getElementById("slika").src = slike[currentImige]
}

let timer

function start(){
    timer = setInterval(next, 1500)
}

function slideStop(){
    clearInterval(timer)
}