import { nextTick, onMounted, ref } from 'vue'
import { InterfaceLayout } from './interface'
import {
  loadImg,
  getExif,
  resetImg,
  createImgStyle,
  translateStyle,
  loadFile,
  getCropImgData,
  detectionBoundary,
  setAnimation,
} from './common'
import cropperLoading from './loading'

import './style/index.scss'

interface InterfaceVueCropperProps {
  img: string
  wrapper: InterfaceLayout
}

const vueCropper = {
  // 名称
  name: 'vue-cropper',

  components: {
    cropperLoading
  },

  props: {
    img: String,
    wrapper: {
      type: Object,
      default: () => {
        return {
          width: '300px',
          height: '300px'
        }
      }
    }
  },

  // 组件处理
  setup(props: InterfaceVueCropperProps, { slots }: any) {
    // 图片加载loading
    const imgLoading = ref(false)

    // 真实图片渲染地址
    const imgs = ref('')

    // 检查图片, 修改图片为正确角度
    const checkedImg = async (url: string) => {
      imgLoading.value = true
      let img: HTMLImageElement
      // 首先去加载当前图片
      try {
        img = await loadImg(url)
      } catch (error) {
        imgLoading.value = false
        return false
      }
      imgs.value = url
      nextTick(() => {
        imgLoading.value = false
      })
    }


    onMounted(() => {
      if (props.img) {
        checkedImg(props.img)
      } else {
        imgs.value = ''
      }
      console.log('mounted', JSON.stringify(props))
    })

    return () => (
      <section 
        class="vue-cropper"
        style={props.wrapper}
      >
        {
          imgs.value ?
          <section class="cropper-box cropper-fade-in">
            {/* 图片展示框 */}
            <section class="cropper-box-canvas">
              <img src={imgs.value} alt="vue-cropper" />
            </section>
          </section>
          : ''
        }

        {/* 加载动画 */}
        <cropper-loading
          isVisible={imgLoading.value}
        >
        { slots.loading && slots.loading() }
        </cropper-loading>
      </section>
    )
  }
}

export default vueCropper