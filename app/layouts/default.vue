<template>
  <div
    class="mx-auto flex min-h-screen w-full flex-col bg-bcGovColor-gray1"
  >
    <ConnectHeader />
    <ConnectSystemBanner />
    <ConnectBreadcrumb />
    <main
      class="mx-auto w-full grow"
    >
      <slot />
    </main>
    <ConnectFooter />
  </div>
</template>
