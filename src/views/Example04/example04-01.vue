<template>
  <div>
    <h1>v-model双向绑定</h1>
    <form>
      <input type="text" v-model="user.name" />
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="male" />
        男
      </label>
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="female" />
        女
      </label>

      <hr />

      <select v-model="user.title">
        <option v-for="(t, index) of titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>

      <hr />

      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="user.courses" :value="{ id: c.id }" />
          {{ c.name }}
        </label>
        <br />
      </template>

      <hr />

      <button>提交</button>
    </form>

    <hr />

    <p>{{ user }}</p>

    <hr />

    <input type="file" @click="fileChange($event.target.files[0])" />
    <br />
    <p>{{ file.filename }} / {{ file.filesize }}</p>
  </div>
</template>

<script lang="ts">
import { listCourses, listTitles } from "@/datasource/DataSource";
import { User } from "@/datasource/Types";
import { defineComponent, Ref, ref } from "vue";

interface VFile {
  filename: string;
  filesize: string;
}

function useFile(file: Ref<VFile>) {
  const fileChange = (f: File) => {
    console.log(f);
    file.value.filename = f.name;
    file.value.filesize = `${(f.size / 1024 / 1024).toFixed(2)}MB`;
  };
  return { fileChange };
}

export default defineComponent({
  setup() {
    const user = ref<User>({ courses: [] });
    const file = ref({ filename: "", filesize: "" });
    const titles = listTitles();
    const courses = listCourses();
    const { fileChange } = useFile(file);
    return {
      user,
      file,
      titles,
      courses,
      fileChange
    };
  }
});
</script>
