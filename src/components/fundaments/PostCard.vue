<template>
	<div class="post-card">
		<p>{{ title }}</p>
		<p>{{ content }}</p>
		<input type="text" v-model="msg" />
		<button @click="hello">Saludar</button>
	</div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, Ref } from "vue";

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: false,
		default: "Este post no tiene contenido",
	},
});

const emit = defineEmits(["sayHello"]);

let msg: Ref<string> = ref("");

const hello = () => emit("sayHello", `${props.title}: ${msg.value}`);

/*  import { defineComponent } from "vue";  option api

export default defineComponent({
	name: "PostCard",
	props: {
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: false,
			default: "Este post no tiene contenido",
		},
	},
	emits: ["sayHello"],
	data(props) {
		return {
			msg: "",
		};
	},
	methods: {
		hello(msg: string) {
			this.$emit("sayHello", `${this.title}: ${msg}`);
		},
	},
}); */

/* import { defineComponent, ref, Ref } from "vue";

export default defineComponent({  composition api
	name: "PostCard",
	props: {
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: false,
			default: "Este post no tiene contenido",
		},
	},
	emits: ["sayHello"],
	setup(props, { emit }) {
		let msg: Ref<string> = ref("");
		const hello = () => emit("sayHello", `${props.title}: ${msg.value}`);
		return { props, hello, msg };
	},
});*/
</script>

<style scoped>
.post-card {
	border-radius: 15px;
	border: 1px solid #ccc;
	margin: 10px;
	padding: 10px;
}
</style>
