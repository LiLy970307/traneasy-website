<template>
  <div class="min-h-screen bg-slate-50 px-4 py-16 sm:px-8 lg:px-12">
    <div
      v-if="loading"
      class="flex items-center justify-center py-32 text-slate-400"
    >
      加载中...
    </div>

    <div
      v-else
      class="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm sm:p-10 lg:p-14"
    >
      <h3
        class="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl"
      >
        {{ htmlNode.title }}
      </h3>
      <div style="min-height: calc(100vh - 300px)">
        <p v-for="(l, idx) in lines" :key="idx" class="textNode">
          {{ l }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import allPrivacy from "~/messages/privacy.js";

definePageMeta({ layout: false });

const { locale } = useI18n();

interface PrivacyItem {
  title: string;
  text: string;
}

const loading = ref(true);
const htmlNode = reactive<PrivacyItem>({
  title: "",
  text: "",
});

/**
 * Vite's SSR build may transform large template literals into AST node objects
 * with the format: { t: 0, b: { t: 2, i: [...], s: "actual string" } }
 * This function extracts the string from either a plain string or an AST node.
 */
function extractString(val: unknown): string {
  if (typeof val === "string") return val;
  if (val && typeof val === "object") {
    const obj = val as Record<string, unknown>;
    // Vite AST node: { t: 0, b: { t: 2, i: [...], s: "..." } }
    if (obj.b && typeof obj.b === "object") {
      const b = obj.b as Record<string, unknown>;
      if (typeof b.s === "string") return b.s;
    }
    // Fallback: try loc.source (another known Vite format)
    if (obj.loc && typeof obj.loc === "object") {
      const loc = obj.loc as Record<string, unknown>;
      if (typeof loc.source === "string") return loc.source;
    }
  }
  return "";
}

const lines = computed(() => {
  const text = htmlNode.text;
  if (!text) return [];
  return text.split("\n").filter((l: string) => l.trim());
});

onMounted(() => {
  const langData =
    allPrivacy[locale.value as keyof typeof allPrivacy] ?? allPrivacy.zh;
  const privacy = langData?.privacy as Record<string, unknown> | undefined;

  if (privacy) {
    htmlNode.title = extractString(privacy.title);
    htmlNode.text = extractString(privacy.text);
  }

  loading.value = false;
});

useHead({ title: computed(() => `${htmlNode.title} - TranEasy`) });
</script>

<style scoped>
.textNode {
  text-indent: 2rem;
  margin: 0.5rem 0;
  line-height: 1.6;
}
p {
  margin: 0.5rem 0;
  color: #000000;
  font-weight: bold;
}
</style>
