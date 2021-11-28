import { request } from "./request"

export function GetDetailData(iid) {
    return request({
        url: '/detail?iid=' + iid.iid,
    })
}

export function GetDetailRecommend() {
    return request({
        url: '/recommend'
    })
}

export class goods {
    constructor(iteminfo, columns, services, iid) {
        this.title = iteminfo.title
        this.price = "¥" + iteminfo.lowNowPrice
        this.oldPrice = iteminfo.oldPrice
        this.discountDesc = iteminfo.discountDesc
        this.columns = columns
        this.services = services
        this.id = iid
    }
}

export class shop {
    constructor(shopInfo) {
        this.name = shopInfo.name
        this.logo = shopInfo.shopLogo
        this.sells = shopInfo.cSells
        this.goods = shopInfo.cGoods
        this.score = shopInfo.score
    }
}


export class detailInfo {
    constructor(detailInfo) {
        this.desc = detailInfo.desc
        this.detail = detailInfo.detailImage
    }
}

export class params {
    constructor(set, table) {
        this.set = set
        this.table = table
    }
}