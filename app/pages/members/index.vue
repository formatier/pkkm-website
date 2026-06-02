<script lang="ts" setup>
definePageMeta({
    layout: "promote"
})

let members = useMembers();
const route = useRoute();

const d_id = route.query.d_id?.toString();
</script>

<template></template>
