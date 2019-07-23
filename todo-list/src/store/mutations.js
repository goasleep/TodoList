const mutations = {
    addNewItem(state, item) {
        state.allItem.push({ name: item.name, isChecked: item.isChecked });
    },
    changeState(state, status) {
        state.status = status;
    },
    flush(state,items){
        state.allItem = items;
    }
    
}

export default mutations;