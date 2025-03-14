<script setup lang="ts">
const content = await queryCollection('home_enCA')
  .where('content_type', '=', 'hero')
  .first()
</script>
<template>
  <header class="bg-white bg-no-repeat lg:bg-[length:845px] lg:bg-right-bottom min-[1120px]:h-[30rem] min-[1120px]:bg-[url(/img/BCReg_homebanner_images_final_80compressed_032521.jpg)] xl:bg-[length:955px] 2xl:h-[35rem] 2xl:bg-[length:1145px]">
    <div class="mx-auto flex w-full max-w-bcGovLg items-center px-4 py-8 min-[1120px]:h-[30rem] min-[1120px]:py-0 2xl:h-[35rem]">
      <ContentRenderer 
        v-if="content"
        :value="content"
        class="w-full min-w-full min-[1120px]:min-w-1/2 min-[1120px]:max-w-1/2 prose" 
      />
    </div>
  </header>
</template>