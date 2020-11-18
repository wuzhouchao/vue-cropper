<template>
  <section class="page-home">
    <p>home</p>
    <vue-cropper
      ref="cropper"
      :img="options.img"
    ></vue-cropper>
  </section>
</template>

<script lang="ts">
import { vueCropper } from '../../lib/index'
import { onMounted, ref } from 'vue';

export default {
  components: {
    vueCropper
  },
  setup() {
    const options = ref({
      img: 'http://cdn.xyxiao.cn/goodboy.jpg'
    })

    onMounted(() => {
      console.log('vue-cropper', vueCropper)
    })

    return {
      options
    }
  }
}
</script>
