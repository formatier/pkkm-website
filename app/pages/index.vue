<script lang="ts" setup>
definePageMeta({
    layout: "promote",
});

let headMembers = useMembers({
    query: {
        tag: "รองหัวหน้าพรรค",
    },
});
const route = useRoute();

const d_id = route.query.d_id?.toString();
</script>

<template>
    <div>
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
                        class="btn btn-primary btn-lg"
                        to="/policies"
                    >
                        นโยบาย
                    </NuxtLink>
                    <NuxtLink class="btn btn-outline btn-lg" to="/policies">
                        เสนอความคิดเห็น
                    </NuxtLink>
                </div>
            </PromoteHeroMessage>

            <PromoteHeroGallery></PromoteHeroGallery>
        </PromoteHero>

        <AppSection bg-color="zodiac">
            <AppSectionHeader>สมาชิก</AppSectionHeader>
            <PromoteSectionMember>
                <PromoteSectionMemberMainCard>
                    <PromoteSectionMemberMainCardImage></PromoteSectionMemberMainCardImage>
                    <PromoteSectionMemberMainCardInfo>
                        <PromoteSectionMemberMainCardInfoTag>
                            {{ headMembers.president.tag }}
                        </PromoteSectionMemberMainCardInfoTag>
                        <PromoteSectionMemberMainCardInfoName>
                            {{ headMembers.president.name }}
                        </PromoteSectionMemberMainCardInfoName>
                        <PromoteSectionMemberMainCardInfoQuote>
                            {{ headMembers.president.quote }}
                        </PromoteSectionMemberMainCardInfoQuote>

                        <PromoteSectionMemberMainCardInfoProfile>
                            <PromoteSectionMemberMainCardInfoProfileInfoSection>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    ชื่อเล่น
                                    <template #text>
                                        {{
                                            headMembers.president.info.nickname
                                        }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                <div class="flex gap-4">
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        เกิด
                                        <template #text>
                                            {{
                                                headMembers.president.info
                                                    .birthday
                                            }}
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
                                        {{ headMembers.president.info.hobby }}
                                    </template>
                                </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                <div class="flex gap-4">
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        ชั้น
                                        <template #text>
                                            ม.{{
                                                headMembers.president.info
                                                    .grade +
                                                "/" +
                                                headMembers.president.info.room
                                            }}
                                        </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                    <PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                        ห้องเรียน
                                        <template #text>
                                            {{
                                                getStudentProgram(
                                                    headMembers.president.info
                                                        .room,
                                                )
                                            }}
                                        </template>
                                    </PromoteSectionMemberMainCardInfoProfileInfoAtom>
                                </div>
                                <PromoteSectionMemberMainCardInfoProfileInfoAtom
                                    v-for="(value, key) in headMembers.president
                                        .info.custom"
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
                    <PromoteSectionMemberCard
                        v-for="(member, idx) in [
                            headMembers.department.academic[0],
                            headMembers.department.studentActivity[0],
                            headMembers.department.service[0],
                            headMembers.department.studentRule[0],
                        ]"
                    >
                        <PromoteSectionMemberCardImage :src="member?.imageUrl">
                        </PromoteSectionMemberCardImage>
                        <PromoteSectionMemberCardProfile>
                            <PromoteSectionMemberCardProfileTag>
                                รองหัวหน้าพรรค
                            </PromoteSectionMemberCardProfileTag>
                            <PromoteSectionMemberCardProfileName>
                                {{ member?.name }}
                            </PromoteSectionMemberCardProfileName>
                            <PromoteSectionMemberCardProfileAtom>
                                ชื่อเล่น
                                <template #text>
                                    {{ member?.info.nickname }}
                                </template>
                            </PromoteSectionMemberCardProfileAtom>
                            <PromoteSectionMemberCardProfileAtom>
                                ฝ่าย
                                <template #text>
                                    {{
                                        idx === 0
                                            ? "วิชาการ"
                                            : idx === 1
                                              ? "กิจกรรม"
                                              : idx === 2
                                                ? "บริการ"
                                                : "ระเบียบ"
                                    }}
                                </template>
                            </PromoteSectionMemberCardProfileAtom>
                        </PromoteSectionMemberCardProfile>
                        <template #link>
                            <NuxtLink
                                :to="`/members#${
                                    idx === 0
                                        ? 'academic'
                                        : idx === 1
                                          ? 'student-activity'
                                          : idx === 2
                                            ? 'service'
                                            : 'student_rule'
                                }`"
                                class="w-full h-full flex items-center justify-center text-white underline"
                            >
                                ดูเพิ่มเติม
                            </NuxtLink>
                        </template>
                    </PromoteSectionMemberCard>
                </PromoteSectionMemberCardContainer>
            </PromoteSectionMember>
        </AppSection>

        <AppSection bg-color="zodiac">
            <AppSectionHeader>นโยบาย</AppSectionHeader>
            <PromoteSectionPolicy> </PromoteSectionPolicy>
        </AppSection>

        <AppSection>
            <AppSectionHeader>ข่าวสารพรรค</AppSectionHeader>
            <PromoteSectionNews>
                <PromoteSectionNewsList></PromoteSectionNewsList>
                <PromoteSectionNewsPreview></PromoteSectionNewsPreview>
            </PromoteSectionNews>
        </AppSection>
    </div>
</template>
