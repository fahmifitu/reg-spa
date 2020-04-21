<template>
  <div class="card">
    <div class="card-body">
      <h4 v-if="title" class="card-title">
        {{ title }}
      </h4>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    title: { type: String, default: null }
  }
}
</script>
