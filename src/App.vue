<template>
  <div id="nav">
    <Sidebar id="sidebar" />
    <router-view id="router" :key="$route.path" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "@/views/Sidebar.vue";

export default defineComponent({
  components: { Sidebar }
});
</script>

<style scoped>
#nav {
  display: flex;
}
#sidebar {
  width: 30%;
  border: 1px red solid;
  padding: 10px;
}
#router {
  width: 70%;
  border: 1px red solid;
  padding: 40px;
}
</style>
