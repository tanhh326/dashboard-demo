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
      <div class="top-count-group">
        <div class="item">
          <div class="title">数据统计</div>
          <div class="number">200</div>
        </div>
        <div class="item">
          <div class="title">综合评分</div>
          <div class="number">99.2</div>
        </div>
        <div class="item">
          <div class="title">总体效能</div>
          <div class="number">8.9</div>
        </div>
        <div class="item">
          <div class="title">任务达成</div>
          <div class="number">86.2%</div>
        </div>
      </div>
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
@import "./index";
</style>
