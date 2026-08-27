const $=s=>document.querySelector(s), music=$("#music"), video=$("#bgVideo"), toast=$("#toast");
function notify(t){toast.textContent=t;toast.classList.add("toast");clearTimeout(window.__t);window.__t=setTimeout(()=>toast.classList.remove("toast"),2500)}
function activate(){music.volume=.45;music.play().catch(()=>{});video.play().catch(()=>{});$("#sound").textContent="🔊";notify("⚡ FEARLESS EXPERIENCE ACTIVATED")}
window.addEventListener("load",()=>setTimeout(()=>{$("#boot").style.opacity="0";$("#boot").style.visibility="hidden"},1650));
document.addEventListener("pointerdown",()=>{if(music.paused)activate()},{once:true});
$("#sound").onclick=()=>{if(music.paused)activate();else{music.pause();$("#sound").textContent="🔇";notify("Sound muted")}};
$("#welcome").onclick=()=>activate();
$("#menu").onclick=()=>$("#mobileNav").classList.toggle("open");
document.querySelectorAll("#mobileNav a").forEach(a=>a.onclick=()=>$("#mobileNav").classList.remove("open"));
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
document.querySelectorAll(".card").forEach(c=>{c.onmousemove=e=>{let r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`translateY(-8px) rotateX(${-y*5}deg) rotateY(${x*5}deg)`};c.onmouseleave=()=>c.style.transform=""});
const cv=$("#particles"),ctx=cv.getContext("2d");let W,H,p=[];
function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;p=Array.from({length:100},()=>({x:Math.random()*W,y:Math.random()*H,r:.3+Math.random()*1.5,v:.08+Math.random()*.4}))}
function draw(){ctx.clearRect(0,0,W,H);for(const a of p){a.y-=a.v;if(a.y<0)a.y=H;ctx.fillStyle="rgba(0,246,255,.38)";ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,Math.PI*2);ctx.fill()}requestAnimationFrame(draw)}size();draw();addEventListener("resize",size);
                                                 
