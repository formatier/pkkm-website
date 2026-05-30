<script setup lang="ts">
import { AnimatePresence, motion } from "motion-v";

let images: string[] | undefined = [
	"/hero-images/1.webp",
	"/hero-images/2.webp",
	"/hero-images/3.webp",
	"/hero-images/4.webp",
];

let current_idx = ref(0);
let direction = ref(1)

let prevImage = () => {
    if (current_idx.value >= 0) {
        current_idx.value--
    }
}

let nextImage = () => {
    if (current_idx.value < images.length) {
        current_idx.value++
    }
}
</script>

<template>
	<div class="relative overflow-x-hidden">
		<AnimatePresence>
			<motion.div @hover-start="" class="">
				<NuxtImg :src="images[current_idx]" class="rounded-xl"></NuxtImg>
			</motion.div>
		</AnimatePresence>
        <button @click="prevImage()">Prev</button>
        <button @click="nextImage()">Next</button>
	</div>
</template>
