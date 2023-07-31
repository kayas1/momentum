const images=[
    "1636084017.jpg",
    "941907348493074433.png",
    "download.jpg",
    "KakaoTalk_20220707_195349823.png",
]
const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);