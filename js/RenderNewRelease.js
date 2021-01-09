var listTrack = [];
var newTrack = [];

axios.get(`${host}/music/track`)
    .then(res => {
        listTrack = res.data;
        newTrack = res.data.sort((item1, item2) => {
            if (item1.createdate > item2.createdate) return -1;
            else if (item1.createdate < item2.createdate) return 1;
            else return 0;
        });

        let i = 0;
        newTrack.map(item => {
            if (i > 3) {
                return;
            }
            document.getElementById('newRelease').innerHTML +=
                `
                    <div class="col-md-3 content-grid last-grid">
                        <a onclick="listenNow('${item._id}')" class="play-icon"><img src="${host}/imageDATA/${item.artworkImage}" title="${item.name}"></a>
                        <a class="button play-icon" onclick="listenNow('${item._id}')" style="text-decoration: none">${item.name}</a>
                        <div class="playingGIFWrapper" id="${item._id}" onclick="handlePauseResume()">
						</div>
                        <div class="iconFavWrapper">
                            <i class="fas fa-heart"></i>
                        </div>
                    </div>
                `;
            i++;
        })
        
    })
    .catch(err => {
        console.log("Error Render New Track", err);
    });

    let check = false;
    let id_play = '';  
    function listenNow(id) {
        console.log("clicked", id)
        //isPlay(id);
        check = true;
        id_play = id;
        let playAudio = document.getElementById('audio-player');
        let baihat = newTrack.find(item => item._id == id);
        playAudio.src = `${host}/musicData/${baihat.fileName}`;
        playAudio.load();
        playAudio.play();
    }
        //Handle Click pause and resume
    function handlePauseResume() { 
        let player = document.getElementById("audio-player");
        if(check)
        {
            player.pause();
            check = false;
        }
        else {
            player.play();
            check = true;
        }
    }
    function buttonPre() {
        if (check != false) {
            console.log(newTrack);
            newTrack.map((item, index) => {
                if (item._id === id_play) {
                    let baihat;
                    if (index === 0) {
                        let playAudio = document.getElementById('audio-player');
                        baihat = newTrack[newTrack.length - 1];
                        playAudio.src = `${host}/musicData/${baihat.fileName}`;
                        playAudio.load();
                        setTimeout(function () {
                            playAudio.play();
                        }, 1);
                        console.log(baihat);
                    }
                    else {
                        let playAudio = document.getElementById('audio-player');
                        baihat = newTrack[index - 1];
                        playAudio.src = `${host}/musicData/${baihat.fileName}`;
                        playAudio.load();
                        playAudio.play();
                        console.log(baihat);
                    }
                    id_play = baihat._id;
                }
            });
        }
    }
    function buttonNext() {
        if (check != false) {
            let currentIndex = newTrack.findIndex(item => item._id === id_play);
            if (currentIndex === newTrack.length - 1) {
                let playAudio = document.getElementById('audio-player');
                baihat = newTrack[0];
                playAudio.src = `${host}/musicData/${baihat.fileName}`;
                playAudio.load();
                setTimeout(function () {
                    playAudio.play();
                }, 1000);
            }
            else {
                let playAudio = document.getElementById('audio-player');
                baihat = newTrack[currentIndex + 1];
                playAudio.src = `${host}/musicData/${baihat.fileName}`;
                playAudio.load();
                playAudio.play();
                console.log(baihat);
            }
            id_play = baihat._id;
        }
    }


    function isPlay(id) {
        console.log('isplay id',id,newTrack[1]._id);
        if (id == null) return;
        for (let i = 0; i < newTrack.length; i++) {
            if (newTrack[i]._id == id) {
                let playingGIFBlock = document.getElementById(id);
                console.log(playingGIFBlock)
                playingGIFBlock.innerHTML = `
                                        <div class="playingOverlay homepage">
                                            <img src="https://i.gifer.com/YdBO.gif" alt="this slowpoke moves"/>                            
                                        </div>
                                            `
            }
            else {
                let playingGIFBlock = document.getElementById(newTrack[i]._id);
                playingGIFBlock.innerHTML = ``;
            }
        }
    }
    function Pause() {
        for (let i = 0; i < newTrack.length; i++) {
            if (newTrack[i]._id == id_play) {
                let playingGIFBlock = document.getElementById(id_play);
                playingGIFBlock.innerHTML = `
                                        <div class="playingOverlay homepage">
                                            <i class="far fa-pause-circle" style="position: absolute;"></i>
                                        </div>
                                            `
                console.log(playingGIFBlock)
            }
            else {
                let playingGIFBlock = document.getElementById(newTrack[i]._id);
                playingGIFBlock.innerHTML = ``;
            }
        }
    }
    function Play() {
        for (let i = 0; i < newTrack.length; i++) {
            if (newTrack[i]._id == id_play) {
                let playingGIFBlock = document.getElementById(id_play);
                playingGIFBlock.innerHTML = `
                                        <div class="playingOverlay homepage">
                                            <img src="https://i.gifer.com/YdBO.gif" alt="this slowpoke moves"/>                            
                                        </div>
                                            `
                console.log(playingGIFBlock)
            }
            else {
                let playingGIFBlock = document.getElementById(newTrack[i]._id);
                playingGIFBlock.innerHTML = ``;
            }
        }
    }
    