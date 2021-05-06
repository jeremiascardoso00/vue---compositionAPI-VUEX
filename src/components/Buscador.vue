<template>
  <input type="text"
    placeholder="Ingrese pais"
    class="form-control my-3"
    v-model="texto"
    @keyup="procesarInput"
  >
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex';
export default {
  setup(){
    const texto = ref('');
    const store = useStore();

    const procesarInput = () =>{
      store.dispatch('filtroNombre', texto.value);
    };

    return {texto, procesarInput};
  }
}
</script>