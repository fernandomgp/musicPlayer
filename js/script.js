const songList = [
    {
        title:'Caporales Past Year',
        file:'caporalespastyear.mpeg',
        cover:'caporal1.jpg'
    },
    {
        title:'Caporales Remove Two',
        file:'caporalesremovetwo.mpeg',
        cover:'caporal2.jpg'
    },
    {
        title:'Caporales Rename',
        file:'caporalesrename.mpeg',
        cover:'caporal3.jpg'
    },
    {
        title:'Caporales Start',
        file:'caporalesstart.mpeg',
        cover:'caporal4.jpg'
    }
];

let actualSong = null;

const songs = document.getElementById('songs');
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const titulo = document.getElementById('title');

function loadSongs(){
    songList.forEach((song,index) =>{
        const li = document.createElement("li");
        const link = document.createElement("a");

        link.textContent = song.title;
        link.href="#";
        link.addEventListener('click',()=>loadSong(index));
        li.appendChild(link);
        songs.appendChild(li);
    })
}
function loadSong(songIndex){
    if(songIndex != actualSong){
        actualSong = songIndex;
        audio.src = `./audio/` + songList[songIndex].file;
        audio.play();
        changeCover(songIndex); 
        changeActiveClass()
    }
}

function changeActiveClass(){
    const links = document.querySelectorAll('a')
}

function changeCover(songIndex){
    cover.src = `./img/` + songList[songIndex].cover
}

function changeSongtitle(songIndex){
    title.innerText = songList[songIndex].title
}



loadSongs();