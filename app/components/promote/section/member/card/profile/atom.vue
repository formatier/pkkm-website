<template>
    <div class="flex gap-2 md:gap-4 flex-wrap text-blue-zodiac-950 font-prompt">
        <h1 class="text-xl lg:text-2xl font-medium">
            <slot></slot>
        </h1>
        <p class="text-xl lg:text-2xl font-normal">
            <slot name="text"></slot>
        </p>
    </div>
</template>
