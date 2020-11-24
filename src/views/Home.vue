<template>
  <section class="page-home">
    <p>home</p>
    <vue-cropper
      ref="cropper"
      :img="options.img"
      :wrapper="options.wrapper"
    >
      <template v-slot:loading>
        <p name="loading">加载中..</p>
      </template>
    </vue-cropper>
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
      img: 'http://cdn.xyxiao.cn/goodboy.jpg',
      wrapper: {
        width: '400px',
        height: '400px'
      }
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
