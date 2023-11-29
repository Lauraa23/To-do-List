<template>
  <div class="addedTask">
    <input
      class="addedTask__new"
      type="text"
      placeholder="New Task..."
      v-model="taskName"
      v-on:keyup.enter="addTask"
    />
    <BListGroupItem
      class="addedTask__list"
      v-for="(task, index) in tasks"
      :key="index"
    >
      <div class="addedTask__list__icons">
        <span v-on:click="updateTask(index)">
          <font-awesome-icon
            :icon="task.state ? 'fas fa-check-circle' : 'far fa-circle'"
          />
        </span>
        {{ task.name }}
        <span v-on:click="clearTask(index)">
          <font-awesome-icon icon="far fa-trash-alt" />
        </span>
      </div>
    </BListGroupItem>
    <ClearButton class="addedTask__button" @click="clearAllTasks()" />
  </div>
</template>
<script>
import ClearButton from "../clear/ClearButton.vue";

export default {
  components: { ClearButton },
  data() {
    return {
      tasks: [],
      taskName: "",
    };
  },
  methods: {
    addTask() {
      const task = {
        name: this.taskName,
        state: false,
      };
      this.tasks.push(task);
      this.taskName = "";
    },
    clearTask(index) {
      this.tasks.splice(index, 1);
    },
    updateTask(index) {
      this.tasks[index].state = !this.tasks[index].state;
    },
    clearAllTasks() {
      this.tasks = [];
    },
  },
  components: { ClearButton },
};
</script>

<style lang="scss" scoped src="./_TaskList.scss"></style>
