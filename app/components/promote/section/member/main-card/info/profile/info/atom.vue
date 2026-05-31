<template>
    <div class="flex flex-row gap-4 items-center">
        <h1 class="text-2xl font-medium">
            <slot></slot>
        </h1>
        <p class="text-2xl font-normal">
            <slot name="text"></slot>
        </p>
    </div>
</template>
