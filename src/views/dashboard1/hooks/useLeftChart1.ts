import { ref } from "vue";
import { EChartsOption } from "echarts";

export default function () {
  const option = ref<EChartsOption>({});

  function fetchData() {
    setTimeout(() => {
      option.value = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
    }, 1500);
  }

  fetchData();

  return {
    option,
    fetchData,
  };
}
