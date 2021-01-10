axios.get(`${host}/music/artist`)
    .then(res => {
        let i = 0;
        res.data.map((item) => {
            if (item.name == artist) {
                item.albums.map(item2 => {
                    item2.tracks.map((item3) => {
                        document.getElementById('listTrackArtist').innerHTML += `
                                <tr>
                                    <td>${i + 1}</td>
                                    <td>
                                        <img src="${host}/imageDATA/${item3.artworkImage}" alt="${item3.name}" />
                                    </td>
                                    <td>${item3.name}</td>
                                    <td>
                                        <audio controls>
                                            <source src="${host}/musicData/${item3.fileName}" type="audio/mpeg">
                                        </audio>
                                    </td>
                                </tr>
                            `;
                        i++;
                    })
                })
            }

        })

    })
    .catch(err => {
        console.log("Error Render Track", err);
    })