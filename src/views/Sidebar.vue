<template>
  <div>
    <h1>vue示例</h1>
    <div>
      <ul>
        <li>
          Example01
          <ul>
            <li>
              <router-link to="/h">
                helloworld
              </router-link>
            </li>
            <li>
              <router-link to="/example01">
                data & computed & methods & watch
              </router-link>
            </li>
          </ul>
        </li>

        <li>
          Example02
          <ul>
            <li>
              router传递参数
              <ul>
                <li>
                  <router-link to="/example02/students/45/homeworks/23">
                    students/45/homeworks/23
                  </router-link>
                </li>
                <li>
                  <router-link to="/example02/students/18/homeworks/18">
                    students/18/homeworks/18
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/example02/example02-01">
                setup() & interface & ref()
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
