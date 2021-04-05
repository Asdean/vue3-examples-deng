<template>
  <div>
    <h1>homework01</h1>
    <hr />
    <br />

    <div>
      <p>
        <span :style="{ color: point >= creditsSum ? `green` : `red` }">
          {{ point }}
        </span>
        <span>/</span>
        <span>{{ creditsSum }}</span>
      </p>
      <div class="border">
        <template v-for="(c, index) of courses" :key="index">
          <label>
            <input type="checkbox" v-model="selectedCourses" :value="c" />
            {{ c.name }} - {{ c.point }} ({{ c.term }})
          </label>
          <br />
        </template>
      </div>
      <div class="border">
        <template v-for="(c, index) of selectedCourses" :key="index">
          {{ c.name }} - {{ c.point }} ({{ c.term }})
          <br />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { listCourses } from "@/datasource/homework01";
import { Course } from "@/datasource/homework01";
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const creditsSum = 12;
    const sort = () => {
      return listCourses().sort((a, b) => a.term - b.term);
    };
    const courses = ref<Course[]>(sort());
    const selectedCourses = ref<Course[]>([]);
    const point = computed(() => {
      let count = 0;
      selectedCourses.value.forEach(c => {
        count = count + c.point;
      });
      return count;
    });
    watch(selectedCourses, () => {
      selectedCourses.value.sort((a, b) => a.term - b.term);
    });
    return {
      creditsSum,
      courses,
      selectedCourses,
      point
    };
  }
});
</script>
<style scoped>
.border {
  border: 1px red solid;
  display: inline-block;
}
</style>
