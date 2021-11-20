<template lang="pug">
ul.list-group
  li.list-group-item.list-group-item-action(
    v-for="(task, index) in tasks",
    style="cursor: pointer",
    :key="index",
    @click="this.$router.push(`/tasks/${task._id}`)"
  ) {{ index + 1 }}. {{ task.title }}
</template>
<script lang="ts">
import { Task } from "@/interfaces/Task";
import { getTasks } from "@/Services/TaskService";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();
      this.tasks = res.data;
    },
  },
  mounted() {
    this.loadTasks();
  },
});
</script>