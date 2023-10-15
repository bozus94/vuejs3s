<template>
	<div>
		<input type="text" v-model="subtotal" />
		<p>Subtotal {{ subtotal }}</p>
		<p>iva {{ totalVat }} (21)%</p>
		<p>total a pagar {{ total }}</p>
	</div>
</template>

<script lang="ts" setup>
import { computed, ref, Ref } from "vue";

const vat = 21;
let subtotal: Ref<number> = ref(0);
const totalVat = computed((): number => (subtotal.value * vat) / 100);
const total = computed((): number => totalVat.value + Number(subtotal.value));

/* compisition api
import { computed, defineComponent, ref, Ref } from "vue";

export default defineComponent({
	name: "ComputedExample",
	setup() {
		let msg: Ref<string> = ref("");
		const reversed = computed(() => msg.value.split("").reverse().join(""));
		return { msg, reversed };
	},
});
 */

/* option api
export default defineComponent({
	name: "ComputedExample",
	data() {
		return {
			msg: "",
		};
	},
	computed: {
		reverse(): string {
			return this.msg.split("").reverse().join("");
		},
	},
}); */
</script>

<style scoped></style>
