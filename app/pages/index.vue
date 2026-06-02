<script lang="ts" setup>
definePageMeta({
    layout: "promote"
})

let members = useMembers();
const route = useRoute();

const d_id = route.query.d_id?.toString();
</script>

<template>
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
                <NuxtLink
                    class="btn btn-primary btn-lg opacity-50"
                    to="/policy"
                >
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
            <PromoteSectionMemberMainCard>
                <PromoteSectionMemberMainCardImage></PromoteSectionMemberMainCardImage>
                <PromoteSectionMemberMainCardInfo>
                    <PromoteSectionMemberMainCardInfoTag>
                        {{ members.president.tag }}
                    </PromoteSectionMemberMainCardInfoTag>
                    <PromoteSectionMemberMainCardInfoName>
                        {{ members.president.name }}
                    </PromoteSectionMemberMainCardInfoName>
                    <PromoteSectionMemberMainCardInfoQuote>
                        {{ members.president.quote }}
                    </PromoteSectionMemberMainCardInfoQuote>

                    <PromoteSectionMemberMainCardInfoProfile>
                        <PromoteSectionMemberMainCardInfoProfileInfoSection>
                            <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                ชื่อเล่น
                                <template #text>
                                    {{ members.president.info.nickname }}
                                </template>
                            </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                            <div class="flex gap-4">
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    เกิด
                                    <template #text>
                                        {{ members.president.info.birthday }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    อายุ
                                    <template #text> 15 </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                            </div>
                            <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                ความสามารถพิเศษ
                                <template #text>
                                    {{ members.president.info.hobby }}
                                </template>
                            </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                            <div class="flex gap-4">
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    ชั้น
                                    <template #text>
                                        ม.{{ members.president.info.grade }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    ห้องเรียน
                                    <template #text>
                                        {{ members.president.info.program }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                            </div>
                            <PromoteSectionMemberMainCardInfoProfileInfoAtom
                                v-for="(value, key) in members.president.info
                                    .custom"
                                :key="key"
                            >
                                {{ key }}
                                <template #text>
                                    {{ value }}
                                </template>
                            </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                        </PromoteSectionMemberMainCardInfoProfileInfoSection>
                    </PromoteSectionMemberMainCardInfoProfile>
                </PromoteSectionMemberMainCardInfo>
            </PromoteSectionMemberMainCard>

            <PromoteSectionMemberCardContainer>
                <PromoteSectionMemberCard>
                    <PromoteSectionMemberCardImage>
                    </PromoteSectionMemberCardImage>
                    <PromoteSectionMemberCardProfile>
                        <PromoteSectionMemberCardProfileTag>
                            รองหัวหน้าพรรค
                        </PromoteSectionMemberCardProfileTag>
                        <PromoteSectionMemberCardProfileName>
                            อรัญธนชัย แตงเส็ง
                        </PromoteSectionMemberCardProfileName>
                        <PromoteSectionMemberCardProfileAtom>
                            อายุ
                            <template #text> 15 </template>
                        </PromoteSectionMemberCardProfileAtom>
                    </PromoteSectionMemberCardProfile>
                </PromoteSectionMemberCard>

                <PromoteSectionMemberCard>
                    <PromoteSectionMemberCardImage>
                    </PromoteSectionMemberCardImage>
                    <PromoteSectionMemberCardProfile>
                        <PromoteSectionMemberCardProfileAtom>
                        </PromoteSectionMemberCardProfileAtom>
                    </PromoteSectionMemberCardProfile>
                </PromoteSectionMemberCard>

                <PromoteSectionMemberCard>
                    <PromoteSectionMemberCardImage>
                    </PromoteSectionMemberCardImage>
                    <PromoteSectionMemberCardProfile>
                        <PromoteSectionMemberCardProfileAtom>
                        </PromoteSectionMemberCardProfileAtom>
                    </PromoteSectionMemberCardProfile>
                </PromoteSectionMemberCard>

                <PromoteSectionMemberCard>
                    <PromoteSectionMemberCardImage>
                    </PromoteSectionMemberCardImage>
                    <PromoteSectionMemberCardProfile>
                        <PromoteSectionMemberCardProfileAtom>
                        </PromoteSectionMemberCardProfileAtom>
                    </PromoteSectionMemberCardProfile>
                </PromoteSectionMemberCard>
            </PromoteSectionMemberCardContainer>
        </PromoteSectionMember>
    </PromoteSection>

    <PromoteSection bg-color="zodiac">
        <PromoteSectionHeader>นโยบาย</PromoteSectionHeader>
        <PromoteSectionPolicy> </PromoteSectionPolicy>
    </PromoteSection>

    <PromoteSection>
        <PromoteSectionHeader>ข่าวสารพรรค</PromoteSectionHeader>
        <PromoteSectionNews>
            <PromoteSectionNewsList></PromoteSectionNewsList>
            <PromoteSectionNewsPreview></PromoteSectionNewsPreview>
        </PromoteSectionNews>
    </PromoteSection>
</template>
