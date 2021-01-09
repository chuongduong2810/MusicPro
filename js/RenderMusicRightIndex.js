//Load music for Playlist
$(document).ready(function () {
    async function LoadMusic() {
        //Lưu list bài hát vào đây
        var listTrack = [];
        await axios.get(`${host}/music/track`)
            .then((res) => {
                let Tracks = res.data;
                Tracks.slice(0, 5).map(item => {
                    var Track = {
                        title: item.name,
                        artist: item.artist.name,
                        poster: host + '/' + 'imageDATA' + '/' + item.artworkImage,
                        mp3: host + '/musicData/' + item.fileName
                    };
                    listTrack.push(Track);
                })
            }
            );
        new jPlayerPlaylist({
            jPlayer: "#jquery_jplayer_1",
            cssSelectorAncestor: "#jp_container_1"
        },
            listTrack
            , {
                swfPath: "../../dist/jplayer",
                supplied: "mp3",
                useStateClassSkin: true,
                autoBlur: false,
                smoothPlayBar: true,
                keyEnabled: true,
                size: {
                    height: 240,
                    width: 240
                }
            });
    }
    LoadMusic();

});