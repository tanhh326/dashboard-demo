<script lang="ts" setup>
import { computed, ref } from "vue";

const animationSvgRef = ref();

const config = {
  count: 16,
  initR: 2,
  gap: 0.2,
  dur: 8,
  startY: 266.5,
};

function generateNumber() {
  return (Math.random() * 10).toFixed(1) + "Mb/s";
}

const polylineComputed = computed(() => {
  const arr = [];
  let startY = config.startY;
  for (let p = 0; p < 5; p++) {
    let startX = 465;
    let endX = 1820;
    const points = `${startX},${startY} 846,${startY} 1280,634 ${endX},634`;

    const textY = startY - 29.5;
    const text1 = { x: startX + 137, y: textY, value: `${generateNumber()}` };
    const text2 = {
      x: startX + 137 + 147,
      y: textY,
      value: `${generateNumber()}`,
    };
    const text3 = {};

    const value = {
      points,
      text1,
      text2,
      text3,
    };
    arr.push(value);
    startY += 180;
  }
  return arr;
});

const circleComputed = computed(() => {
  const circles = [];
  let startY = config.startY;
  for (let p = 0; p < 5; p++) {
    let startX = 465;
    let endX = 1820;
    for (let i = 1; i < config.count; i++) {
      const r = config.initR + i * config.gap;
      startX += r * 2;
      for (let j = config.count - i; j > 0; j--) {
        endX -= (config.initR + j * config.gap) * 2;
      }
      const circle = {
        r: r.toFixed(1),
        startX,
        startY,
        endX,
      };
      circles.push(circle);
      endX = 1820;
    }
    startY += 180;
  }
  return circles;
});
</script>

<template>
  <div class="panel">
    <div class="panel__title">xx年xx月xx日拍卖会</div>
    <div class="bg__circle"></div>
    <div class="bg__arrow"></div>
    <div class="icon-group__small">
      <div>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
    <svg ref="animationSvgRef" class="flow-svg">
      <template v-for="{ points, text1, text2 } in polylineComputed">
        <polyline :points="points" />
        <text :x="text1.x" :y="text1.y">{{ text1.value }}</text>
        <text :x="text2.x" :y="text2.y">{{ text2.value }}</text>
      </template>
      <g class="rotate-text">
        <text transform="translate(1072.32,440) rotate(40.88)">
          {{ generateNumber() }}
        </text>
        <text transform="translate(1026.45,512) rotate(23.58)">
          {{ generateNumber() }}
        </text>
        <text transform="translate(1009,616)">{{ generateNumber() }}</text>
        <text transform="translate(1029,720) rotate(-22.33)">
          {{ generateNumber() }}
        </text>
        <text transform="translate(1055,800) rotate(-36.13)">
          {{ generateNumber() }}
        </text>
      </g>
      <g class="merge-text">
        <text x="1358" y="586">{{ generateNumber() }}</text>
        <text x="1530" y="586">{{ generateNumber() }}</text>
        <text x="1702" y="586">{{ generateNumber() }}</text>
      </g>
      <template v-for="circle in circleComputed">
        <circle :r="circle.r" class="ball">
          <animateMotion
            :dur="`${config.dur}s`"
            :path="`M ${circle.startX},${circle.startY} L 846,${circle.startY}  L 1280,634 L ${circle.endX},634`"
            repeatCount="indefinite"
          />
        </circle>
      </template>
    </svg>
    <div class="box-group">
      <div class="box">
        <div class="left">
          <div>总异常数: 0</div>
          <div>在线人数: 0</div>
          <div>请求延时: 0.000</div>
        </div>
        <div class="middle"></div>
        <div class="right">
          <div>总异常数: 0</div>
          <div>重传率: 0.000%</div>
          <div class="score">
            <div class="active"></div>
            <div class="active"></div>
            <div class="active"></div>
            <div class="active"></div>
            <div></div>
            <div>4</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="left">
          <div>总异常数: 0</div>
          <div>在线人数: 0</div>
          <div>请求延时: 0.000</div>
        </div>
        <div class="middle"></div>
        <div class="right">
          <div>总异常数: 0</div>
          <div>重传率: 0.000%</div>
          <div class="score">
            <div class="active"></div>
            <div class="active"></div>
            <div></div>
            <div></div>
            <div></div>
            <div>2</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="left">
          <div>总异常数: 0</div>
          <div>在线人数: 0</div>
          <div>请求延时: 0.000</div>
        </div>
        <div class="middle"></div>
        <div class="right">
          <div>总异常数: 0</div>
          <div>重传率: 0.000%</div>
          <div class="score">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>0</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="left">
          <div>总异常数: 0</div>
          <div>在线人数: 0</div>
          <div>请求延时: 0.000</div>
        </div>
        <div class="middle"></div>
        <div class="right">
          <div>总异常数: 0</div>
          <div>重传率: 0.000%</div>
          <div class="score">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>0</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="left">
          <div>总异常数: 0</div>
          <div>在线人数: 0</div>
          <div>请求延时: 0.000</div>
        </div>
        <div class="middle"></div>
        <div class="right">
          <div>总异常数: 0</div>
          <div>重传率: 0.000%</div>
          <div class="score">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>0</div>
          </div>
        </div>
      </div>
    </div>
    <div class="chart-group">
      <div>
        <div class="chart chart__low">
          <div class="desc">总流量(Mb/s)</div>
        </div>
        <div class="value">0.89</div>
      </div>
      <div>
        <div class="chart chart__middle">
          <div class="desc">平均响应延迟(ms)</div>
        </div>
        <div class="value">0.125</div>
      </div>
      <div>
        <div class="chart chart__high">
          <div class="desc">平均重传率(%)</div>
        </div>
        <div class="value">0.852</div>
      </div>
    </div>
    <div class="icon-group__large">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./index";
</style>
