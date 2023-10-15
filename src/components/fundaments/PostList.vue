<template>
	<div>
		<PostCard
			v-for="(post, key) in postList"
			:key="key"
			:title="post.title"
			:content="post.content"
			@sayHello="saludar"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import PostCard from "./PostCard.vue";

export default defineComponent({
	setup() {
		interface IPost {
			title: string;
			content: string;
		}

		const saludar = (msg: string) => alert(msg);

		let postList: Ref<Array<IPost>> = ref([
			{ title: "titutlo1", content: "contenido 1" },
			{ title: "titutlo2", content: "contenido 2" },
			{ title: "titutlo3", content: "contenido 3" },
			{ title: "titutlo4", content: "contenido 4" },
			{ title: "titutlo5", content: "contenido 5" },
		]);

		return { postList, saludar };
	},
	components: {
		PostCard,
	},
});
</script>

<style scoped></style>
