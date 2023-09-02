import {defineComponent} from "vue";
import "./index.less"

const longIndex = [0, 6, 12];
export default defineComponent({
    name: "Chart",
    props: {},
    setup(props) {
        return () => (
            <div class='chart'>
                <ul class='scale__ul'>
                    {
                        Array.from({length: 13}).map((_, index) => {
                            const long = longIndex.includes(index);
                            return <li
                                class={[`scale__li`, {'scale__li--long': long}, {'scale__li--active': index > 5}]}
                                style={{transform: `rotate(-${15 * index}deg) translate(${long ? 59 : 65}px,-50%)`}}
                                key={index}></li>
                        })
                    }
                </ul>
                <div class='chart__name'>xx</div>
            </div>
        );
    },
});
