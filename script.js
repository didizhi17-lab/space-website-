// STARFIELD
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for(let i=0;i<200;i++){
    stars.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        size: Math.random()*2,
        speed: Math.random()*0.5
    });
}

function animateStars(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let s of stars){
        s.y += s.speed;
        if(s.y>canvas.height)s.y=0;
        ctx.fillStyle='white';
        ctx.fillRect(s.x,s.y,s.size,s.size);
    }
    requestAnimationFrame(animateStars);
}
animateStars();

// RESPONSIVE CANVAS
window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// PLANET SEARCH
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', ()=>{
    const filter = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('#planetCards .card');
    cards.forEach(card=>{
        let name = card.getAttribute('data-name').toLowerCase();
        if(name.includes(filter)){
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});

// LIGHTBOX
const lightboxImages = document.querySelectorAll('.lightbox');
lightboxImages.forEach(img=>{
    img.addEventListener('click', ()=>{
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top='0'; overlay.style.left='0';
        overlay.style.width='100%'; overlay.style.height='100%';
        overlay.style.background='rgba(0,0,0,0.9)';
        overlay.style.display='flex';
        overlay.style.justifyContent='center';
        overlay.style.alignItems='center';
        overlay.style.cursor='pointer';
        const imgLarge = document.createElement('img');
        imgLarge.src = img.src;
        imgLarge.style.maxWidth='90%';
        imgLarge.style.maxHeight='90%';
        overlay.appendChild(imgLarge);
        document.body.appendChild(overlay);
        overlay.addEventListener('click',()=>document.body.removeChild(overlay));
    });
});
