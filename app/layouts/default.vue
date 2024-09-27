<template>
  <div
    class="mx-auto flex min-h-screen w-full flex-col bg-bcGovColor-gray1"
  >
    <ClientOnly>
      <ConnectHeader />
      <ConnectSystemBanner />
      <ConnectBreadcrumb />
    </ClientOnly>
    <main
      class="mx-auto w-full grow"
    >
      <slot />
    </main>
    <ClientOnly>
      <ConnectFooter />
    </ClientOnly>
  </div>
</template>
