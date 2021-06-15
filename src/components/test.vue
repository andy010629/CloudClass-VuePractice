<template>
  <div v-click-away="onClickAway">
   <button class="btn btn-secondary">test</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClickAway(event) {
      console.log(event)
    }
  }
}
</script>