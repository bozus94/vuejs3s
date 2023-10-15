<template>
	<PostIndex />
</template>

<script lang="ts" setup>
import PostIndex from "@/components/servicesExample/PostIndex.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
	font-family: "Roboto", sans-serif;
}
form {
	display: flex;
	flex-direction: column;
	gap: 15px;
}
input[type="text"] {
	width: 100%;
	padding: 12px;
	margin: 8px 0;
	box-sizing: border-box;
}

input[type="button"],
input[type="submit"],
input[type="reset"],
button {
	background-color: #04aa6d;
	border: none;
	color: white;
	padding: 8px;
	text-decoration: none;
	cursor: pointer;
	font-size: 1rem;
	margin: 8px 0;
}

table {
	display: block;
}

th,
td {
	border-bottom: 1px solid #ddd;
	padding: 15px;
	text-align: left;
}
tr:nth-child(even) {
	background-color: #f2f2f2;
}
form > button {
	width: 25%;
}
label {
	font-size: 1.1rem;
}

input[type="text"] {
	width: 100%;
	padding: 12px;
	margin: 8px 0;
	box-sizing: border-box;
}

input[type="button"],
input[type="submit"],
input[type="reset"],
button {
	background-color: #04aa6d;
	border: none;
	color: white;
	padding: 8px;
	text-decoration: none;
	cursor: pointer;
	font-size: 1rem;
	margin: 8px 0;
}

table {
	display: block;
}

th,
td {
	border-bottom: 1px solid #ddd;
	padding: 15px;
	text-align: left;
}

tr:nth-child(even) {
	background-color: #f2f2f2;
}
.switch {
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
	opacity: 0;
	width: 0;
	height: 0;
	margin-right: 25px;
}

/* The slider */
.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

.slider:before {
	position: absolute;
	content: "";
	height: 26px;
	width: 26px;
	left: 4px;
	bottom: 4px;
	background-color: white;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

input:checked + .slider {
	background-color: #2196f3;
}

input:focus + .slider {
	box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
	-webkit-transform: translateX(26px);
	-ms-transform: translateX(26px);
	transform: translateX(26px);
}
</style>
