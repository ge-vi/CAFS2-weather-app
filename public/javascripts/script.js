'use strict';

const htmlCitySearchBody = document.querySelector('#city-search-card .card-body');

function createLinkedListItem(parentElem, linkHref, linkText) {
  const divWrapper = document.createElement('div');
  divWrapper.classList.add('list-group', 'list-group-flush');

  const link = document.createElement('a');
  link.classList.add('list-group-item', 'list-group-item-action');
  link.href = `${linkHref}`;
  link.textContent = linkText;

  divWrapper.append(link);
  parentElem.append(divWrapper);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

document.getElementById('city-search')
  ?.addEventListener('keyup', (evt) => {

    let inputValue = evt.target.value;
    if (!inputValue) {
      return;
    }

    htmlCitySearchBody.classList.add('d-none');
    removeAllChildNodes(htmlCitySearchBody);

    fetch(`/api/v1/forecast/places/${inputValue}`)
      .then(response => response.json())
      .then(cities => {
        if (cities.length >= 1) {
          htmlCitySearchBody.classList.remove('d-none');
        }
        cities.forEach(city => {
          createLinkedListItem(htmlCitySearchBody, `/cities/${city.code}`, city.name);
        });
      })
      .catch(error => {
        console.error(error);
      });
  });
