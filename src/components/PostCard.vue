<template>
	<div class="post-card">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim obcaecati id provident ipsum accusantium
			eligendi iure cum cupiditate nesciunt numquam laboriosam, vero aliquid cumque est dolorem inventore quia ad
			voluptates porro aut sunt corporis! Ea, sunt. Minima incidunt in illum sit soluta numquam ab, placeat porro,
			suscipit illo sequi.
		</p>
		<CardButton />
	</div>
</template>

<script lang="ts" >
import CardButton from "./CardButton.vue";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
	name: 'PostCard',
	props
})
</script>

<style scoped>
.post-card {
	border-radius: 15px;
	border: 1px solid #ccc;
	margin: 10px;
	padding: 10px;
}
</style>
