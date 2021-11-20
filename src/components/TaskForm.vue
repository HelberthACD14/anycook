<template lang="pug">
.row.justify-content-center
  .col-md-6
    h1.text-center.mb-4 Create a task
    form(@submit.prevent="saveTask()").card.card-body
      input(type="text", placeholder="Write a title", v-model="task.title", autofocus).form-control.mb-3
      textarea(
        rows="3",
        placeholder="Write a description",
        v-model="task.description"
      ).form-control.mb-3
      button(:disabled="!task.title || !task.description").btn.btn-primary Save
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interfaces/Task";
import { createTask } from "@/Services/TaskService";

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async saveTask() {
      const res = await createTask(this.task);
      console.log(res);
      this.$router.push({name: 'tasks'})
    },
  },
});
</script>
