const images=[
    "Loading6.png",
    "Loading7.png",
    "Loading8.png",
    "Loading9.png",
    "Loading10.png",
    "Loading11.png",
    "Loading12.png",
]
const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);