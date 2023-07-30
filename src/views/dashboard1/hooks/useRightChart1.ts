import { onBeforeUnmount, ref } from "vue";
import { EChartsOption } from "echarts";
import { generateNumbers } from "@/utils";

export default function () {
  const option = ref<EChartsOption>({});

  function refresh() {
    option.value = {
      radar: {
        indicator: [
          { name: "用户满意度", max: 200 },
          { name: "价格", max: 200 },
          { name: "品质", max: 200 },
          { name: "客户支持", max: 200 },
          { name: "可持续性", max: 200 },
          { name: "效果", max: 200 },
        ],
        radius: 100,
      },
      series: [
        {
          type: "radar",
          data: [
            {
              value: generateNumbers(1, 200, 6),
              areaStyle: {},
            },
          ],
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
