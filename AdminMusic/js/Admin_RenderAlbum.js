axios.get(`${host}/music/album`)
    .then(res => {
        res.data.map((item, index) => {
            document.getElementById('listAlbumAdmin').innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>
                        <img src="${host}/imageDATA/${item.image}" alt="${item.name}" />
                    </td>
                    <td>${item.name}</td>
                    <td>${item.artist.name}</td>
                    <td>${item.genres.toUpperCase()}</td>
                    <td>
                        <a class="btn btn-warning" href="./admin_updateproduct.html"
                            onclick="getIdProduct('${item.name}')">Chỉnh sửa</a>
                        <a class="btn btn-danger" onclick="getTrackAlbum('${item.name}')">Xem</a>
                    </td>
                </tr>
                `;
        })

    })
    .catch(err => {
        console.log("Error Render Track", err);
    })
function getTrackAlbum(album) {
    localStorage.setItem("album_admin", album);
    window.location = `TrackAlbum.html?Album=${album}`;
}