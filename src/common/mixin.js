import { throttle } from "./throttle"

export const itemMixIn = {
    mounted() {
        const throttleLoad = throttle(this.$refs.scroll.refresh, 500);
        this.itemImageLoad = () => {
            throttleLoad();
            console.log(111111);
        };
        this.$bus.$on("itemImageLoad", this.itemImageLoad);
        console.log("我是mix进来的");
    },
}

import GoTop from "components/common/gotop/GoTop";
export const goTopMix = {
    components: {
        GoTop,
    },
    data() {
        return {
            gotopshow: false,
        }
    },
    methods: {
        btnclick() {
            this.$refs.scroll.scrollTo(0, 0);
        },
    },
}