!function(e,n){"function"==typeof define&&define.amd?define(["exports"],n):n("undefined"!=typeof exports?exports:e.syncscroll={})}(this,function(e){var n="Width",t="Height",o="Top",r="Left",s="scroll",i="client",l={},d=function(){var e,d,f,c,a,u=document.getElementsByClassName("syncscroll");for(a in l)if(l.hasOwnProperty(a))for(e=0;e<l[a].length;e++)l[a][e].removeEventListener("scroll",l[a][e].syn,0);for(e=0;e<u.length;e++)if(c=0,f=u[e],a=f.getAttribute("name")){for(f=f.scroller||f,l[a]||(l[a]=[]),d=0;d<l[a].length;d++)l[a][d]==f&&(c=1);c||l[a].push(f),f.eX=f.eY=0,function(e,d){e.addEventListener("scroll",e.syn=function(){var f,c,a=l[d],u=e[s+r],h=e[s+o],p=u/(e[s+n]-e[i+n]),y=h/(e[s+t]-e[i+t]),m=0,g=0;for(u!=e.eX&&(m=1,e.eX=u),h!=e.eY&&(g=1,e.eY=h),c=0;c<a.length;c++)f=a[c],f!=e&&(m&&(u=Math.round(p*(f[s+n]-f[i+n])),f.eX=u,Math.round(f[s+r]-u)&&(f[s+r]=u)),g&&(h=Math.round(y*(f[s+t]-f[i+t])),f.eY=h,Math.round(f[s+o]-h)&&(f[s+o]=h)))},0)}(f,a)}};"complete"==document.readyState?d():window.addEventListener("load",d,0),e.reset=d});