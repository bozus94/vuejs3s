<template>
	<div>
		<h1>Vista del post: {{ post.title }}</h1>
		<p>{{ post.body }}</p>
	</div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import { useRoute } from "vue-router";
import IPost from "@/components/servicesExample/intefaces/Post";
import PostService from "@/components/servicesExample/Services/PostService";

let id = ref();
const postService = new PostService();
let post: Ref<IPost> = postService.getPost();

onMounted(() => {
	const route = useRoute();
	id.value = route.params.id;
	postService.fetchOne(id.value);
});
</script>

<style scoped></style>
