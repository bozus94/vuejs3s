<template>
	<div>
		<h1 v-if="age >= 18">Eres mayor de edad</h1>
		<h1 v-else>Eres menor de edad</h1>

		<h2 v-show="age >= 18">puedes beber alcohol</h2>
	</div>
</template>
<script lang="ts" setup>
let age = 18;

/* defineComponent
import { defineComponent } from "vue";              
export default defineComponent({
	name: "ExampleSelective",
	setup() {
		let age = 17;
		return { age };
	},
}); */
</script>
<style scoped></style>
