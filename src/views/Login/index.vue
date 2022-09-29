<template>
  <div>
    <van-nav-bar title="登陆" />

    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="mobile"
        label="手机号码"
        placeholder="请输入手机号码"
        :rules="[{ required: true, message: '请填写正确手机号码', pattern: /^1[3-9]\d{9}$/ }]"
      />
      <van-field
        v-model="user.code"
        type="password"
        name="code"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写正确密码', pattern: /^\d{6}$/ }]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          :disabled="isLoading"
          native-type="submit"
          :loading="isLoading"
          loading-text="加载中..."
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Notify } from 'vant'
import { loginAPI } from '@/api'
import { setToken } from '@/utils/token.js'
export default {
  name: 'login-index',
  data() {
    return {
      user: {
        mobile: '18807578888',
        code: '246810'
      },
      isLoading: false
    }
  },
  methods: {
    // 登陆发起请求
    async onSubmit() {
      this.isLoading = true
      try {
        const { data: res } = await loginAPI(this.user)
        console.log(res)
        setToken(res.data.token)
        Notify({ type: 'success', message: '登录成功' })
        // 登陆成功跳转到首页
        this.$router.replace({
          path: '/layout/home'
        })
      } catch (error) {
        Notify({ type: 'danger', message: '验证码错误' })
      }
      this.isLoading = false
    }
  }
}
</script>

<style></style>
