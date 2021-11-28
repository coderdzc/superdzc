export default {
    addGoods(state, goods) {
        goods.num = 1
        goods.checked = false
        state.carGoods.push(goods)
    },
    addNum(state, repeatGoods) {
        repeatGoods.num++
    },
}