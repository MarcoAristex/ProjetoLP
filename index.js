var BrunaCardDepoimento =window.document.getElementById("Bruna-card-depoimento")
var LeonardoCardDepoimento =window.document.getElementById("Leonardo-card-depoimento")
var SamanthaCardDepoimento =window.document.getElementById("Samantha-card-depoimento")
var SetaEsquerda =window.document.getElementById("Seta-esquerda")
var SetaDireita=window.document.getElementById("Seta-direita")

function RolarParaDireita(){
    SamanthaCardDepoimento.style="display:flex"
    BrunaCardDepoimento.style="display:none"
    SetaDireita.style="display:none"
    SetaEsquerda.style="display:flex"
}

function RolarParaEsquerda(){
    SamanthaCardDepoimento.style="display:none"
    BrunaCardDepoimento.style ="display:flex"
    SetaEsquerda.style="display:none"
    SetaDireita.style="display:flex"

}