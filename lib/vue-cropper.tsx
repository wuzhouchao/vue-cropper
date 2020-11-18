import { onMounted, ref } from 'vue'
import { InterfaceLayout } from './interface'

import './style/index.scss'

interface vueCropperProps {
  img: string
  wrapper: InterfaceLayout
}
const vueCropper = {
  // 名称
  name: 'vue-cropper',

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
  setup(props: vueCropperProps) {

    const isLoading = ref(false)

    onMounted(() => {
      console.log('mounted', props)
    })

    return () => (
      <section 
        class="vue-cropper"
        style={props.wrapper}
      >
        {/* 加载动画 */}
        {isLoading ? (
          <section class="cropper-loading">
            <p class="cropper-loading-spin">
              <i>
                <svg
                  viewBox="0 0 1024 1024"
                  focusable="false"
                  data-icon="loading"
                  width="1.5em"
                  height="1.5em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
                </svg>
              </i>
              <span />
            </p>
          </section>
        ) : (
          ''
        )}
      </section>
    )
  }
}

export default vueCropper