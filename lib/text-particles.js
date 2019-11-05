/* -----------------------------------------------
 * text-particles.js v1.0.0
 * (c) 2019-present Alden Zamora
 * Released under MIT license[http://opensource.org/licenses/MIT]
 * =============================================== */

const canvas = document.getElementById("tp__canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;


let namesArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let maxSpeed = 3;
let minSpeed = -3;

let particlesArray;
class Particle {
  constructor(x, y, moveX, moveY, name) {
    this.pointX = x;
    this.pointY = y;
    this.moveX = moveX;
    this.moveY = moveY;
    this.name = name;
    this.size = 1;
  }

  plot() {
    ctx.beginPath();
    ctx.arc(this.pointX, this.pointY, this.size, 0, Math.PI * 2);
    ctx.font = '24px Arial';
    ctx.fillText(this.name, this.pointX, this.pointY);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}

function accelerate() {
  particlesArray = [];

  let numberOfParticles = namesArray.length;
  for (let i=0; i<numberOfParticles; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let moveX = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    let moveY = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    particlesArray.push(new Particle(x, y, moveX, moveY, namesArray[i]));
  }
  animateFrameLoop();
}

function animateFrameLoop() {
  requestAnimationFrame(animateFrameLoop);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let len = particlesArray.length;
  for (let i=0; i < len; i++) {
    particlesArray[i].plot();
  }
}

let textParticles = {};
textParticles.accelerate = accelerate;
export default textParticles;
