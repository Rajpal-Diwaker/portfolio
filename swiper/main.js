function style_string(id) {
    return `width: 100%; height: 220px; background-size: contain; background-position: center center; background-size: cover; background-image: url('images/actress/${id}.jpg');`
}
var wrapper = document.getElementsByClassName('swiper-wrapper')[0]
for (var x = 0; x < 12; x++) {
    var slide = document.createElement("div");
    slide.setAttribute('class', 'swiper-slide')

    var i=(x+1+9)%12+1

    // Creating div with style to contain image
    var ci = document.createElement("div");
    ci.setAttribute('style', style_string(i))

    // creating deatils div
    var detail = document.createElement("div");
    detail.setAttribute('style', 'text-align: center;')

    // span inside of detail
    var span = document.createElement('span')
    span.setAttribute('style', 'color: red;')
    span.appendChild(document.createTextNode(`Detail of Name ${x} = detail ${x}`))

    // h3 which will contain span and name textnode
    var h3 = document.createElement("h3");
    h3.appendChild(document.createTextNode(`Name ${x}`))
    h3.appendChild(document.createElement("br"))
    h3.appendChild(span)
    h3.appendChild(document.createElement("br"))

    detail.appendChild(h3)

    slide.appendChild(ci)
    slide.appendChild(detail)

    wrapper.appendChild(slide)
}