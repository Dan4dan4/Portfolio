document.addEventListener("DOMContentLoaded", () => {
    const rainContainer = document.querySelector(".rain");
    const numberOfRaindrops = 550; 
  
    for (let i = 0; i < numberOfRaindrops; i++) {
      const raindrop = document.createElement("div");
      raindrop.classList.add("raindrop");
  
 
      raindrop.style.left = `${Math.random() * 100}vw`; 
      raindrop.style.animationDuration = `${Math.random() * 2 + 2}s`; 
      raindrop.style.animationDelay = `${Math.random() * 1}s`;     
  
      rainContainer.appendChild(raindrop);
    }
  });
  