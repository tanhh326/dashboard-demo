<script lang="ts" setup>
import useLeftChart1 from "./hooks/useLeftChart1";
import SwitchPageBtn from "./components/btn";
import { ref } from "vue";
import useMap from "@/hooks/useMap";
import useLeftChart2 from "./hooks/useLeftChart2";
import useLeftChart3 from "./hooks/useLeftChart3";
import useRightChart1 from "./hooks/useRightChart1";
import useRightChart2 from "./hooks/useRightChart2";
import useRightChart3 from "./hooks/useRightChart3";
import useLayerStack from "@/hooks/useLayerStack";

const leftChart1 = useLeftChart1();
const leftChart2 = useLeftChart2();
const leftChart3 = useLeftChart3();
const rightChart1 = useRightChart1();
const rightChart2 = useRightChart2();
const rightChart3 = useRightChart3();
const currentTab = ref<number>(1);

const { mapInstance } = useMap("mapContainer");

useLayerStack(mapInstance);

function switchPage(tab: number) {
  currentTab.value = tab;
}

const tabs = {
  left: [
    { id: 1, text: "数据统计" },
    { id: 2, text: "数据统计" },
    { id: 3, text: "数据统计" },
  ],
  right: [
    { id: 4, text: "数据统计" },
    { id: 5, text: "数据统计" },
    { id: 6, text: "数据统计" },
  ],
};
</script>

<template>
  <div class="dashboard">
    <video
      autoplay
      class="background"
      loop
      muted
      preload="auto"
      src="./assets/循环背景动画.mp4"
    ></video>
    <div class="main">
      <div class="btn-group">
        <div class="left">
          <SwitchPageBtn
            v-for="tab in tabs.left"
            :active="currentTab === tab.id"
            :text="tab.text"
            direction="left"
            @click="switchPage(tab.id)"
          />
        </div>
        <div class="right">
          <SwitchPageBtn
            v-for="tab in tabs.right"
            :active="currentTab === tab.id"
            :text="tab.text"
            direction="right"
            @click="switchPage(tab.id)"
          />
        </div>
      </div>
      <div class="center">
        <div class="left">
          <div class="card-1">
            <div class="title">数据统计</div>
            <TChart :option="leftChart1.option" />
          </div>
          <div class="card-2">
            <div class="title">数据统计</div>
            <TChart :option="leftChart2.option" />
          </div>
          <div class="card-3">
            <div class="title">数据统计</div>
            <TChart :option="leftChart3.option" />
          </div>
        </div>
        <div class="middle">
          <div id="mapContainer" />
        </div>
        <div class="right">
          <div class="card-1">
            <div class="title">数据统计</div>
            <TChart :option="rightChart1.option" />
          </div>
          <div class="card-2">
            <div class="title">数据统计</div>
            <TChart :option="rightChart2.option" />
          </div>
          <div class="card-3">
            <div class="title">数据统计</div>
            <TChart :option="rightChart3.option" />
          </div>
        </div>
      </div>
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
    url("./assets/底部动画.png"), url("./assets/头部动画_左侧点.webp"),
    url("./assets/头部动画_左侧点.png"), url("./assets/头部动画_右侧点.webp"),
    url("./assets/头部动画_右侧点.png");
  background-position:
    top,
    top,
    center,
    bottom,
    bottom,
    left top,
    left top,
    right top,
    right top;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat,
    no-repeat, no-repeat;
  background-size:
    100%,
    100%,
    100% 100%,
    100%,
    100%,
    auto,
    auto,
    auto,
    auto;

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

.main {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;

  .btn-group {
    position: absolute;
    top: 5%;
    display: flex;
    justify-content: center;
    left: 50%;
    gap: 100%;
    transform: translateX(-50%);

    .left {
      display: flex;
      justify-content: space-between;
      gap: 30px;
    }

    .right {
      display: flex;
      justify-content: space-between;
      gap: 30px;
    }
  }

  .center {
    height: 100%;
    display: flex;

    .middle {
      #mapContainer {
        margin-top: 10%;
        width: 100%;
        height: 80%;
      }
    }

    [class^="card-"] {
      width: 100%;
      position: relative;
      background-image: url("./assets/01.webp"), url("./assets/01.png"),
        url("./assets/标题1_静态背景.png");
      background-repeat: no-repeat;
      background-size: 100%;

      .title {
        font-weight: bold;
        background-image: -webkit-linear-gradient(
          top,
          rgb(157, 195, 234),
          #fff,
          rgb(96, 162, 225)
        );
        user-select: none;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 30px;
        margin-left: 80px;
        color: #fff;
        font-size: 18px;
      }
    }

    .middle {
      width: 50%;
      height: 100%;
    }

    .left {
      padding-left: 30px;
    }

    .right {
      padding-right: 30px;
    }

    .left,
    .right {
      width: 25%;
      height: 100%;

      .card-1 {
        height: 300px;
        top: 10%;
      }

      .card-2 {
        height: 300px;
        top: 10%;
      }

      .card-3 {
        height: 300px;
        top: 10%;
      }
    }
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
}
</style>
