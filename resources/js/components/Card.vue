<template>
  <div class="card">
    <div class="card-body">
      <h4 v-if="title" class="card-title">
        {{ title }}
        <br>
        <span class="mt-2 text-muted d-block" style="font-size: 0.9rem"> {{ subtitle }} </span>
      </h4>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    title: { type: String, default: null },
    subtitle: { type: String, default: null }
  }
}
</script>
