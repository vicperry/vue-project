<template>
  <h1>
    {{msg}}
  </h1>
</template>

<script>
export default {
    name: 'TituloPagina',
    props: {
        msg: String
    }
}
</script>

<style scoped>
    h1{
        font-size: larger;
        font-weight: bolder;
        color: darkorchid;
    }
</style>