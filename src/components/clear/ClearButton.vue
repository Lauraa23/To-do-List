<template>
  <button class="clearButton" @click="clearAllTasks">
    <font-awesome-icon icon="far fa-trash-alt" />
  </button>
</template>
<script>
export default {
  methods: {
    clearAllTasks() {
      this.$emit("clear-all-tasks");
    },
  },
};
</script>

<style lang="scss" scoped src="./_ClearButton.scss"></style>
