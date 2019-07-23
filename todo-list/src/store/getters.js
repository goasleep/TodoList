const getters =  {
     getShowList : (state) => {
        if (state.status === "active") {
            return state.allItem.filter(item => item.isChecked == false);
        } else if (state.status === "completed") {
            return state.allItem.filter(item => item.isChecked == true);
        } else {
            return state.allItem;
        }
    }
}

export default getters;