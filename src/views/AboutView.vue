<template>
  <div class="about">
    <TituloPagina msg="Sistema de registro de filmes para cinema desenvolvido por Victor Pereira" />
  </div>
  <p>Aplicação simula consumo de API. Para começar garanta que você tenha o JSON Server instalado na sua máquina. Para instalar, use:</p>
  <code>npm install -g json-server</code>
  <p>Rode o comando para o servidor ser iniciado:</p>
    <code>json-server --watch db.json</code>
</template>

<script>
  import TituloPagina from '@/components/TituloPagina.vue';
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  
  export default {
    name: 'AboutView',
    components: {
      TituloPagina
  }
  }
  </script>
