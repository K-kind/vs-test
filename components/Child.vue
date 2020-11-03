<template>
  <div>
    <o-button @click="onClick">ボタン</o-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    seed: Number
  },
  setup: (props, context) => {
    const onClick = () => {
      context.emit('onClick', props.seed)
    }

    return {
      onClick
    }
  }
})
</script>
