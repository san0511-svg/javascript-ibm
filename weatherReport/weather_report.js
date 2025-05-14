const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // ✅ Reemplaza por tu clave real

// Mostrar el clima
function renderWeather(data) {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `
    <h2>Clima en ${data.name}</h2>
    <p>Temperatura: ${data.main.temp} &#8451;</p>
    <p>Condición: ${data.weather[0].description}</p>
  `;
}

// Mostrar errores
function renderError(message) {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<p style="color: red;">${message}</p>`;
}

// Clima por ciudad
function showWeatherByCity(event) {
  event.preventDefault();
  const city = document.getElementById('city').value.trim();
  if (!city) {
    renderError('Por favor ingresa una ciudad válida');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Ciudad no encontrada');
      return response.json();
    })
    .then(renderWeather)
    .catch(error => renderError(`Error: ${error.message}`));
}

// Clima por coordenadas
function showWeatherByCoords(event) {
  event.preventDefault();
  const lat = document.getElementById('lat').value.trim();
  const lon = document.getElementById('lon').value.trim();
  if (!lat || !lon) {
    renderError('Por favor ingresa latitud y longitud');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Coordenadas no válidas');
      return response.json();
    })
    .then(renderWeather)
    .catch(error => renderError(`Error: ${error.message}`));
}

// Listeners
document.getElementById('weatherForm').addEventListener('submit', showWeatherByCity);
document.getElementById('coordsForm').addEventListener('submit', showWeatherByCoords);
