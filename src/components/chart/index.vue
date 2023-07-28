<script lang="ts" setup>
import { nextTick, onMounted, ref, watch } from "vue";
import * as echarts from "echarts";
import { EChartsOption } from "echarts";

let chart: echarts.ECharts;

const chartRef = ref<HTMLElement | undefined>();

const props = defineProps({
  option: {
    type: Object as () => EChartsOption | {},
    required: true,
  },
});

watch(
  props.option,
  async (value) => {
    await nextTick(() => {
      if (chart) {
        chart.clear();
        chart.setOption(value);
      }
    });
  },
  { immediate: true, deep: true },
);

onMounted(() => {
  chart = echarts.init(chartRef.value, "t-theme");
});
</script>

<template>
  <div ref="chartRef" class="t-chart" />
</template>

<style scoped>
.t-chart {
  width: 100%;
  height: 100%;
}
</style>
