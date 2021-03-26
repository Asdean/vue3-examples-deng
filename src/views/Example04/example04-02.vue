<template>
  <div>
    <p>
      与视图元素的绑定与vue2完全不同。需要声明元素，以及绑定函数，在视图元素通过:ref绑定函数
    </p>
    <p>
      需求：必须同意条款才能选择操作以及提交；必须选择2项才能提交；等于2项时checkbox变为不可用状态
    </p>
    <form>
      <label>
        <input type="checkbox" v-model="agreed" />
        同意条款
      </label>
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input
            type="checkbox"
            :ref="chRefs"
            v-model="coursesRefs"
            :disabled="!agreed"
            :value="{ id: c.id }"
          />
          {{ c.name }}
        </label>
        <br />
      </template>
      <button type="button" :disabled="!agreed || coursesRefs.length < amount">
        提交
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { listCourses } from "@/datasource/DataSource";
import { Course } from "@/datasource/Types";
import { defineComponent, ref, watch } from "vue";

const selectedCourses: Course[] = [{ id: 7 }];

export default defineComponent({
  setup() {
    const checkboxs: HTMLInputElement[] = [];
    const chRefs = (el: HTMLInputElement) => {
      return checkboxs.push(el);
    };
    const amount = 2;
    const coursesRefs = ref<Course[]>(selectedCourses);
    const agreed = ref(false);
    const courses = listCourses();
    watch(coursesRefs, () => {
      const checkboxDis = coursesRefs.value.length >= amount;
      checkboxs
        .filter(c => !c.checked)
        .forEach(c => (c.disabled = checkboxDis));
    });
    return {
      checkboxs,
      chRefs,
      amount,
      coursesRefs,
      agreed,
      courses
    };
  }
});
</script>
