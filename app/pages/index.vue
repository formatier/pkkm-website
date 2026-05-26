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
            <NuxtLink to="/">
                <Icon name="ph:instagram-logo" class="size-6"></Icon>
            </NuxtLink>
            <NuxtLink to="/">
                <Icon name="ph:tiktok-logo" class="size-6"></Icon>
            </NuxtLink>
            <NuxtLink to="/">
                <Icon name="ph:facebook-logo" class="size-6"></Icon>
            </NuxtLink>
        </template>
    </PromoteNav>

    <PromoteHero>
        <PromoteHeroMessage>
            <PromoteHeroMessageHeader>
                เลือกคนพร้อมทำ<br />พวกเรา<br
                    class="lg:hidden block"
                />พร้อมพัฒนา
            </PromoteHeroMessageHeader>

            <PromoteHeroMessageParagraph>
                เลือกฟ้าขาวก้าวใหม่เข้าไปเป็นสภา เลือกอนาคตที่ดีกว่า
                พวกเรามาพร้อมกับนโยบายยุคใหม่ที่ตอบโจทย์ทุกคนและพร้อมลงมือทำให้เกิดขึ้นจริงเพื่อพัฒนาโรงเรียน
            </PromoteHeroMessageParagraph>

            <div class="flex gap-5 lg:justify-start justify-center">
                <NuxtLink class="btn btn-primary btn-lg" to="/policy">
                    นโยบาย
                </NuxtLink>
                <NuxtLink class="btn btn-outline btn-lg" to="/policy">
                    เสนอความคิดเห็น
                </NuxtLink>
            </div>
        </PromoteHeroMessage>

        <PromoteHeroGallery></PromoteHeroGallery>
    </PromoteHero>

    <PromoteSection bg-color="zodiac">
        <PromoteSectionHeader>สมาชิก</PromoteSectionHeader>
        <PromoteSectionMember>
            <PromoteSectionMemberCard></PromoteSectionMemberCard>
            <PromoteSectionMemberCard></PromoteSectionMemberCard>
            <PromoteSectionMemberCard></PromoteSectionMemberCard>
            <PromoteSectionMemberCard></PromoteSectionMemberCard>
            <PromoteSectionMemberCard></PromoteSectionMemberCard>
            <PromoteSectionMemberCard></PromoteSectionMemberCard>
        </PromoteSectionMember>
    </PromoteSection>
</template>
