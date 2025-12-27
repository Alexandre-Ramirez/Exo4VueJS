<script setup>
import { ref, onMounted, computed } from 'vue'

const weather = ref(null)
const apiKey = 'c05bd6475943c2df4ede9dd43fb84018' 

// URL spécifique pour Ste-Croix [cite: 30]
const url = `https://api.openweathermap.org/data/2.5/weather?q=Sainte-Croix&appid=${apiKey}&units=metric&lang=fr`

// Logique pour l'icône [cite: 35-38]
const weatherIcon = computed(() => {
  if (!weather.value) return null
  return `https://openweathermap.org/img/wn/${weather.value.weather[0].icon}@2x.png`
})

onMounted(async () => {
  try {
    const response = await fetch(url)
    weather.value = await response.json()
  } catch (error) {
    console.error("Erreur API:", error)
  }
})
</script>

<template>
  <div class="weather-page">
    <h1>Météo de Ste-Croix</h1> <div v-if="weather">
      <img :src="weatherIcon" alt="Icône météo" v-if="weatherIcon" />
      
      <p>Température actuelle: {{ weather.main.temp }}°C</p>
      <p>Température minimum: {{ weather.main.temp_min }}°C</p>
      <p>Température maximum: {{ weather.main.temp_max }}°C</p>
    </div>
    <div v-else>
      Chargement...
    </div>
  </div>
</template>