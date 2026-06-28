<template>
  <div class="relative min-h-screen">
    <ScrollProgress />
    <AppHeader />
    <main class="pt-[4.6rem]">
      <slot />
    </main>
    <AppFooter />
    <BackToTop />
    <CookieConsent />
  </div>
</template>
