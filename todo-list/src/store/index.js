import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allItem: [],
        status: 1
    },
    mutations: {
        addNewItem(state, item) {
            state.allItem.push({ content: item, isChecked: false })
        },
        changeState(state, status) {
            state.status = status;
        }
    },
    getters: {
        getShowList: (state) => {
            if (state.status === 0) {
                return state.allItem.filter(item => item.isChecked == false);
            } else if (state.status === -1) {
                return state.allItem.filter(item => item.isChecked == true);
            } else {
                return state.allItem;
            }
        }
    }

}
)