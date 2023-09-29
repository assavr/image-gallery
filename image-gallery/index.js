const url = 'https://api.unsplash.com/search/photos?per_page=30&client_id=20YMWruSfryYAX6ydVUA7oHD71nN4Zu4J2sSnp-afwI&query=cats';
let urlForSearch = 'https://api.unsplash.com/search/photos?per_page=30&client_id=20YMWruSfryYAX6ydVUA7oHD71nN4Zu4J2sSnp-afwI&query=';
const main = document.querySelector('.main');

const form = document.querySelector('form')
const search = document.querySelector('.search')

const btnSearch = document.querySelector('.btn-search');
const btnClean = document.querySelector('.btn-clean')

// const btnSearch = document.querySelector()


form.addEventListener('submit', submitQuery);
btnSearch.addEventListener('click', submitQuery);
btnClean.addEventListener('click', () => {
  search.value.innerHTML = '';
})


function submitQuery(e) {
  e.preventDefault();
  const queryUrl = `${urlForSearch}${search.value}`;
  if (search.value) {
    getData(queryUrl)
}
}

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}


function showData(data) {
  main.innerHTML = '';
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

getData(url);