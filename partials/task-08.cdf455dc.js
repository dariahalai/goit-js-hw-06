const e=document.querySelector(".login-form");e.addEventListener("submit",(function(t){t.preventDefault();const n=t.currentTarget.elements,o=n.email.value,s=n.password.value;if(""===o||""===s){alert("Перевірте правильність заповнення форми!")}else{const t={email:o,password:s};console.log(t),e.reset()}}));
//# sourceMappingURL=task-08.cdf455dc.js.map
