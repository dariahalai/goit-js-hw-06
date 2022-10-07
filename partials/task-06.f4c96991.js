const t=document.querySelector("#validation-input");t.addEventListener("blur",(function(e){e.currentTarget.value.length<t.getAttribute("data-length")?t.classList.add("invalid"):e.currentTarget.value.length>=t.getAttribute("data-length")&&t.classList.replace("invalid","valid")}));
//# sourceMappingURL=task-06.f4c96991.js.map
