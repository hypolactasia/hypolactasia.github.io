 var feedback = document.querySelector(".contacts-button");
 var feedbackPopup = document.querySelector(".modal-content");
 var modalOverlay = document.querySelector(".modal-overlay");
 var feedbackClose = document.querySelector(".modal-content-close");
 var feedbackForm = feedbackPopup.querySelector("form");
 var feedbackName = feedbackPopup.querySelector("[name=feedback-name]");
 var feedbackEmail = feedbackPopup.querySelector("[name=feedback-email]");
 var feedbackText = feedbackPopup.querySelector("[name=feedback-text]");
 var storageName = localStorage.getItem("feedbackName")
 var storageEmail = localStorage.getItem("feedbackEmail");

 feedback.addEventListener("click", function(evt) {
   evt.preventDefault();
   feedbackPopup.classList.add("modal-show");
   modalOverlay.classList.add("modal-overlay-show");
   if (storageName && storageEmail) {
     feedbackName.value = storageName;
     feedbackEmail.value = storageEmail;
     feedbackText.focus();
   } else if (storageName) {
     feedbackName.value = storageName;
     feedbackEmail.focus();
   } else if (storageEmail) {
     feedbackEmail.value = storageEmail;
     feedbackName.focus();
   } else {
     feedbackName.focus();
   }
 });

 feedbackForm.addEventListener("submit", function(evt) {
   if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
     event.preventDefault();
     feedbackPopup.classList.remove("modal-error");
     feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
     feedbackPopup.classList.add("modal-error");
   } else {
     localStorage.setItem("feedbackName", feedbackName.value);
   }
 });

 feedbackClose.addEventListener("click", function(evt) {
   evt.preventDefault();
   modalOverlay.classList.remove("modal-overlay-show");
   feedbackPopup.classList.remove("modal-show");
   feedbackPopup.classList.remove("modal-error");
 });

 window.addEventListener("keydown", function(event) {
   if (event.keyCode === 27) {
     if (feedbackPopup.classList.contains("modal-show")) {
       feedbackPopup.classList.remove("modal-show");
       modalOverlay.classList.remove("modal-overlay-show");
       feedbackPopup.classList.remove("modal-error");
     }
   }
 });
