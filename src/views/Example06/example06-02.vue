<template>
  <div>
    <h1>传参</h1>
    <p>
      方法二，单实例。用户未必一定使用子组件，父组件通过v-if延迟加载按钮组件。
      子组件为全部模态框，无需隐藏模态框，由父组件控制是否展示。但子组件必须修改父组件的展示属性变量。
      而子组件无法直接修改父组件数据，即使传入也无法修改。
      <br />
      子组件通过emit()发出指定的事件通知，父组件注册指定事件通知，调用函数在父组件自己改变自己的数据.
    </p>
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
          <td>
            <button
              class="btn"
              @click="
                courseEdit = c;
                active = true;
              "
            >
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <p>{{ courseEditName }}</p>
    <editbutton02
      v-if="active"
      :course="courseEdit"
      @emitClose="active = false"
      @emitSubmit="onemitSubmit"
    />
  </div>
</template>

<script lang="ts">
import { Store, useStore } from "vuex";
import { computed, defineAsyncComponent, defineComponent, Ref, ref } from "vue";
import { State } from "@/store";
import { LIST_COURSES } from "@/store/VuexTypes";
import { listCourses } from "@/datasource/DataSource";
import { Course } from "@/datasource/Types";
const editbutton02 = defineAsyncComponent(() => import("./editbutton-02.vue"));

export default defineComponent({
  components: { editbutton02 },
  setup() {
    const store: Store<State> = useStore();
    store.dispatch(LIST_COURSES, listCourses());
    const courses = computed(() => store.state.courses);
    const active = ref(false);
    const courseEditName = ref("");
    const courseEdit: Ref<Course> = ref({});
    const onemitSubmit = (name: string) => {
      active.value = false;
      courseEditName.value = name;
    };
    return {
      courses,
      active,
      courseEdit,
      courseEditName,
      onemitSubmit
    };
  }
});
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 10px 10px;
  margin: 2px;
  color: white;
  background: gray;
  font-size: 1rem;
  border-radius: 3px;
  cursor: pointer;
  border: none;
}
</style>
