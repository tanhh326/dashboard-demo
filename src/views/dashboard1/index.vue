<script lang="ts" setup>
import useLeftChart1 from "./hooks/useLeftChart1";

const leftChart1 = useLeftChart1();
</script>

<template>
  <div class="dashboard">
    <video
      autoplay
      class="background"
      loop
      muted
      src="./assets/循环背景动画.mp4"
    ></video>
    <div class="content">
      <TChart :option="leftChart1.option" />
      <div class="center"></div>
      <div class="base-group">
        <div class="base">
          <div class="name">当日销量</div>
          <div class="number">52</div>
        </div>
        <div class="base">
          <div class="name">本月销量</div>
          <div class="number">188</div>
        </div>
        <div class="base">
          <div class="name">今年销量</div>
          <div class="number">2660</div>
        </div>
        <div class="base">
          <div class="name">总销量</div>
          <div class="number">99999</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.dashboard {
  width: 1980px;
  height: 1080px;
  position: relative;
  background-image: url("./assets/头部动画.webp"), url("./assets/头部动画.png"),
    url("./assets/整体边框_静态图片.png"), url("./assets/底部动画.webp"),
    url("./assets/底部动画.png");
  background-position: top, top, center, bottom, bottom;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
  background-size:
    100%,
    100%,
    100% 100%,
    100%,
    100%;

  &:before {
    content: "数据可视化大屏展示系统";
    color: #fff;
    letter-spacing: 12px;
    font-size: 36px;
    line-height: 70px;
    width: 100%;
    font-weight: bold;
    position: absolute;
    text-align: center;
  }
}

.background {
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}

.base-group {
  display: flex;
  gap: 30%;
  justify-content: center;
  bottom: 4%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  .base {
    text-align: center;
    background-image: url("./assets/底座_静态图片.png"),
      url("./assets/上升粒子1.webp"), url("./assets/上升粒子1.png"),
      url("./assets/上升粒子2.webp"), url("./assets/上升粒子2.png");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100px;
    width: 100px;
    font-weight: 600;

    .name {
      color: rgb(79, 173, 225);
      transform: skew(-12deg);
    }

    .number {
      font-size: 1.5rem;
      color: rgb(126, 181, 246);
    }

    &:after {
      content: "";
      height: 100px;
      width: 100px;
      display: block;
      background-repeat: no-repeat;
      background-size: 100%;
      background-image: url("./assets/底座_圆形_静态图片.png");
      transform-origin: center;
      transform: rotateX(-65deg);
      scale: 1.5;
      @keyframes rotateAnimation {
        0% {
          transform: translateY(-30px) rotateX(-65deg) rotate(0deg);
        }
        100% {
          transform: translateY(-30px) rotateX(-65deg) rotate(360deg);
        }
      }
      animation: rotateAnimation 3s infinite linear;
    }
  }
}
</style>
