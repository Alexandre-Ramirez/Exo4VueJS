<template>
  <div class="about">
    <h1>A propos</h1>
    <p>Ce site permet de visualiser la météo actuelle</p> <div class="info">
      <p><strong>Aide :</strong> Selon la documentation disponible sur le site, il est possible de récupérer la météo d'une ville à l'aide de l'URL :</p>
      <code>https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr</code> </div>
  </div>
</template>

<style scoped>
.info {
  margin-top: 20px;
  padding: 15px;
  background-color: #f4f4f4;
  border-radius: 5px;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
code {
  word-break: break-all;
  color: #d63384;
}
</style>