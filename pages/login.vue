<template>
  <main class="pt-[68px] min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <div class="max-w-md w-full mx-4">
      <div class="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
        <div class="text-center mb-8">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow mx-auto mb-4">
            <span class="text-white font-bold text-lg">T</span>
          </div>
          <h1 class="text-2xl font-bold text-slate-900">{{ $t('nav.login') }}</h1>
        </div>
        <form @submit.prevent class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" class="w-full px-4 py-3 rounded-full border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="your@email.com" />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input type="password" class="w-full px-4 py-3 rounded-full border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="••••••••" />
          </div>
          <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-colors">{{ $t('nav.login') }}</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })
useHead({ title: `${useI18n().t('nav.login')} - TranEasy` })
</script>
