<template>
  <o-row type="flex" justify="center">
    <o-col :span="20" :md="10">
      <o-card class="card">
        <template #header>ログイン</template>
        <o-form
          ref="ruleForm"
          v-model="form"
          :rules="rules"
          label-position="top"
        >
          <o-form-item label="メールアドレス">
            <o-input v-model="form.email" />
          </o-form-item>
          <o-form-item label="パスワード">
            <o-input v-model="form.password" />
          </o-form-item>
          <div class="btn-wrapper">
            <o-button @click="login">ログイン</o-button>
          </div>
        </o-form>
      </o-card>
    </o-col>
  </o-row>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  useContext
} from '@nuxtjs/composition-api'
export default defineComponent({
  setup: () => {
    const state = reactive({
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          {
            required: true,
            message: 'メールアドレスを入力してください',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'メールアドレスが無効です',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'パスワードを入力してください',
            trigger: 'blur'
          }
        ]
      }
    })

    const ruleForm = ref(null)
    const { $axios } = useContext()

    const login = async () => {
      ruleForm.validate(valid => {
        if (valid) {
          console.log('valid')
        }
      })
      const response = await $axios.get('/hoge')
      console.log(response)
    }

    return {
      ...toRefs(state),
      login
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  margin-top: 36px;
}
.el-form-item__label {
  line-height: 16px;
}
.btn-wrapper {
  .el-button {
    display: block;
    width: 100%;
  }
}
</style>
