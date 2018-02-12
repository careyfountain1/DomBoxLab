document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
})
var button = document.createElement("button");
button.innerHTML = "Click to Make Box!";
document.body.appendChild(button);
button.id = "Butt";

var help = document.createElement("container");
document.body.appendChild(help);


document.getElementById("Butt").addEventListener("click", function () {
    let squareBox = document.createElement("div");
    help.appendChild(squareBox);
    squareBox.className = "box";
    
    let wrap = help.childElementCount;
    squareBox.id = wrap;
    squareBox.innerText = wrap;

squareBox.addEventListener("click", function () {
    var rgb = [];
    for(var i = 0; i < 3; i++)
        rgb.push(Math.floor(Math.random() * 255));
         squareBox.style.backgroundColor = 'rgb('+ rgb.join(',') +')'; 
})    

let larry = 1
let randy = 1

squareBox.addEventListener("dblclick", function() {
    if (wrap % 2 === 0) {
            if (document.getElementById(wrap + randy)===null){
                alert("Hell Naw Fam");    
            } else {
                document.getElementById(wrap + randy).remove();
                randy = randy + 1;
            }
        } else {
            if (document.getElementById(wrap - larry)===null) {
                alert("Naw Fam");
            } else {
                document.getElementById(wrap - larry).remove();
                larry = larry + 1
            }
        }       

        // if (go.wrap) wrap-1
        // return alert("Naw Fam");

    
}) 
      
});

// squareBox.addEventListener("mouseover", function () {
//     let idHover = squareBox.id;
    
// });
    // $('div').hover(function(){ // attach hover callback to all divs.
    //     $('#display_id_div').html(this.id); // change display_id_div innerHTML value
    //                                         // to the hovered id.
    // })​;

    
// function myFunction() {
//         var x = document.createElement("button");
//         var t = document.createTextNode("Square");
//         x.appendChild(t);
//         document.body.appendChild(x);
//         x.className = "box";
    
