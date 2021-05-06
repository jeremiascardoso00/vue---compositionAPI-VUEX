<template>
  <div class="text-center">
      <h3 >Filtrar por continentes</h3>
      <div class="btn-group mb-3">
          <button @click="filtro('Americas')" class="bt btn-dark">
              AM
          </button>
           <button @click="filtro('Europe')" class="bt btn-dark">
              EU
          </button>
           <button @click="filtro('Asia')" class="bt btn-dark">
              AS
          </button>
           <button @click="filtro('Oceania')" class="bt btn-dark">
              OC
          </button>
           <button @click="filtro('Africa')" class="bt btn-dark">
              AF
          </button>
           <button @click="filtro('')" class="bt btn-dark">
              ALL
          </button>
      </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore();

        const filtro = (region) => {
            store.dispatch('filtrarRegion', region);
        }
        return {filtro}
    }
}
</script>
