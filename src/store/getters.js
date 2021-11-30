export default {
    sumNum(state) {
        let sum = 0;
        for (const item of state.carGoods) {
            sum += item.num;
        }
        return sum;
    },

    cartList(state) {
        return state.carGoods
    },
}