var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".portfolio-item img").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
});

$(".portfolio-item img").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
});

$('.circle-1').circleProgress({
    value: 0.75,
    size: 120,
    fill: {
      gradient: ["#00b5b8", "#31F2E6"]
}
});
$('.circle-2').circleProgress({
    value: 0.53,
    size: 120,
    fill: {
      gradient: ["#00b5b8", "#31F2E6"]
}
});
$('.circle-3').circleProgress({
    value: 0.64,
    size: 120,
    fill: {
      gradient: ["#00b5b8", "#31F2E6"]
}
});
$('.circle-4').circleProgress({
    value: 0.85,
    size: 120,
    fill: {
      gradient: ["#00b5b8", "#31F2E6"]
}
});

document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
const text = document.querySelector('.section2 p');
text.innerHTML = text.textContent.replace(/\S/g,
    "<span>$&</span>");

const letters = document.querySelectorAll('.section2 span');
for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener('mouseover', function () {
        letters[i].classList.add("active");
    })
}
for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener('mouseout', function () {
        letters[i].classList.remove("active");
    })
}
window.sr = ScrollReveal();

sr.reveal(".short-info", {
    duration : 2000,
    origin: 'left',
    distance : '30px',
    easing : 'ease-in-out',
})
sr.reveal(".my-img", {
    duration : 2000,
    origin: 'bottom',
    distance : '30px',
    easing : 'ease-in-out',
})
sr.reveal(".social-medias", {
    duration : 2000,
    origin: 'right',
    distance : '50px',
    easing : 'ease-in-out',
})