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
                    <NuxtLink class="btn btn-primary btn-lg" to="/policies">
                        นโยบาย
                    </NuxtLink>
                    <NuxtLink class="btn btn-outline btn-lg opacity-50">
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
                                            : 'student-rule'
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
            <div class="flex flex-col font-prompt">
                <PromoteSectionPolicy>
                    <PolicySectionCard>
                        <NuxtLink to="/policies/student-activity/custom-esport">
                            <h1 class="underline">เกมที่ใช่ใครก็ชอบ</h1>
                        </NuxtLink>
                        <p>
                            เล่นเกมเดียวไม่สนุก ต้องเล่น 2 ครั้ง ถึงจะสนุก
                            อยากเล่นเกมไหนก็โหวตกันเลย...
                        </p>
                    </PolicySectionCard>
                    <PolicySectionCard>
                        <NuxtLink to="/policies/student-activity/custom-sport">
                            <h1 class="underline">1 เสียง 1 สนาม</h1>
                        </NuxtLink>
                        <p>
                            เล่นกีฬาเดียวไม่สนุก ต้องเล่น 2 ครั้ง ถึงจะสนุก
                            อยากเล่นกีฬาไหนก็โหวตกันเลย...
                        </p>
                    </PolicySectionCard>
                    <PolicySectionCard>
                        <NuxtLink to="/policies/student-activity/random-dance">
                            <h1 class="underline">เต้นสุ่มจุ่มเพลง</h1>
                        </NuxtLink>
                        <p>
                            เต้นเพลงเดียวสนุกหรอ ต้องเต้นหลาย ๆ เพลงสิถึงจะสนุก
                            จัดทุก ๆ วันศุกร์สุดท้ายของเดือน...
                        </p>
                    </PolicySectionCard>

                    <PolicySectionCard>
                        <NuxtLink to="/policies/academic/custom-notebook-cover">
                            <h1 class="underline">ปกนี้พี่ให้ทำ</h1>
                        </NuxtLink>
                        <p>
                            ออกแบบปกสมุดแล้วมาโหวดกันเถอะ
                            สุดท้ายใครจะเป็นผู้ชนะ...
                        </p>
                    </PolicySectionCard>
                    <PolicySectionCard>
                        <NuxtLink to="/policies/student-rule/bottle-race">
                            <h1 class="underline">แต้มรักษ์โลก</h1>
                        </NuxtLink>
                        <p>
                            อยากได้และออกเกียรติบัตรจิตอาสามั้ยหล่ะ พี่มีให้นะ
                            ลองเอาขวดมาให้พี่สิ
                            (แอบกระซิบว่าห้องไหนเก็บได้เยอะได้เงินด้วยน้า)...
                        </p>
                    </PolicySectionCard>
                    <PolicySectionCard>
                        <NuxtLink to="/policies/academic/app-pro-max">
                            <h1 class="underline">แอพสภา Pro Max</h1>
                        </NuxtLink>
                        <p>
                            สภาจะมีแอพแล้วจ้า แอพเริ่ด ๆ เขียนเอง UI เริ่ด ๆ...
                        </p>
                    </PolicySectionCard>
                </PromoteSectionPolicy>
                <NuxtLink
                    to="/policies"
                    class="mt-4 w-full bg-blue-zodiac-900 p-4 rounded-xl text-center underline"
                    >ดูเพิ่มเติม...</NuxtLink
                >
            </div>
        </AppSection>
    </div>
</template>
