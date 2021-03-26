<template>
  <div>
    <h1>v-for</h1>
    <ul>
      <li v-for="c of courses" :key="c.id">
        <router-link to="`/courses/${ c.id }`">{{ c.name }}</router-link>
      </li>
    </ul>

    <hr />
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>name</td>
          <td>createTime</td>
          <td>opreation</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(c, index) of courses" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ c.name }}</td>
          <td>{{ formatDate(c.createTime) }}</td>
          <td>
            <button type="button" @click="removeItem(index)">remove</button>
          </td>
        </tr>
      </tbody>
    </table>

    <button type="button" @click="addItem">add</button>
  </div>
</template>

<script lang="ts">
import { listCourses } from "@/datasource/DataSource";
import { Course } from "@/datasource/Types";
import { computed, defineComponent, Ref, ref } from "vue";

function useDateFormat() {
  const formatDate = computed(() => (date: string) =>
    date.replace("T", " ").substring(0, 16)
  );
  return {
    formatDate
  };
}

function useCourses(courses: Ref<Course[]>) {
  const addItem = () => {
    courses.value.push({
      id: courses.value.length + 1,
      name: "vue 3.0",
      createTime: new Date().toISOString()
    });
  };
  const removeItem = (index: number) => {
    courses.value.splice(index, 1);
  };
  return {
    addItem,
    removeItem
  };
}

export default defineComponent({
  setup() {
    const courses: Ref<Course[]> = ref(listCourses());
    const { formatDate } = useDateFormat();
    const { addItem, removeItem } = useCourses(courses);
    return {
      courses,
      formatDate,
      addItem,
      removeItem
    };
  }
});
</script>
