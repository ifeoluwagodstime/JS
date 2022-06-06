let text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti officia numquam quas praesentium nostrum expedita eveniet iusto et. Nisi temporibus vitae incidunt sint blanditiis aliquam cum ex, reiciendis alias pariatur!"
console.log(text.length)

function getSizeOfDom() {
    let h = window.outerHeight;
    let w = window.outerWidth; 
    let txt = "The Height of your Windows is " + h + " and the width is " + w + " Thank you!!";
    document.getElementById("result").innerHTML = txt
}
window.onresize = getSizeOfDom;


let str = "given that nigeria is ruled by the carvans, decide the next president."
let result = str.search = "next president"
console.log(result)
let get = "The quick brown fox jumps over the lazy dog."
console.log(get.substring(4,15));

let str1 = "given that nigeria is ruled by the cabans, decide the next president."
let resul = str1.replace("cabans", "British")
console.log(resul)
