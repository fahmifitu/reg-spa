<template>
  <div class="card">
    <div class="loading-container" v-if="loading">
      <div class="loading"></div>
    </div>
    <div class="card-body">
      <h4 v-if="title" class="card-title">
        {{ title }}
        <br>
        <span class="mt-2 d-block" style="font-size: 0.9rem; font-weight:400"> {{ subtitle }} </span>
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
    subtitle: { type: String, default: null },
    loading: { type: Boolean, default: false },
  }
}
</script>
<style>
  .loading-container {
    border-radius: 15px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1000;
    opacity: 0.6;
  }
  .loading {
    position: static;
  }
</style>
