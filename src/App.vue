<template>
  <div></div>
</template>

<script>
import { getAllChannelsAPI } from '@/api'
export default {
  async created() {
    try {
      const { data: res } = await getAllChannelsAPI()
      console.log(res)
    } catch (error) {
      console.dir(error)
    }
  }
}
</script>

<style></style>
