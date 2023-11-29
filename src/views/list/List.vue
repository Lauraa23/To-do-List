<template>
  <div class="list">
    <h1 class="list__title">To-Do-List</h1>
    <div class="list__content">
      <div class="list__content__add">
        <TaskList ref="taskList" class="list__content__add__items" />
      </div>
    </div>
  </div>
</template>
<script>
import TaskList from "../../components/tasks/TaskList.vue";

export default {
  components: { TaskList },
};
</script>
<style lang="scss" scoped src="./_List.scss"></style>
