import { defineComponent } from "vue";
import style from "./index.module.less";

export default defineComponent({
  name: "switchPageBtn",
  props: {
    direction: {
      type: String as () => "left" | "right",
      required: true,
    },
    text: {
      required: true,
    },
    active: Boolean,
  },
  setup(props) {
    return () => (
      <div
        class={[
          style.btn,
          props.active ? style.active : style.normal,
          style[props.direction],
        ]}
      >
        <div class={[style.text]}>{props.text}</div>
      </div>
    );
  },
});
