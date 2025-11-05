function SheryAnimation(){
Shery.imageEffect("#back", {
  style: 6,
  config: {
    noiseDetail: { value: 7.44, range: [0, 100] },
    distortionAmount: { value: 2.98, range: [0, 10] },
    scale: { value: 36.36, range: [0, 100] },
    speed: { value: 0.79, range: [0, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.1892816278556664 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 0.66, range: [0.1, 5] },
    durationIn: { value: 0.36, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
//   debug: true,
  gooey: true,
});
}
SheryAnimation()
function InfineTextAnimation(){
    const elems = document.querySelectorAll(".elem")
    elems.forEach(function(elem){
        const h1 = elem.querySelectorAll("h1");
let index =0;
let animating = false
const main = document.querySelector("#main")
main.addEventListener("click",function(){
    if(!animating){
        animating=true
   gsap.to(h1[index],{
        top:"-=100%",
        onComplete:function(){
            gsap.set(this._targets[0],{
                top:"100%",
                
            },
        animating=false)
        }
    })
     index===h1.length-1?(index=0):index++
        gsap.to(h1[index],{
        top:"-=100%"
    })
    }
 
})
    })
}
InfineTextAnimation()