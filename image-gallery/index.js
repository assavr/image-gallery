const urlDefault = 'https://api.unsplash.com/search/photos?per_page=30&client_id=20YMWruSfryYAX6ydVUA7oHD71nN4Zu4J2sSnp-afwI&query=cats';
const urlForSearch = 'https://api.unsplash.com/search/photos?per_page=30&client_id=20YMWruSfryYAX6ydVUA7oHD71nN4Zu4J2sSnp-afwI&query=';
const main = document.querySelector('.main')
const mainImg = document.querySelector('.main-img');
const alertBlock = document.querySelector('.alert-block')
const form = document.querySelector('.form');
const search = document.querySelector('.search');
const btnSearch = document.querySelector('.btn-search');
const wrapper = document.querySelector('.wrapper')

// get data from API
async function getData(url) {
  const res = await fetch(url);
    const data = await res.json();
    const isEmpty = data.results.length
    console.log(isEmpty)
  showData(data);
  hasErrorSearch(isEmpty);
}



// show data on page
function showData(data) {
  mainImg.innerHTML = '';
  alertBlock.innerHTML = '';
  alertBlock.classList.remove('height100');
  data.results.forEach((e) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    div.classList.add('block-img');
    img.classList.add('img');
    mainImg.append(div);
    div.append(img);
    img.src = e.urls.regular;
  })
 
}

// submit query
function submitQuery(e) {
  e.preventDefault();
  const queryUrl = `${urlForSearch}${search.value}`;
  if (search.value) {
    getData(queryUrl);
}
let searchValue = `${search.value}`;
return searchValue;
}

function hasErrorSearch(isEmpty) {
  if(isEmpty === 0) {
    alertBlock.classList.add('height100');
    alertBlock.innerHTML = '<p class="text-alert change">Nothing was found for the query "'+search.value+'". Try again... </p>';
  }
}

form.addEventListener('submit', submitQuery);
btnSearch.addEventListener('click', submitQuery);
getData(urlDefault);