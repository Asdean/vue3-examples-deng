<template>
  <div>
    <h1>传参</h1>
    <p></p>
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>name</td>
          <td>createTime</td>
          <td>operation</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(c, index) in courses" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            {{ c.name }}
          </td>
          <td>{{ c.createTime }}</td>
          <td><editbutton01 :course="c" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Store, useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { State } from "@/store";
import { LIST_COURSES } from "@/store/VuexTypes";
import { listCourses } from "@/datasource/DataSource";
import editbutton01 from "./editbutton-01.vue";

export default defineComponent({
  components: { editbutton01 },
  setup() {
    const store: Store<State> = useStore();

    store.dispatch(LIST_COURSES, listCourses());
    const courses = computed(() => store.state.courses);
    return {
      courses
    };
  }
});
</script>
