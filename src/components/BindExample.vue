<template>
	<h1 :style="{ backgroundColor: '#6096BA', color: c }">Lorem ipsum dolor sit amet consectetur.</h1>
	<button @click="changeColor">changeColor</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let c = ref("#A3CEF1");
const changeColor = () => {
	c.value = "#274C77";
};
</script>

<style scope></style>
