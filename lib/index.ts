import vueCropper from './vue-cropper'

declare global {
  interface Window {
    Vue: any,
    requestAnimationFrame: any,
  }
}

// 兼容性处理
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (fn: Function) => {
    return setTimeout(fn, 17)
  }
}
if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = id => {
    clearTimeout(id)
  }
}

const install = (Vue: any) => {
  Vue.component('VueCropper', vueCropper)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { vueCropper }

export default {
  version: '1.0.0',
  install,
  vueCropper,
}
