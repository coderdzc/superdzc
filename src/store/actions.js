export default {
    checkGoods(context, goods) {
        return new Promise((resolve, reject) => {
            let repeatGoods = context.state.carGoods.find(item => item.id === goods.id)
            if (repeatGoods) {
                context.commit("addNum", repeatGoods)
                resolve('商品数量+1')
            } else {
                context.commit("addGoods", goods)
                resolve('成功添加到购物车')
            }
        })
    }
}