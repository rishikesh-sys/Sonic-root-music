const message = `Welcome to Sonic Root Music 🎵🎶

Hii Music Lovers This is RISHIKESH SRIRAM – Independent Music Composer, Singer ,Founder and CEO of 'Sonic-root-Music'. Music is not just my passion, it's my root. Through Sonic Root Music, I bring original tunes that connect emotions and vibes.

Stay tuned for more soulful releases!`;

let index = 0;
const speed = 40; // typing speed in ms

function typeWriter() {
  if (index < message.length) {
    document.getElementById("typewriter").textContent += message.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;







