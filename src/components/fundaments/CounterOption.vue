<template lang="">
	<div>
		<h3>{{ counter }}</h3>
		<button @click="increment">Incrementar</button>
	</div>
</template>
<script lang="ts">
//Con option todo lo que se encuentre dentro del objeto data es reactivo
import { defineComponent } from "vue";
export default defineComponent({
	name: "CounterOption",
	data() {
		let counter = 0;
		return { counter };
	},
	methods: {
		increment() {
			this.counter++;
		},
	},
	components: {},
});
</script>
<style lang=""></style>
