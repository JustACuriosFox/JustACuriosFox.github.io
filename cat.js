const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;


const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);


function openNav() {
    document.getElementById("mySidebar").style.width = "800px";
    document.getElementById("main").style.marginLeft = "800px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval1 = null;
  let interval2 = null;
  let interval3 = null;
  let interval5 = null;

  document.querySelector("h1").onmouseover = event => {  
    let iteration1 = 0;
    
    clearInterval(interval1);
    
    interval1 = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration1) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration1 >= event.target.dataset.value.length){ 
        clearInterval(interval1);
      }
      
      iteration1 += 1 / 3;
    }, 15);
  }

  document.querySelector("h2").onmouseover = event => {  
    let iteration2 = 0;
    
    clearInterval(interval2);
    
    interval2 = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration2) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration2 >= event.target.dataset.value.length){ 
        clearInterval(interval2);
      }
      
      iteration2 += 1 / 3;
    }, 15);
  }

  document.querySelector("h3").onmouseover = event => {  
    let iteration3 = 0;
    
    clearInterval(interval3);
    
    interval3 = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration3) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration3 >= event.target.dataset.value.length){ 
        clearInterval(interval3);
      }
      
      iteration3 += 1 / 3;
    }, 15);
  }

  document.querySelector("h5").onmouseover = event => {  
    let iteration5 = 0;
    
    clearInterval(interval5);
    
    interval5 = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration5) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration5 >= event.target.dataset.value.length){ 
        clearInterval(interval5);
      }
      
      iteration5 += 1 / 3;
    }, 15);
  }