!function(e,n){"function"==typeof define&&define.amd?define(["exports"],n):n("undefined"!=typeof exports?exports:e.dragscroll={})}(this,function(e){var n=window,t="mousemove",o="mouseup",r="mousedown",i="addEventListener",u="removeEventListener",c="clientX",f="clientY",m=function(e){var n=e;return-1!=e.className.indexOf("intence")&&"undefined"!=typeof e.scroller&&(n=e.scroller),n},s=function(e){var u,s,d=!1;e.md=function(e){d=!0,u=e[c],s=e[f],e.preventDefault(),e.stopPropagation()},e.mu=function(){d&&(d=!1)},e.mm=function(n){var t=m(e);d&&(t.scrollLeft-=n[c]-u,t.scrollTop-=n[f]-s,u=n[c],s=n[f])},e[i](r,e.md,!1),n[i](o,e.mu,!1),n[i](t,e.mm,!1)},d=function(e){e[u](r,e.md,!1),n[u](o,e.mu,!1),n[u](t,e.mm,!1)},l=[],a=function(){for(var e=0;e<l.length;e++)d(l[e]);l=[]},p=function(){for(var e=document.getElementsByClassName("dragscroll"),n=0;n<e.length;n++)s(e[n]),l.push(e[n])},v=function(){a(),p()};"complete"==document.readyState?v():n[i]("load",v,!1),e.reset=v});