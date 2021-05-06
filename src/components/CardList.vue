<template>
  <div class="row">
      <div class="col-12" v-for="item in paises" :key="item.name">
          <Card :pais="item"/>
      </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import {useStore} from 'vuex';
import Card from './Card'
export default {
    components: {
        Card
    },
    setup(){
        const store = useStore();
        const paises = computed(() => {
            return store.getters.topPaisesPoblacion
        })
        onMounted(async () => {
            await store.dispatch('getPaises');
        })
        return {paises};
    }
}
</script>

<style>

</style>