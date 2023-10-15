<template>
	<div>
		<h1>Lista de Posts</h1>
		<ul>
			<li v-for="post in posts" :key="post.id">{{ post.title }}</li>
		</ul>
	</div>
</template>

<script lang="ts">
/* import { onMounted } from "vue";
import PostService from "@/components/servicesExample/Services/PostService";

const service = new PostService();
const posts = service.getPosts();

onMounted(async () => {
	alert("mounted");
	await service.fetchAll();
	console.log(posts);
}); */

import { defineComponent } from "vue";
import PostService from "@/components/servicesExample/Services/PostService";

export default defineComponent({
	name: "PostIndex",
	data() {
		const service = new PostService();
		const posts = service.getPosts();

		return { posts, service };
	},
	async mounted() {
		alert("mounted");
		await this.service.fetchAll();
	},
});
/* option
 */

/* composition api
import { defineComponent, onMounted } from "vue";
import PostService from "@/components/servicesExample/Services/PostService";
export default defineComponent({
	name: "PostIndex",
	setup() {
		const service = new PostService();
		const posts = service.getPosts();

		onMounted(async () => {
			await service.fetchAll();
		});

		return { posts };
	},
}); */
</script>

<style scoped></style>
