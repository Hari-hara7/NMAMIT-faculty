document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("intro-video");
  
    video.onended = function() {
      redirectToMainSite();
    };
  
    setTimeout(redirectToMainSite, 7000); // Fallback in case video doesn't play or end event doesn't fire
  
    function redirectToMainSite() {
      window.location.href = "https://karthik-s-salian.github.io/nmamitloop/teachers/"; // Replace with the URL of the main site
    }
  });
  