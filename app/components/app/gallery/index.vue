<script setup lang="ts">
import { AnimatePresence, motion } from "motion-v";
import {
    concat,
	interval,
	map,
	merge,
	of,
	startWith,
	Subject,
	switchMap,
	timer,
} from "rxjs";

const images = [
	"/hero-images/1.webp",
	"/hero-images/2.webp",
	"/hero-images/3.webp",
	"/hero-images/4.webp",
	"/hero-images/5.webp",
];

const currentIdx = ref(0);
const direction = ref(1);

const loadedImages = ref<Record<string, boolean>>({});

const handleImageLoad = (src: string) => {
	loadedImages.value[src] = true;
};

const prevImage = () => {
	direction.value = -1;
	currentIdx.value = (currentIdx.value - 1 + images.length) % images.length;
};

const nextImage = () => {
	direction.value = 1;
	currentIdx.value = (currentIdx.value + 1) % images.length;
};

const hovered = ref(false);

const slideVariants = {
	initial: (custom: unknown) => {
		const dir = custom as number;
		return {
			x: dir > 0 ? "100%" : "-100%",
			opacity: 0,
		};
	},

	animate: {
		x: 0,
		opacity: 1,
		transition: {
			ease: "easeInOut" as const,
		},
	},

	exit: (custom: unknown) => {
		const dir = custom as number;
		return {
			x: dir > 0 ? "-100%" : "100%",
			opacity: 0,
			transition: {
				duration: 0.25,
				ease: "easeInOut" as const,
			},
		};
	},
};

const updateSubject = new Subject<"next" | "prev">();

const autoUpdateSubscription = updateSubject
	.pipe(
        startWith("prev"),
		switchMap((e) =>
			concat(
				of(e),
				timer(1000 * 7, 1000 * 7).pipe(map(() => "next" as const)),
			),
		),
	)
	.subscribe((e) => {
		if (e == "next") {
			nextImage();
		} else {
			prevImage();
		}
	});
</script>

<template>
	<div class="relative w-full h-full max-w-2xl mx-auto overflow-hidden">
		<div class="relative w-full h-full overflow-hidden rounded-2xl">
			<AnimatePresence :custom="direction">
				<motion.div
					:key="currentIdx"
					:custom="direction"
					:variants="slideVariants"
					initial="initial"
					animate="animate"
					exit="exit"
					class="absolute inset-0 w-full h-full z-0"
				>
					<NuxtImg
						:src="images[currentIdx]"
						alt="Gallery Image"
						class="w-full h-full object-cover transition-all duration-700 ease-out"
						:class="
							loadedImages[images[currentIdx] || 0]
								? 'blur-0'
								: 'blur-xl'
						"
						@load="handleImageLoad(images[currentIdx] || '')"
						loading="eager"
						format="webp"
						quality="80"
						sizes="sm:100vw md:640px lg:1200px"
					/>
				</motion.div>
			</AnimatePresence>
		</div>

		<div
			class="flex justify-between items-center mt-4 px-2 absolute z-10 bottom-0 w-full h-full *:transition-all *:duration-300"
			@mouseenter="() => (hovered = true)"
			@mouseleave="() => (hovered = false)"
		>
			<button
				@click="updateSubject.next('prev')"
				class="btn btn-primary btn-sm z-10"
				:class="hovered ? 'opacity-100' : 'opacity-0'"
			>
				<Icon name="ph:caret-left-bold"></Icon>
			</button>
			<span
				class="text-sm absolute bottom-2 left-2 px-2 py-1 rounded-sm"
				:class="
					hovered ? 'bg-blue-zodiac-950 text-white' : 'bg-transparent'
				"
			>
				{{ currentIdx + 1 }} / {{ images.length }}
			</span>
			<button
				@click="updateSubject.next('next')"
				class="btn btn-primary btn-sm z-10"
				:class="hovered ? 'opacity-100' : 'opacity-0'"
			>
				<Icon name="ph:caret-right-bold"></Icon>
			</button>
		</div>
	</div>
</template>
