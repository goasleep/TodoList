import axios from "axios"

const baseUrl = "https://5d3681f786300e0014b64388.mockapi.io/allList";

const actions = {
    flushItems({ commit }) {
        axios.get(baseUrl).then(response => {
            let data = response.data.map(element => {
                return { id: element.id, name: element.name, isChecked: element.isChecked };
            })
            commit("flush", data)
        }
        )
    },
    add(commit, item) {
        axios.post(baseUrl, {
            "name": item.name,
            "isChecked": false
        }).then(() => {
            commit.dispatch("flushItems")
        })
    },

    update(commit, item) {
        axios.put(`${baseUrl}/${item.id}`, item).then(
            () => {
                commit.dispatch('flushItems');
            }
        )
    },
    deleteItem(commit, item) {
        axios.delete(`${baseUrl}/${item.id}`, item).then(
            () => {
                commit.dispatch('flushItems');
            }
        )
    }
}

export default actions;