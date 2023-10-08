<template lang="">
	<div>
		<ul>
			<li v-for="country in countries" :key="country.code">{{ country.name }}</li>
		</ul>
	</div>
</template>
<script lang="ts" setup>
import { Ref, ref } from "vue";

interface ICountries {
	code: string;
	name: string;
}

let countries: Ref<Array<ICountries>> = ref([
	{ code: "es", name: "Spain" },
	{ code: "fr", name: "France" },
	{ code: "it", name: "Italy" },
	{ code: "pt", name: "Portugal" },
]);
</script>
<style lang=""></style>
