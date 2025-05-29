function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
  
    modalImg.src = imgElement.src;
    modal.style.display = "flex";
    modalImg.style.transform = "scale(0.8)";
    modalImg.style.opacity = "0";
  
    let start = null;
    const duration = 300; // ms
  
    function animateOpen(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      let scale = 0.8 + (progress / duration) * 0.2;
      let opacity = progress / duration;
  
      if (scale > 1) scale = 1;
      if (opacity > 1) opacity = 1;
  
      modalImg.style.transform = `scale(${scale})`;
      modalImg.style.opacity = opacity;
  
      if (progress < duration) {
        requestAnimationFrame(animateOpen);
      }
    }
  
    requestAnimationFrame(animateOpen);
  }
  
  function closeModal() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
  
    let start = null;
    const duration = 300; // ms
  
    function animateClose(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      let scale = 1 - (progress / duration) * 0.2;
      let opacity = 1 - (progress / duration);
  
      if (scale < 0.8) scale = 0.8;
      if (opacity < 0) opacity = 0;
  
      modalImg.style.transform = `scale(${scale})`;
      modalImg.style.opacity = opacity;
  
      if (progress < duration) {
        requestAnimationFrame(animateClose);
      } else {
        modal.style.display = "none";
      }
    }
  
    requestAnimationFrame(animateClose);
  }
  
  // Close modal when clicking outside image or on close button
  window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
      closeModal();
    }
  };
     const openBtn = document.getElementById("openFormBtn");
      const modal = document.getElementById("formModal");
      const closeBtn = document.getElementById("closeModalBtn");

      openBtn.addEventListener("click", () => {
        modal.style.display = "flex"; // Show modal (flex for centering)
      });

      closeBtn.addEventListener("click", () => {
        modal.style.display = "none"; // Hide modal
      });

      // Also close modal if user clicks outside modal content
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      });