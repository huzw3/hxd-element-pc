import * as types from './demo-mutation-types'

const actions = {
    setShopPage: function ({ commit,state }, params) {
        commit(types.SHOP_PAGE, params);
    },
    setOffer: function ({ commit,state }, params) {
        commit(types.OFFER, params);
    },
}
module.exports = actions