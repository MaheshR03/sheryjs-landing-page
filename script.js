Shery.imageEffect("#back", {
    style: 5,
    config: {
        a: { value: 1.49, range: [0, 30] },
        b: { value: - 0.98, range: [-1, 1] },
        aspect: { value: 1.8822947576656774 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.33, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: false },
        onMouse: { value: 1 },
        noise_speed: { value: 1.59, range: [0, 10] },
        metaball: { value: 0.21, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.47, range: [0, 2] },
        noise_scale: { value: 12.15, range: [0, 100] },
    },
    gooey: true,
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;

    document.querySelector("#main").addEventListener("click", function() {
        if(!animating){
            animating = true;
            var current = index;
            var next = (index === h1s.length - 1) ? 0 : index + 1;
            // Hide all h1s except current and next
            h1s.forEach(function(h, i) {
                if (i !== current && i !== next) {
                    gsap.set(h, {opacity: 0, top: '0%'});
                }
            });
            // Prepare next h1 for entry
            gsap.set(h1s[next], {top: "100%", opacity: 0});
            // Animate both at the same time
            gsap.to(h1s[current], {
                top: "-100%",
                opacity: 0,
                ease: Expo.easeinOut,
                duration: 0.5
            });
            gsap.to(h1s[next], {
                top: "0%",
                opacity: 1,
                ease: Expo.easeinOut,
                duration: 0.5,
                onComplete: function() {
                    animating = false;
                }
            });
            index = next;
        }
    });
})
