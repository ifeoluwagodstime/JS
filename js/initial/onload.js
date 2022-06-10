let text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti officia numquam quas praesentium nostrum expedita eveniet iusto et. Nisi temporibus vitae incidunt sint blanditiis aliquam cum ex, reiciendis alias pariatur!"
console.log(text.length)

function getSizeOfDom() {
    let h = window.outerHeight;
    let w = window.outerWidth; 
    let txt = "The Height of your Windows is " + h + " and the width is " + w + " Thank you!!";
    document.getElementById("result").innerHTML = txt
}
window.onresize = getSizeOfDom;