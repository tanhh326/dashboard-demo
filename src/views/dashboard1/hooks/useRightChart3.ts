import { onBeforeUnmount, ref } from "vue";
import { EChartsOption } from "echarts";
import { generateNumbers } from "@/utils";

export default function () {
  const option = ref<EChartsOption>({});

  function refresh() {
    option.value = {
      xAxis: {},
      yAxis: {},
      series: [
        {
          symbolSize: 20,
          data: [
            generateNumbers(1, 10, 2),
            generateNumbers(1, 10, 2),
            generateNumbers(1, 10, 2),
            generateNumbers(1, 10, 2),
            generateNumbers(1, 10, 2),
            [8.07, 6.95],
            [13.0, 7.58],
            [14.0, 7.66],
            [13.4, 6.81],
            generateNumbers(1, 10, 2),
            generateNumbers(1, 10, 2),
            generateNumbers(1, 10, 2),
            generateNumbers(1, 10, 2),
            [11.5, 7.2],
            [3.03, 4.23],
            [1.05, 3.33],
            [4.05, 4.96],
            generateNumbers(1, 10, 2),
            generateNumbers(1, 10, 2),
            generateNumbers(1, 10, 2),
            generateNumbers(1, 10, 2),
            [5.02, 5.68],
          ],
          type: "scatter",
        },
      ],
    };
  }

  refresh();

  const timer = setInterval(() => {
    refresh();
  }, 3000);

  onBeforeUnmount(() => {
    clearInterval(timer);
  });

  return {
    option,
    refresh,
  };
}
