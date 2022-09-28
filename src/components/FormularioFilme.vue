<template>
  <form @submit="addFilme">
      <label for="titulo-input">Título: </label>
      <input type="text" id="titulo-input" placeholder="Ex.: Homem-Aranha" v-model="titulo" required>
      <br>
      <label for="descricao-input">Descrição: </label>
      <textarea id="descricao-input" placeholder="Ex.: Homem é picado por aranha e assassina pai do melhor amigo." cols="40" rows="5" v-model="descricao" required/>
      <br>
      <label for="genero-input">Gênero: </label>
      <select id="genero-input" v-model="genero" required>
        <option value="">Selecione um gênero</option>
        <option value="Ação/Aventura">Ação/Aventura</option>
        <option value="Drama">Drama</option>
        <option value="Comédia">Comédia</option>
        <option value="Romance">Romance</option>
        <option value="Terror">Terror</option>
      </select>
      <br>
      <label for="data-input">Dia de lançamento: </label>
      <input type="date" v-model="lancamento" required>
      <br>
      <input type="submit" value="Cadastrar">
    </form>
    <br>
</template>

<script>
export default {
    name: 'FormularioFilme',
    data() {
      return{
        titulo: "",
        descricao: "",
        genero: "",
        lancamento: ""
      }
    },
    methods: {
      addFilme(){
        this.$store.dispatch('addFilme', {
          titulo: this.titulo,
          descricao: this.descricao,
          genero: this.genero,
          lancamento: this.lancamento
        }).finally(() => {
          this.titulo = ''
          this.descricao = ''
          this.genero = ''
          this.lancamento = ''
        })
      }
    }
}
</script>

<style>

</style>