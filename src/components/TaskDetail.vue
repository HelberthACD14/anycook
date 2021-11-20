<template lang="pug">
h1.text-center.mb-3 TaskDetail
.row.justify-content-center
  .col-md-6
    form(@submit.prevent="handleUpdate()").card.card-body
      input(type="text", v-model="currentTask.title").form-control.mb-3
      textarea(rows="3", v-model="currentTask.description").form-control.mb-3
      button.btn.btn-primary.mb-3 update
      button(@click="handleDelete()").btn.btn-danger delete
</template>
<script lang="ts">
import { Task } from "@/interfaces/Task";
import { getTask, updateTask, deleteTask } from "@/Services/TaskService";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  data() {
    return {
      currentTask: {} as Task,
    };
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id);
      this.currentTask = res.data;
    },
    async handleUpdate() {
      if (typeof this.$route.params.id === "string") {
        await updateTask(this.$route.params.id, this.currentTask);
        this.$router.push("/");
      }
    },
    async handleDelete() {
      if (typeof this.$route.params.id === "string") {
        await deleteTask(this.$route.params.id);
        this.$router.push("/");
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
});
</script>