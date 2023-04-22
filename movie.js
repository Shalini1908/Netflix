
function slideshow() {

  let arr = ["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6530/1326530-h-f2a7e4e4e3d6", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9969/1309969-h-bb7b2b5ce796", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4621/1114621-h-9781e2d5b694", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5603/1145603-h-3038c1e973f7", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2068/1062068-h-54b155e41999", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2937/1092937-h-c5a68e3db9f9", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4168/234168-h", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1664/581664-h", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h"]

  let i = 0;

  let div = document.getElementById("container");

  let img = document.createElement("img");

  img.src = arr[0];

  div.append(img);
  i = i + 1;

  setInterval(function () {

    if (i === 9) {

      i = 0;

    }

    img.src = arr[i];

    i = i + 1;
    div.append(img);


  }, 3000)


}

slideshow();


let movies = [

  {
    name: "Cuttputlli",
    rating: 8.9,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6530/1326530-h-f2a7e4e4e3d6"


  },

  {
    name: "GoodLuck Jerry",
    rating: 8.4,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9969/1309969-h-bb7b2b5ce796"


  },


  {
    name: "A Thursday",
    rating: 8.2,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4621/1114621-h-9781e2d5b694"


  },

  {
    name: "83",
    rating: 9.5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5603/1145603-h-3038c1e973f7"


  },

  {
    name: "Shiddat",
    rating: 7.6,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2068/1062068-h-54b155e41999"


  },

  {
    name: "Atrangi Re",
    rating: 8.9,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2937/1092937-h-c5a68e3db9f9"


  },


  {
    name: "Stree",
    rating: 7.0,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4168/234168-h"


  },

  {
    name: "The Past",
    rating: 7.6,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1664/581664-h"


  },


  {
    name: "M.S.Dhoni",
    rating: 10,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h"


  },

]



localStorage.setItem("movies", JSON.stringify(movies));

let data = JSON.parse(localStorage.getItem("movies"));

function movieAppend(data) {

  let box = document.getElementById("buffer");

  box.innerHTML = null;

  data.forEach(function (el) {

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.id = "poster";
    img.src = el.img;


    let p_name = document.createElement("p");
    p_name.innerHTML = `Name : ${el.name}`;
    p_name.style.color = "white"

    let r_name = document.createElement("p");
    r_name.innerHTML = `Rating : ${el.rating}`;
    r_name.style.color = "white"

    div.append(img, p_name, r_name);
    box.append(div)


  });

}

// movieAppend(movies);


let getmeData = new Promise(function (resolve, reject) {

  setTimeout(function () {

    let data = movies;

    if (data != null) {

      resolve(movies);

    } else {


      reject(`Err Server could not get you data /:`)
    }

  }, 2000)


});

// console.log(getmeData)



async function main() {

  try {

    let response = await getmeData
    movieAppend(response)
  }

  catch (error) {
    console.log(error)

  }


}

main();


function sortLH() {


  let data = JSON.parse(localStorage.getItem("movies"));

  let sort = data.sort((a, b) => a.rating - b.rating)

  movieAppend(sort);



}


function sortHL() {


  let data = JSON.parse(localStorage.getItem("movies"));

  let sort = data.sort((a, b) => b.rating - a.rating)

  movieAppend(sort);



}
