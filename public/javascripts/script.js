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

document.getElementById('city-search')
  .addEventListener('keyup', function(evt) {

    let inputValue = this.value;

    fetch(`/api/v1/forecast/places/find/${inputValue}`)
      .then(response => response.json())
      .then(cities => {
        htmlCitySearchBody.classList.remove('d-none');
        cities.forEach(city => {
          createLinkedListItem(htmlCitySearchBody, `/cities/${city.code}`, city.name);
        });
      })
      .catch(err => console.error(err));
  });
