<template>
<div class="container">
  <h1 class="text-center">Paises api</h1>
  <Continentes/>
  <Buscador/>
  <CardList/>
</div>

</template>

<script>
import CardList from './components/CardList'
import Continentes from './components/Continentes'
import Buscador from './components/Buscador'

export default {
  name: 'App',
  components: {
    CardList,
    Continentes,
    Buscador
  }
}
</script>

