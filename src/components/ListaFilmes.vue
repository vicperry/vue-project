<template>
  <FilmeItem
    v-for="filme in $store.getters.filmes"
    :key= "filme.id"
    :filme="filme"
    />
</template>

<script>
import FilmeItem from '@/components/FilmeItem.vue';

export default {
    name: 'ListaFilmes',
    components: {
      FilmeItem
    }
}
</script>

<style>

</style>