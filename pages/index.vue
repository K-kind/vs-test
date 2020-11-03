<template>
  <div class="container">
    <div>
      <div>
        <span>カウント: {{ count }}</span>
        <Child :seed="Number(seed)" @onClick="countUp" />
        <o-input v-model.number="seed" />
      </div>
      <h1 v-if="true" id="hoge" class="title">vs-test2</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub hoge hoge hoge hoge
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'

type State = {
  count: number
  seed: number
}
export default defineComponent({
  setup: () => {
    const state = reactive<State>({
      count: 0,
      seed: 1
    })
    const countUp = (num: number) => {
      state.count += num
    }

    return {
      countUp,
      ...toRefs(state)
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  color: #aaa;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.ng {
  width: calc(100% - 20px);
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
