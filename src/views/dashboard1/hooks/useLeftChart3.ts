import { onBeforeUnmount, ref } from "vue";
import { EChartsOption } from "echarts";
import { generateNumbers } from "@/utils";

export default function () {
  const option = ref<EChartsOption>({});

  function refresh() {
    option.value = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}%",
      },
      series: [
        {
          name: "Funnel",
          type: "funnel",
          left: "center",
          width: "100%",
          min: 0,
          max: 1000,
          minSize: "0%",
          maxSize: "100%",
          sort: "descending",
          gap: 2,
          label: {
            show: true,
            position: "inside",
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: "solid",
            },
          },
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1,
          },
          emphasis: {
            label: {
              fontSize: 20,
            },
          },
          data: [
            { value: generateNumbers(500, 1000), name: "访问量" },
            { value: generateNumbers(500, 1000), name: "注册量" },
            { value: generateNumbers(500, 1000), name: "浏览量" },
            { value: generateNumbers(200, 500), name: "加入购物车" },
            { value: generateNumbers(100, 800), name: "购买" },
            { value: generateNumbers(1, 20), name: "退货" },
            { value: generateNumbers(1, 20), name: "取消订单" },
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
