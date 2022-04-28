<script setup>
import { onMounted } from 'vue'
import { useMenuStore } from '~/store/menu'

const store = useMenuStore()

const menu = computed(() => {
  return store.getMenu
})

onMounted(() => {
  store.fetchMenu()
})
</script>

<template>
  <div class="container">
    <h1>Menu page</h1>
    <div
      v-for="(category, categoryIndex) in menu"
      :key="categoryIndex"
      class="row"
    >
      <h2>{{ category.title }}</h2>
      <div
        v-for="(item, itemIndex) in category.items"
        :key="itemIndex"
        class="col-md-4"
      >
        <Item
          :item="{
            title: item.title,
            description: item.description,
            image_url: item.image_url,
          }"
        />
      </div>
    </div>
  </div>
</template>
