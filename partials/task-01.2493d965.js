!function(){var e=document.querySelector("#categories");console.log("Number of categories:",e.children.length);var l=e.children,t=!0,r=!1,n=void 0;try{for(var o,a=l[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var i=o.value;console.log("Category:",i.firstElementChild.textContent);var c=i.lastElementChild.children;console.log("Elements:",c.length)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}();
//# sourceMappingURL=task-01.2493d965.js.map
