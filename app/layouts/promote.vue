<template>
    <PromoteNav>
        <template #icon>
            <NuxtLink to="/">
                <div class="flex items-center gap-3">
                    <Icon name="logos:logo" class="size-12" />
                    <p class="text-2xl">ฟ้าขาวก้าวใหม่</p>
                </div>
            </NuxtLink>
        </template>

        <template #default>
            <PromoteNavItem to="/polcies" title="">นโยบาย</PromoteNavItem>
            <PromoteNavItem to="/members" title="">สมาชิก</PromoteNavItem>
            <PromoteNavItem to="/goals" title="">จุดมุ่งหมาย</PromoteNavItem>
        </template>

        <template #external-link>
            <NuxtLink to="/" class="flex items-center">
                <Icon name="ph:instagram-logo" class="size-6"></Icon>
            </NuxtLink>
            <NuxtLink to="/" class="flex items-center">
                <Icon name="ph:tiktok-logo" class="size-6"></Icon>
            </NuxtLink>
        </template>
    </PromoteNav>

    <slot/>
</template>