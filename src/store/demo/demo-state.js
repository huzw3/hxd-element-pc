import * as types from './demo-mutation-types'

// initial state
const state = {
    homePage:[],  //存当前页面数据
    offer:{},    //存商品数据
}

const mutations = {

    [types.SHOP_PAGE] (state, resultData) {
        state.homePage = resultData.value;
    },

    [types.OFFER] (state, offer) {
        state.offer =  offer ;
    },

}
export default{state, mutations}