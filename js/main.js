document.addEventListener("DOMContentLoaded", function() {
    //vars
let cosmetic = document.getElementById("cosmetic")
    // Create a timeline
function scene1(){
    let tl = gsap.timeline({});
      tl.from(cosmetic, {opacity:0, y:600})
      return tl;
}

function scene2(){
    let tl = gsap.timeline({
        repeat: -1, // number of repeats (-1 for infinite)
        repeatRefresh: true, // invalidates on each repeat
        yoyo: true,
      });
    
      tl.to(cosmetic, {y:20}, {y:0})
      return tl
}

let master = gsap.timeline()
  .add(scene1())
  .add(scene2()) // overlap slightly

});