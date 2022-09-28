<template>
  <br/>
  <div id="card">
    <br/>
    <p>Título: {{filme.titulo}}</p>
    <p>Descrição: {{filme.descricao}}</p>
    <p>Gênero: {{filme.genero}}</p>
    <p>Lançamento (yyyy/mm/dd): {{filme.lancamento}}</p>
    <br/>
  </div>
</template>

<script>
export default {
    name: "FilmeItem",
    props: {
      filme: {
        type: Object,
        default: () => ({})
      }
    }
}
</script>

<style scoped>
  #card{
    background-color: rgba(137, 43, 226, 0.425);
  }
  
</style>