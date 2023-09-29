let url = 'https://api.unsplash.com/search/photos?per_page=30&client_id=20YMWruSfryYAX6ydVUA7oHD71nN4Zu4J2sSnp-afwI&query=cats';

const main = document.querySelector('.main');




async function getData() {
  const res = await fetch(url);
  const data = await res.json();

  showData(data);
}


function showData(data) {


  data.results.forEach((e) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    div.classList.add('block-img')
    img.classList.add('img')
    main.append(div);
    div.append(img);
    img.src = e.urls.regular
  })

  //   const obj = data.results;
  //  arr = obj.map((e) => {
  //     let idk =`${e.urls.regular}`;
  //     console.log(idk);
  //     img.src =`${idk}`
  // img.alt = `requested picture`;
  // div.classList.add('block-img');
  // img.classList.add('img')
  // 

  // })




}

getData();