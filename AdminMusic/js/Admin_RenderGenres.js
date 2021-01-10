let Genres = ["pop", "indie", "rock", "chill", "rap"];
Genres.map((item, index) => {
    document.getElementById("listGenreAdmin").innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>${item.toUpperCase()}</td>
        <td>
            <a class="btn btn-warning" type="button" href="./admin_updatecategory.html"
                onclick="editGenre('${item}')">Chỉnh sửa</a>
            <a class="btn btn-danger" onclick="getTrackGenre('${item}')">Xem</a>
        </td>
    </tr>
    `
})
function getTrackGenre(genre) {
    localStorage.setItem("genre_admin", genre);
    window.location = `TrackGenre.html?Genre=${genre}`;
}
