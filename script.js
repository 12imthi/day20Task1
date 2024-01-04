// var res = fetch("https://emoji-api.com/emojis?access_key=4110533ed96d68c11962403f5cbae503bf9d4b8a");
// res.then((data)=> data.json())
// .then((data1) => {
//     for(var i in data1) {
//         console.log(data1);
//     }
// })

const demo = document.getElementById("demo");
var row = document.querySelector(".card-title");


const myPromise = new Promise((resolve, reject) => {
  //   let res = fetch("https://emoji-api.com/emojis?access_key=4110533ed96d68c11962403f5cbae503bf9d4b8a");

  resolve(fetch(" https://api.alquran.cloud/v1/edition"));
});
// myPromise.then((result) =>{
//     console.log(`result`, result);
// })
myPromise.then((result) => {
  console.log("result", result);

  result.json().then((data, data1) => {
    console.log(`data`, data);

    data1 = Object.entries(data);

    console.log(data1[2][1]);
    let items = data1[2][1];
    let engName = items.map((e) => e);
    console.log(engName);

    engName.forEach( e => {
        var div = document.createElement('div');
        // div.setAttribute('class','card')
        div.classList.add("card");
        div.style.width = '30%'
      
        let card = 
        `
        <div class="card-body">
          <h5 class="card-title">${e.englishName}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name : ${e.name}</li>
          <li class="list-group-item">identifier : ${e.identifier} </li>
          <li class="list-group-item">language : ${e.language} </li>
        </ul>
        `
          div.innerHTML  = card;

        demo.appendChild(div)
    })
 
  });
});
