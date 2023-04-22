
let id;

function slideshow() {

    let arr = ["https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-09-09/Desk_BrahmastraNSBookTickets-d3ff4d4d-9d6a-4b9e-b54f-ac2ee3255e45.jpg", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/24/1280024-h-aa8dc3cc21b6", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9410/1329410-h-5dfdad21713e", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5118/1335118-h-4090b55dff72", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9965/1309965-h-5d2c9c58df8c"]

    let i = 0;

    let div = document.getElementById("container");

    let img = document.createElement("img");

    img.src = arr[0];

    div.append(img);
    i = i + 1;

    setInterval(function () {

        if (i === 4) {

            i = 0;

        }

        img.src = arr[i];

        i = i + 1;
        div.append(img);


    }, 4000)


}

slideshow();





async function searchMovies() {


    let query = document.getElementById('query').value

    console.log(query)

    let res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=cc52f6c3`)

    let data = await res.json();

    console.log(data.Search);

    movieAppend(data.Search)

}

function constructor(title, poster, year) {

    this.title = title;
    this.poster = poster;
    this.year = year;


}

let arr = JSON.parse(localStorage.getItem("details")) || [];


// searchMovies()

function movieAppend(data) {

    let data_div = document.getElementById('movies')

    data_div.innerHTML = null;


    data.forEach(function (el) {

        let div = document.createElement('div');

        let name = document.createElement('p');
        name.innerHTML = `Name:${el.Title}`;


        let year = document.createElement('p');
        year.innerHTML = `Year:${el.Year}`;

        let img = document.createElement('img');
        img.id = 'Poster';
        img.src = el.Poster;


        div.append(img, name, year)
        data_div.append(div)

    });
}

// movieAppend(data)


async function search() {

    try {

        let query = document.getElementById("query").value;

        let res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=cc52f6c3`)

        let data = await res.json();

        let actual_data = data.Search
        movieAppend(actual_data);
    }
    catch (err) {
        console.log(err)
    }
}


function debouncing(func, delay) {
    if (id) {
        clearTimeout(id)
    }
    id = setTimeout(function () {
        func();

    }, delay);

}