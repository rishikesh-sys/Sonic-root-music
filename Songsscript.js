const songs = [
  {
    title: "ADIYEA PULLA",
    src: "https://github.com/rishikesh-sys/Sonic-root-music/raw/refs/heads/main/Adiyeapulla%20full%20song.mp3",
    cover: "WhatsApp_Image_2025-08-02_at_11.54.48_7f11c120-removebg-preview.png",
    musicBy: "RISHIKESH SRIRAM",
    lyrics: "BALAJI.G",
    singer: "BALAJI.G,RISHIKESH SRIRAM.V",
    distribution: "Zinxs-band",
    label: "Sonic-root-Music",
    studio: "Amrish Studio's"
  },
  {
    title: "STUDLY",
    src: "Studly.mp3",
    cover: "WhatsApp_Image_2025-08-02_at_11.54.48_7f11c120-removebg-preview.png",
    musicBy: "RISHIKESH SRIRAM",
    lyrics: "KOWSHIKA.S, LOKESH.K",
    singer: "RISHIKESH SRIRAM",
    distribution: "Zinxs-band",
    label: "Sonic-root-Music",
    studio: "Amrish Studio's"
  },
  {
    title: "SAY_NO_TO_DRUGS",
    src: "Say no to drugs karokr.mp3",
    cover: "WhatsApp_Image_2025-08-02_at_11.54.48_7f11c120-removebg-preview.png",
    musicBy: "RISHIKESH SRIRAM",
    lyrics: "NADODI KAVINGAN PUSHPARAJ",
    singer: "SETHUMATHAVAN,ABDUL MOHASIN",
    distribution: "Zinxs-band",
    label: "Sonic-root-Music",
    studio: "Amrish Studio's"
  },
  {
    title: "FRIENDSHIP ANTHEM",
    src: "frasanthemfull (1).mp3",
    cover: "WhatsApp_Image_2025-08-02_at_11.54.48_7f11c120-removebg-preview.png",
    musicBy: "RISHIKESH SRIRAM",
    lyrics: "RISHIKESH SRIRAM",
    singer: "RISHIKESH SRIRAM",
    distribution: "Zinxs-band",
    label: "Sonic-root-Music",
    studio: "Amrish Studio's"
  },
  {
    title: "KADHAL_URAVEA",
    src: "Kadhal uravea.mp3",
    cover: "WhatsApp_Image_2025-08-02_at_11.54.48_7f11c120-removebg-preview.png",
    musicBy: "RISHIKESH SRIRAM",
    lyrics: "UDHAYA",
    singer: "YASMIN BANU,RISHIKESH SRIRAM",
    distribution: "Zinxs-band",
    label: "Sonic-root-Music",
    studio: "Amrish Studio's"
  },
  {
    title: "UIREA_URAEA", 
    src: "uriyea.mp3",
    cover: "WhatsApp_Image_2025-08-02_at_11.54.48_7f11c120-removebg-preview.png",
    musicBy: "RISHIKESH SRIRAM",
    lyrics: "NADODIKAVINKAN PUSHPARAJ",
    singer: "DD.DVIYA,RISHIKESH SRIRAM",
    distribution: "Zinxs-band",
    label: "Sonic-root-Music",
    studio: "Amrish Studio's"
  },
  
];

const playlist = document.getElementById("playlist");
const audio = document.getElementById("audio");
const source = document.getElementById("source");
const cover = document.getElementById("cover");
const musicBy = document.getElementById("musicBy");
const lyrics = document.getElementById("lyrics");
const singer = document.getElementById("singer");
const distribution = document.getElementById("distribution");
const label = document.getElementById("label");
const studio = document.getElementById("studio");

// Load playlist
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.addEventListener("click", () => {
    source.src = song.src;
    audio.load();
    audio.play();
    cover.src = song.cover;
    musicBy.textContent = song.musicBy;
    lyrics.textContent = song.lyrics;
    singer.textContent = song.singer;
    distribution.textContent = song.distribution;
    label.textContent = song.label;
    studio.textContent = song.studio;
  });
  playlist.appendChild(li);
});





