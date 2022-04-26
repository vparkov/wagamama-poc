<template>
  <NuxtLink :to="link.url">
    <div>
      {{ link.title }}
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import { NuxtLink } from '#components'
import { link } from '~~/types'
export default defineNuxtComponent({
  components: {
    NuxtLink,
  },
  props: {
    link: {
      type: Object as () => link,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>
