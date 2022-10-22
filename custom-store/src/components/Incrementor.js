import store from "../store/store";

export const Increment = ({ item }) => (
  <button
    onClick={() => {
      console.log("clicked ", { item })
      const state = store.getState();
      store.setState({
        ...state,
        [item]: state[item] + 1,
      })
    }}
  >
    Increment {item}
  </button>
)