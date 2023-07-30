import { onBeforeUnmount, ref } from "vue";
import { EChartsOption } from "echarts";
import { generateNumbers } from "@/utils";

export default function () {
  const option = ref<EChartsOption>({});

  function refresh() {
    option.value = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        top: "5%",
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 2,
        },
      },
      grid: {
        left: "10%",
        bottom: "8%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "value",
        },
      ],
      yAxis: [
        {
          type: "category",
          axisTick: {
            show: false,
          },
          data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
        },
      ],
      series: [
        {
          name: "预定",
          type: "bar",
          label: {
            show: true,
            position: "inside",
          },
          emphasis: {
            focus: "series",
          },
          data: generateNumbers(1, 200, 7),
        },
        {
          name: "购买",
          type: "bar",
          stack: "Total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          data: generateNumbers(1, 300, 7),
        },
        {
          name: "退货",
          type: "bar",
          stack: "Total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          data: generateNumbers(-50, -10, 7),
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
