<template>
  <div>
    <h1>异步加载</h1>
    <p>
      组件的延迟加载,基于webpack特性实现。许多组件在用户未操作时无需加载，因此可编译为单独的组件文件。
      这种文件代码的拆分可降低文件尺寸，提高渲染效率。
      <br />
      about组件将被编译为单独的组件文件，当符合条件，浏览器请求下载组件文件，渲染。
      通过defineAsyncComponent()函数声明延迟加载的组件，函数同时提供延迟时间，过渡组件等声明。
    </p>
    <button type="button" @click="show = !show">showabout</button>
    <br />
    <about v-if="show" />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

const about = defineAsyncComponent(() => import("@/views/Example03/about.vue"));

export default defineComponent({
  components: { about },
  data: () => ({
    show: false
  })
});
</script>
