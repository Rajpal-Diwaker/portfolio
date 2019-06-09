// document.addEventListener('DOMContentLoaded', mediaQuery)

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         $('detail-web').append(`<b>Frontend</b> : <div class="tt">HTML</div>, CSS, Bootstrap, JQuery.
//        <br>
//        <b>Backend</b> : NodeJs
//        <br>
//        <b>Databse</b> : MongoDb, Firebase, SQL`)
//         var colors = ["blue", "red", "brown", "cyan", "pink"];
//         var texts = document.getElementsByClassName('tt');
//         for (let i = 0; i < texts.length; i++) {
//             var t = texts[i];
//             let c = Math.floor((Math.random() * (4)) % 5);
//             t.style.color = colors[c];
//             console.log(c + " " + colors[c])
//         }
//     } else {
//         console.log('ehbfjn')
//     }
// }

// function mediaQuery() {
//     let query = window.matchMedia("(max-width: 500px)")
//     if (query.matches) {
//         console.log('matched')
//         $('detail-web').append(`<b>Frontend</b> : <div class="tt">HTML</div>, CSS, Bootstrap, JQuery.
//         <br>
//         <b>Backend</b> : NodeJs
//         <br>
//         <b>Databse</b> : MongoDb, Firebase, SQL`)
//         var colors = ["blue", "red", "brown", "cyan", "pink"];
//         var texts = document.getElementsByClassName('tt');
//         for (let i = 0; i < texts.length; i++) {
//             var t = texts[i];
//             let c = Math.floor((Math.random() * (4)) % 5);
//             t.style.color = colors[c];
//             console.log(c + " " + colors[c])
//         }
//     } else {
//         console.log('No')
//     }
// }
// // var x = window.matchMedia()
// // x.addListener(myFunction) // Attach listener function on state changes
// // myFunction(x) // Call listener function at run time



var colors = ["#5a5e35","#5e3535","#ff0000","#0095b7","#4006dd","#ea09db","#a04e60","#383133","#288c34","#b2ff70"];
var texts = document.getElementsByClassName('tt');
for (let i = 0; i < texts.length; i++) {
    var t = texts[i];
    let c = Math.floor((Math.random() * (10)+1) % 5);
    t.style.color = colors[c];
    console.log(c + " " + colors[c])
}