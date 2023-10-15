<template>
	<div>
		<h3>{{ counter }}</h3>
		<button @click="increment">Incrementar</button>
	</div>
</template>
<script lang="ts" setup>
//Con composition todos los valores reactivos se deben definir como tipo ref.
//definiendo setup en el escript nos ahorramos exportar el componente ya que lo hara automatico
import { ref, Ref } from "vue";

let counter: Ref = ref(0);
const increment = (): void => {
	counter.value++;
};
</script>
<style lang=""></style>
