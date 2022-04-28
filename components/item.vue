<template>
  <div class="card">
    <img :src="item.image_url" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">
        {{ item.title.substring(0, 15) }}
      </h5>
      <p class="card-text">
        {{ item.description }}
      </p>
      <a href="#" class="btn btn-primary">Add to basket</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import { item } from '~~/types'

export default defineNuxtComponent({
  components: {},
  props: {
    item: {
      type: Object as () => item,
      required: true
    }
  },
  setup () {
    return {}
  }
})
</script>
