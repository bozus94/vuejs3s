import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";

const app = createApp(App).use(router);

app.directive("font-size", {
	beforeMount: (el, binding) => {
		el.style.fontSize = 55 + "px";
	},
});

app.directive("custom-size", {
	beforeMount: (el, binding) => {
		el.style.fontSize = binding.value + "px";
	},
});

app.directive("custom-font", {
	beforeMount: (el, binding) => {
		let size = 20;
		switch (binding.arg) {
			case "sm":
				size = 20;
				break;
			case "md":
				size = 30;
				break;
			case "xl":
				size = 40;
				break;
			case "xxl":
				size = 50;
		}
		el.style.fontSize = size + "px";

		if (binding.modifiers.red) {
			el.style.color = "#EF233C";
		} else if (binding.modifiers.green) {
			el.style.color = "#337357";
		} else if (binding.modifiers.yellow) {
			el.style.color = "#E8FCC2";
		} else if (binding.modifiers.blue) {
			el.style.color = "#04395E";
		}
	},
});

app.mount("#app");
