import Toast from "./Toast"

const obj = {}

obj.install = function (Vue) {
    //1.创建组件构造器
    const toastConstruct = Vue.extend(Toast)

    //2.根据组件构造器创建一个组件对象
    const toast = new toastConstruct()

    //3.将组件对象手动挂载到一个元素上
    toast.$mount(document.createElement("div"))

    //4.将组件对象添加到一个节点上(toast.$el就是div)
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
}


export default obj