import axios from "axios"

const baseUrl = "https://5d3681f786300e0014b64388.mockapi.io/allList";

const actions = {
    gotodo({ commit }) {
        axios.get(baseUrl).then(response => {
            let data = response.data;
            data.forEach(element => {
                commit("addNewItem", {name:element.name,isChecked:element.isChecked});
            });
        }
        )
    },
    add(commit,name) {
        axios.post(baseUrl, {
            "name": name,
            "isChecked": "false"
        }).then(response => {

        })
    }


}

export default actions;