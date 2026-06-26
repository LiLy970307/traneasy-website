<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="visible"
          class="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/45 px-4 py-6"
          @click.self="closeModal"
        >
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-3 scale-95 opacity-0"
            enter-to-class="translate-y-0 scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 scale-100 opacity-100"
            leave-to-class="translate-y-3 scale-95 opacity-0"
          >
            <div
              v-if="visible"
              class="relative flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
              @click.stop
            >
              <button
                type="button"
                :aria-label="$t('statementModal.closeAriaLabel')"
                class="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-400 shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-600"
                @click="closeModal"
              >
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 5L15 15M15 5L5 15"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>

              <div
                class="overflow-y-auto bg-gradient-to-b from-blue-50/40 to-white p-4 sm:p-6"
              >
                <StatementContent compact title-tag="h2" />
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
const route = useRoute();
const visible = ref(false);
const storageKey = "traneasy-statement-modal-shown";

const closeModal = () => {
  visible.value = false;
  sessionStorage.setItem(storageKey, "1");
};

onMounted(() => {
  if (route.path.includes("/statement")) {
    return;
  }

  if (sessionStorage.getItem(storageKey) === "1") {
    return;
  }

  visible.value = true;
});
</script>
