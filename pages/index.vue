<template>
  <div>
    <ul role="list">
      <li v-for="item in lists" :key="item.id">
        <List
          :link="{
            id: item.id,
            title: item.title,
            url: item.url,
          }"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { link } from '~/types'
export default {
  setup() {
    const lists = ref<link[]>([
      { id: 1, title: 'Livingston Menu', url: '/restaurants/livingston/menu' },
    ])
    return {
      lists,
    }
  },
}
</script>
