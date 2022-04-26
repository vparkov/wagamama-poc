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
    <div v-for="category in menu" class="row">
      <h2>{{ category.title }}</h2>
      <div v-for="item in category.items" class="col-md-4">
        <div class="card">
          <img :src="item.image_url" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ item.title.substring(0, 15) }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <a href="#" class="btn btn-primary">Add to basket</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img {
  width: 200px;
}

.title {
  font-weight: bold;
  font-size: medium;
}
</style>
