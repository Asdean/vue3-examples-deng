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

            <li>
              <router-link to="/example01-02">
                keep-alive
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

            <li>
              <router-link to="/example02/example02-02">
                composition-api
              </router-link>
            </li>

            <li>
              <router-link to="/example02/students/29/homeworks/35">
                students/29/homeworks/35
              </router-link>
            </li>

            <li>
              <router-link to="/example02/students/15/homeworks/20">
                students/15/homeworks/20
              </router-link>
            </li>
          </ul>
        </li>

        <li>
          Example03
          <ul>
            <li>
              <router-link to="/example03/example03-01">
                v-if & v-show
              </router-link>
            </li>

            <li>
              <router-link to="/example03/example03-02">
                v-bind
              </router-link>
            </li>

            <li>
              <router-link to="/example03/example03-03">
                v-for & v-on
              </router-link>
            </li>

            <li>
              <router-link to="/example03-04">
                AsyncComponent
              </router-link>
            </li>

            <li>
              v-model
              <ul>
                <li>
                  <router-link to="example04-01">
                    v-model
                  </router-link>
                </li>
                <li>
                  <router-link to="example04-02">
                    v-model:example
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
