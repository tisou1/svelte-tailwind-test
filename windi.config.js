import { defineConfig  } from 'windicss/helpers'

export default defineConfig ({
  theme: {
    //覆盖默认值
    //断点
    // screens: {
   
    // },
    //间距
    // spacing: {
    //   '1':'2px',
    //   '2':'4px',
    //   '3':'8px',
    //   '4':'12px',
    //   '5':'16px',
    //   '6':'24px',
    // },
    //颜色
    // colors: {

    // },

    //扩展,加入一些自定义的东西
    extend: {
      colors: {
        bg1: '#f8f8f8',
      },
      spacing: {
        
      },
   
    }
  }
})