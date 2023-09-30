const urlDefault = 'https://api.unsplash.com/search/photos?per_page=15&client_id=20YMWruSfryYAX6ydVUA7oHD71nN4Zu4J2sSnp-afwI&query=cats';
const urlForSearch = 'https://api.unsplash.com/search/photos?per_page=15&client_id=20YMWruSfryYAX6ydVUA7oHD71nN4Zu4J2sSnp-afwI&query=';
const main = document.querySelector('.main')
const mainImg = document.querySelector('.main-img');
const alertBlock = document.querySelector('.alert-block')
const form = document.querySelector('.form');
const search = document.querySelector('.search');
const btnSearch = document.querySelector('.btn-search');
const wrapper = document.querySelector('.wrapper')
const textAlert = document.querySelector('.text-alert')

// get data from API
async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  const isEmpty = data.results.length;
  showData(data);
  hasInvalidSearch(isEmpty);
}


// show data on page
function showData(data) {
  mainImg.innerHTML = '';
  alertBlock.innerHTML = '';
  alertBlock.classList.remove('height100');
  data.results.forEach((e) => {
    const blockImg = document.createElement('div');
    const img = document.createElement('img');
    const btnDownload = document.createElement('button');
    const link = document.createElement('a');
    const iconDownload = document.createElement('img')
    blockImg.classList.add('block-img');
    img.classList.add('img');
    mainImg.append(blockImg);
    blockImg.append(img);
    img.setAttribute('alt', 'cats');
    img.src = e.urls.regular;
    link.href = e.links.download;
    link.setAttribute('target', '_blank')
    iconDownload.src = './assets/img/download-icon.svg';
    iconDownload.classList.add('icon-download')
    btnDownload.classList.add('btn-download')
    img.addEventListener('mouseover', () => {
      setTimeout( () => {
      blockImg.append(btnDownload);
      btnDownload.append(link);
      link.append(iconDownload);
      img.classList.add('blur')
      }, 600) 
    })
    img.addEventListener('mouseout', () => {
      setTimeout( () => {
        btnDownload.remove();
        img.classList.remove('blur')

        }, 1300)
    })

  })
}


// submit query
function submitQuery(e) {
  e.preventDefault();
  const queryUrl = `${urlForSearch}${search.value}`;
  if (search.value) {
    getData(queryUrl);
  }
}

form.addEventListener('submit', submitQuery);
btnSearch.addEventListener('click', submitQuery);


// checking for invalid value
function hasInvalidSearch(isEmpty) {
  if (isEmpty === 0) {
    alertBlock.classList.add('height100');
    alertBlock.innerHTML = '<p class="text-alert change">Nothing was found for the query' + ' "' + search.value + '".' + 'Try again...</p>';
  }
}
getData(urlDefault);
