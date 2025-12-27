<script setup>
import { ref, computed } from 'vue'

const city = ref('')
const weather = ref(null)
const apiKey = 'c05bd6475943c2df4ede9dd43fb84018'

// Logique icône identique [cite: 35]
const weatherIcon = computed(() => {
  if (!weather.value) return null
  return `https://openweathermap.org/img/wn/${weather.value.weather[0].icon}@2x.png`
})

const searchWeather = async () => {
  if (!city.value) return
  // Utilisation de la variable city dans l'URL [cite: 30]
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric&lang=fr`
  
  try {
    const response = await fetch(url)
    if (response.ok) {
      weather.value = await response.json()
    } else {
      alert("Ville non trouvée")
    }
  } catch (error) {
    console.error("Erreur:", error)
  }
}
</script>

<template>
  <div>
    <h1>Météo d'une ville</h1> <div class="search-box">
      <label>Entrez une ville: </label>
      <input v-model="city" @keyup.enter="searchWeather" placeholder="Lausanne" />
      <button @click="searchWeather">Rechercher</button>
    </div>

    <div v-if="weather">
      <h2>{{ weather.name }}</h2> <img :src="weatherIcon" alt="Icône météo" v-if="weatherIcon" />
      
      <p>Température actuelle: {{ weather.main.temp }}°C</p>
      <p>Température minimum: {{ weather.main.temp_min }}°C</p>
      <p>Température maximum: {{ weather.main.temp_max }}°C</p>
    </div>
  </div>
</template>

<style scoped>
.search-box {
  margin: 20px 0;
}
input {
  padding: 5px;
  margin-right: 10px;
}
</style>