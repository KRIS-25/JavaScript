'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

/*

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);
    let data;

    if (country === 'india') {
      [, data] = JSON.parse(this.responseText);
      console.log(data);
    } else {
      [data] = JSON.parse(this.responseText);
    }

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('india');
getCountryData('portugal');


*/

/*

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    let data;

    if (country === 'india') {
      [, data] = JSON.parse(this.responseText);
      console.log(data);
    } else {
      [data] = JSON.parse(this.responseText);
    }

    // Render Country 1
    renderCountry(data);

    // Get neightbour country (2)
    const neighbour = data.borders?.[3]; // destructuring was also possible

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('india');

// Example of callback hell

setTimeout(() => {
  console.log(`1 second passed`);
  setTimeout(() => {
    console.log(`2 second passed`);
    setTimeout(() => {
      console.log(`3 second passed`);
      setTimeout(() => {
        console.log(`4 second passed`);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


*/

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[1]);
//     });
// };

const getJSON = function (url, errorMsg = 'something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1;
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[1]);

//       const neighbour = data[1].borders[3];
//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, 'neighbour'))
//     .catch((err) => {
//       console.warn(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

/*

const getCountryData = function (country) {
  // Country 1;

  getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
    .then((data) => {
      renderCountry(data[1]);

      const neighbour = data[1].borders[3];
      if (!neighbour) {
        throw new Error('No neighbour found!');
      }

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then((data) => renderCountry(data, 'neighbour'))
    .catch((err) => {
      console.warn(`${err}`);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('india');
});

*/

/*

console.log('Test start');
setTimeout(() => console.log(`0 sec timer`), 0);
Promise.resolve('Resolved promise 1').then((res) => console.log(res));

Promise.resolve('Resolved promise 2').then((res) => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});

console.log('Test end');

*/
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`lottery draw is happening`);
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN !!');
    } else {
      reject(new Error('You lost your money ! :('));
    }
  }, 1000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.warn(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log(`2 second passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`3 second passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`4 second passed`);
  });

//   // Example of callback hell

// setTimeout(() => {
//   console.log(`1 second passed`);
//   setTimeout(() => {
//     console.log(`2 second passed`);
//     setTimeout(() => {
//       console.log(`3 second passed`);
//       setTimeout(() => {
//         console.log(`4 second passed`);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then((res) => console.log(res));
Promise.reject(new Error('abc')).catch((err) => console.warn(err));

*/

/*

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then((res) => console.log(res));

const whereAmI = function () {
  getPosition()
    .then((res) => {
      const { latitude: lat, longitude: lng } = res.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then((res) => {
      if (!res.ok) {
        throw new Error(`Problem with geolocation ${res.status}`);
      }
      return res.json();
    })

    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Country not found ${res.status}`);
      }

      return res.json();
    })
    .then((data) => renderCountry(data[1]))
    .catch((err) => console.warn(`${err.message}`))
    .finally(() => (countriesContainer.style.opacity = 1));
};

whereAmI();

*/

/*

// Country data
// fetch(`https://restcountries.com/v2/name/${country}`).then((res) =>
//   console.log(res)
// );

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // Geolocation
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

    if (!resGeo) throw new Error('Prom getting location data');

    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    renderCountry(data[1]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.log(`${err} OUR ERR`);
    renderError(`${err.message}`);

    // Reject promise returned from async function

    throw err;
  }
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then((city) => console.log(city))
//   .catch((err) => console.log(`My err : 2, ${err.message}`))
//   .finally(() => console.log(`3: Finished getting location`));

(async function () {
  try {
    const location = await whereAmI();
    console.log(`2: ${location}`);
  } catch (err) {
    console.log(`2: ${err.message}`);
  }
  console.log('3: Finished gettng Location');
})();

*/
/*

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);

    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);

    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.log(err);
  }
};


get3Countries('india', 'usa', 'france');

*/

/*

// Promise.race

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/india`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);

//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v2/name/india`), timeout(0.5)])
//   .then((res) => console.log(res[0]))
//   .catch((err) => console.log(err));

// // Promise.allSettled

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ]).then((res) => console.log(res));

// // vs. Promise.all
// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.warn(err));

// Promise.any
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then((res) => console.log(res))
  .catch((err) => console.warn(err));

  */
