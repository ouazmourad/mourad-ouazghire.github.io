
const c = document.getElementById('bg');
const ctx = c.getContext('2d');
function resize(){ c.width = innerWidth; c.height = innerHeight; }
addEventListener('resize', resize); resize();
let t = 0;
function draw(){
  t += 0.01;
  ctx.clearRect(0,0,c.width,c.height);
  ctx.save();
  ctx.translate(c.width/2, c.height*0.65);
  for(let i=0;i<40;i++){
    const y = i * 18;
    ctx.beginPath();
    for(let x=-500;x<=500;x+=10){
      const z = (Math.sin((x*0.02)+t+(i*0.2))*8) + i*2;
      const sx = x*1.2;
      const sy = y + z;
      ctx.lineTo(sx, sy);
    }
    ctx.strokeStyle = i % 2 ? 'rgba(108,246,255,0.12)' : 'rgba(159,122,234,0.12)';
    ctx.stroke();
  }
  ctx.restore();
  requestAnimationFrame(draw);
}
draw();

document.getElementById('theme').addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});
if(localStorage.getItem('theme') === 'light') document.body.classList.add('light');
