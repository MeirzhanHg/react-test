import { createStore } from "redux"

const initialState = 0

const reducer = (state = 0, action) => {
    switch(action.type) {
        case "INC":
            return state + 1
        default:
            return state
    }
}

const store = createStore(reducer)

console.log(store.getState())



const TestRedux = () => {
    return <h1>Redux</h1>
}

export default TestRedux;