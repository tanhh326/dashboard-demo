import { onBeforeUnmount, ref } from "vue";
import { EChartsOption } from "echarts";
import { generateNumbers } from "@/utils";

export default function () {
  const option = ref<EChartsOption>({});

  function refresh() {
    option.value = {
      xAxis: {
        type: "category",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: generateNumbers(1, 300, 7),
          type: "line",
        },
        {
          data: generateNumbers(1, 300, 7),
          type: "line",
        },
        {
          data: generateNumbers(1, 300, 7),
          type: "line",
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
