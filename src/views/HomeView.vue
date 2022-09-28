<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TituloPagina msg="Acervo Cinematográfico"/>
    <FormularioFilme />
    <div v-if="$store.getters.filmes.length == 0">
      <p>Aplicação simula consumo de API. Para começar garanta que você tenha o JSON Server instalado na sua máquina. Para instalar, use:</p>
  <code>npm install -g json-server</code>
  <p>Rode o comando para o servidor ser iniciado:</p>
    <code>json-server --watch db.json</code>
    </div>
    <ListaFilmes />
  </div>
</template>

<script>
import TituloPagina from '@/components/TituloPagina.vue';
import FormularioFilme from '@/components/FormularioFilme.vue';
import ListaFilmes from '@/components/ListaFilmes';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    TituloPagina,
    FormularioFilme,
    ListaFilmes
}   
,
  created(){
    this.$store.dispatch('getFilmes');
  }
}
</script>

<style scoped>

</style>
