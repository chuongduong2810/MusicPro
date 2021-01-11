
let albumID = localStorage.getItem('album');
let listTrack = [];
axios.get(`${host}/music/album/`)
    .then(res => {
        let albumWillDisplay = res.data.find(item => item._id === albumID);

        if(albumWillDisplay)
        {

            let title = `
            <h3 class="tittle album-detail">${albumWillDisplay.name} - ${albumWillDisplay.artist.name}</h3>
            <div class="clearfix"> </div>
            `
            titleBlock.innerHTML = title;
            listTrack = albumWillDisplay.tracks;
            listTrack.map(item => {
                document.getElementById('renderMusic').innerHTML += `
                    <div class="col-md-3 browse-grid">
                        <a><img src="${host}/imageDATA/${item.artworkImage}" onclick="listenNow('${item._id}')" title="${item.name}"></a>
                        <a onclick="listenNow('${item._id}')" class="sing" style="cursor: pointer">${item.name}</a>
                        <div class="playingGIFWrapper" id="${item._id}" onclick="handlePauseResume()">
                        </div>
                        <div class="iconFavWrapper">
                            <i class="fas fa-heart"></i>
                        </div>
                    </div>
                `
            })
        }
    })
    .catch();


   
// Click to play -->
console.log('List',listTrack)
let check = false;
let id_play = '';
function listenNow(id) {
    console.log("clicked", id)
    isPlay(id);
    check = true;
    id_play = id;
    let playAudio = document.getElementById('audio-player');
    let baihat = listTrack.find(item => item._id == id);
    playAudio.src = `${host}/musicData/${baihat.fileName}`;
    playAudio.load();
    playAudio.play();
}
function handlePauseResume() {
    let player = document.getElementById("audio-player");
    if (check) {
        player.pause();
        check = false;
    }
    else {
        player.play();
        check = true;
    }
}
//Check isPause
function buttonPre() {
    if (check != false) {
        listTrack.map((item, index) => {
            if (item._id === id_play) {
                let baihat;
                if (index === 0) {
                    let playAudio = document.getElementById('audio-player');
                    baihat = listTrack[listTrack.length - 1];
                    playAudio.src = `${host}/musicData/${baihat.fileName}`;
                    playAudio.load();
                    setTimeout(function () {
                        playAudio.play();
                    }, 1);
                    console.log(baihat);
                }
                else {
                    let playAudio = document.getElementById('audio-player');
                    baihat = listTrack[index - 1];
                    playAudio.src = `${host}/musicData/${baihat.fileName}`;
                    playAudio.load();
                    playAudio.play();
                }
                isPlay(baihat._id)
                id_play = baihat._id;
            }
        });
    }
}
function buttonNext() {
    if (check != false) {
        let currentIndex = listTrack.findIndex(item => item._id === id_play);
        if (currentIndex === listTrack.length - 1) {
            let playAudio = document.getElementById('audio-player');
            baihat = listTrack[0];
            playAudio.src = `${host}/musicData/${baihat.fileName}`;
            playAudio.load();
            setTimeout(function () {
                playAudio.play();
            }, 1000);
        }
        else {
            let playAudio = document.getElementById('audio-player');
            baihat = listTrack[currentIndex + 1];
            playAudio.src = `${host}/musicData/${baihat.fileName}`;
            playAudio.load();
            playAudio.play();
        }
        isPlay(baihat._id);
        id_play = baihat._id;
    }
}
function isPlay(id) {
    if (id == null) return;
    for (let i = 0; i < listTrack.length; i++) {
        if (listTrack[i]._id == id) {
            let playingGIFBlock = document.getElementById(id);
            playingGIFBlock.innerHTML = `
                                    <div class="playingOverlay">
                                        <img src="https://i.gifer.com/YdBO.gif" alt="this slowpoke moves"/>                            
                                    </div>
										`
        }
        else {
            let playingGIFBlock = document.getElementById(listTrack[i]._id);
            playingGIFBlock.innerHTML = ``;
        }
    }
}
function Pause() {
    for (let i = 0; i < listTrack.length; i++) {
        if (listTrack[i]._id == id_play) {
            let playingGIFBlock = document.getElementById(id_play);
            playingGIFBlock.innerHTML = `
                                    <div class="playingOverlay">
                                        <i class="far fa-pause-circle" style="position: absolute;"></i>
                                    </div>
										`
            console.log(playingGIFBlock)
        }
        else {
            let playingGIFBlock = document.getElementById(listTrack[i]._id);
            playingGIFBlock.innerHTML = ``;
        }
    }
}
function Play() {
    for (let i = 0; i < listTrack.length; i++) {
        if (listTrack[i]._id == id_play) {
            let playingGIFBlock = document.getElementById(id_play);
            playingGIFBlock.innerHTML = `
                                    <div class="playingOverlay">
                                        <img src="https://i.gifer.com/YdBO.gif" alt="this slowpoke moves"/>                            
                                    </div>
										`
            console.log(playingGIFBlock)
        }
        else {
            let playingGIFBlock = document.getElementById(listTrack[i]._id);
            playingGIFBlock.innerHTML = ``;
        }
    }
}