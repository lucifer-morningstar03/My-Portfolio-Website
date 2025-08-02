 // Minimal JS just for the spotlight effect
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        // Update CSS variables for the spotlight effect
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
      });
    });

    const video1 = document.getElementById("ProjectVideo1");
    const video2 = document.getElementById("ProjectVideo2");
    const video3 = document.getElementById("ProjectVideo3");
    const video4 = document.getElementById("ProjectVideo4");

    const videoList =[video1, video2, video3, video4];

    videoList.forEach (function(video){
        video.muted = true;
        video.addEventListener("mouseover", function(){
            video.play()
        })})
        video.addEventListener("mouseout", function(){
        video.pause()

        video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
})})