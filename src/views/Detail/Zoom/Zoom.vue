<template>
  <div class="spec-preview">
    <img :src="imgUrl" />
    <div class="event" ref="event" @mousemove="handleMove"></div>
    <div class="big">
      <img :src="bigImgUrl" ref="bigImg" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'Zoom',
  props: {
    imgUrl: String,
    bigImgUrl: String,
  },
  mounted() {
    //获取蒙版的宽度 该数据获取一次
    this.maskWidth = this.$refs.event.clientWidth / 2;
    // console.log(this.maskWidth);
  },
  methods: {
    //移入
    handleMove(e) {
      //鼠标的坐标
      const { offsetX, offsetY } = e;
      // console.log(offsetX, offsetY);
      //获取蒙版的宽度
      const maskWidth = this.maskWidth;
      //蒙版对象
      const maskDiv = this.$refs.mask;
      //获取大图对象
      const bigImg = this.$refs.bigImg;
      let left = 0;
      let top = 0;
      left = offsetX - maskWidth / 2;
      top = offsetY - maskWidth / 2;
      left = left < 0 ? 0 : left > maskWidth ? maskWidth : left;
      top = top < 0 ? 0 : top > maskWidth ? maskWidth : top;
      //蒙版移动的位置
      maskDiv.style.left = left + 'px';
      maskDiv.style.top = top + 'px';
      //大图的位置
      bigImg.style.left = -left * 2 + 'px';
      bigImg.style.top = -top * 2 + 'px';
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>