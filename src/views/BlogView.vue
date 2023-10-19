<template>
	<div class="home">
		<h1>Blog</h1>
		<ul>
			<li v-for="post in posts" :key="post.id">
				<router-link :to="{ name: 'post', params: { id: post.id } }"> {{ post.title }}</router-link>
			</li>
		</ul>
	</div>
</template>
<script lang="ts" setup>
import { Ref, onMounted } from "vue";
import PostService from "@/components/servicesExample/Services/PostService";
import IPost from "@/components/servicesExample/intefaces/Post";

const postService = new PostService();
let posts: Ref<Array<IPost>> = postService.getPosts();

onMounted(() => {
	postService.fetchAll();
});
</script>
