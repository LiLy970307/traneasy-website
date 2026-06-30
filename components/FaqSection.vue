<template>
  <section ref="sectionRef" :class="sectionClass">
    <div :class="containerClass">
      <div
        :class="[
          isVisible
            ? 'translate-y-0 opacity-100 blur-0'
            : 'translate-y-8 opacity-0 blur-sm',
        ]"
        class="transition-all duration-700 ease-out will-change-transform"
      >
        <h2 class="text-[23px] font-medium leading-[1.5] text-[#000213]">
          {{ $t(title) }}
        </h2>
        <p class="text-[23px] font-medium leading-[1.5] text-[#000213]">
          {{ description }}
        </p>
      </div>

      <div
        :class="[
          isVisible
            ? 'translate-y-0 opacity-100 blur-0'
            : 'translate-y-8 opacity-0 blur-sm',
        ]"
        class="mt-10 space-y-4 transition-all delay-150 duration-700 ease-out will-change-transform"
      >
        <div
          v-for="(faq, index) in faqs"
          :key="faq.question"
          class="overflow-hidden rounded-[16px] border border-[#E7EBF2] bg-[#F9FBFE]"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            @click="openFaqIndex = openFaqIndex === index ? null : index"
          >
            <span
              class="text-[16px] font-semibold leading-7 text-[#000213] sm:text-[17px]"
            >
              {{ faq.question }}
            </span>
            <span
              class="text-[24px] leading-none text-[#7B8191] transition-transform duration-300"
              :class="openFaqIndex === index ? 'rotate-180' : 'rotate-0'"
            >
              {{ openFaqIndex === index ? "−" : "+" }}
            </span>
          </button>

          <div
            class="grid transition-[grid-template-rows] duration-300 ease-out"
            :class="
              openFaqIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            "
          >
            <div
              class="overflow-hidden border-t border-[#E7EBF2] transition-[opacity,transform] duration-300 ease-out"
              :class="
                openFaqIndex === index
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-1 opacity-0'
              "
            >
              <div
                class="px-6 py-5 text-[15px] leading-8 text-[#5F6472] prose prose-slate max-w-none [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1"
                v-html="faq.answer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface FaqItem {
  question: string;
  answer: string;
}

const props = withDefaults(
  defineProps<{
    description: string;
    faqs: readonly FaqItem[];
    title?: string;
    sectionClass?: string;
    containerClass?: string;
    initialOpenIndex?: number;
  }>(),
  {
    title: "faqSection.defaultTitle",
    sectionClass: "px-6 py-20 sm:px-8 lg:px-12",
    containerClass: "mx-auto max-w-container px-6 sm:px-8 lg:px-12",
    initialOpenIndex: 0,
  },
);

const openFaqIndex = ref<number | null>(props.initialOpenIndex);

const sectionRef = shallowRef<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!sectionRef.value) {
    return;
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true;
        observer?.disconnect();
      }
    },
    {
      threshold: 0.4,
    },
  );

  observer.observe(sectionRef.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>
