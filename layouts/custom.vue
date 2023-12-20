<template>
    <div>
      <p>Some default layout content shared across all pages</p>
      <slot />
    </div>
  </template>

<script setup lang="ts">
const layoutCustomProps = useAttrs()

console.log(layoutCustomProps.title) // I am a custom layout
</script>
