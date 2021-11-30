import { request } from "./request";

export function GetSlideData() {
    return request({
        url: "/category",
    })
}

export function GetCategoryData(maitKey) {
    return request({
        url: "/subcategory",
        params: {
            maitKey
        }
    })
}

export function GetSortGoodsList(miniWallkey, type) {
    return request({
        url: "/subcategory/detail",
        params: {
            miniWallkey,
            type
        }
    })
}