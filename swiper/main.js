// function style_string(id) {
//     var name=String.fromCharCode(97 + id);
//     return `width: 100%; height: 220px; background-size: contain; background-position: center center; background-size: cover; background-image: url('images/ss/${name}.png');`
// }

// var files=10;
// var wrapper = document.getElementsByClassName('swiper-wrapper')[0]
// for (var x = 0; x < files; x++) {
//     var slide = document.createElement("div");
//     slide.setAttribute('class', 'swiper-slide')

//     var i=(x+1+9)%files

//     // Creating div with style to contain image
//     var ci = document.createElement("div");
//     ci.setAttribute('style', style_string(i))

//     slide.appendChild(ci)

//     wrapper.appendChild(slide)
// }