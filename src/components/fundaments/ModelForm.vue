<template>
	<div>
		<label>
			<input v-model="text" type="text" />
		</label>
		<p>{{ text }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "ModelForm",
	data() {
		return {
			text: "",
		};
	},
});
</script>

<style scope>
* {
	font-size: 40px;
}
</style>
