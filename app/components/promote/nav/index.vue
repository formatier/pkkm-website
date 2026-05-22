<template>
    <div>
        <ul>
            <li>
                <slot name="icon"></slot>
            </li>
            <slot></slot>
        </ul>

        <ul>
            <slot name="external-link"></slot>
        </ul>
    </div>
</template>
