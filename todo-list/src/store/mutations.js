  const mutations = { 
    addNewItem(state, item) {
        state.allItem.push({ content: item.name, isChecked:item.isChecked});
        debugger;
    },
    changeState(state, status) {
        state.status = status;
    }
  }

  export default mutations;