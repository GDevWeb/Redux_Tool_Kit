import { updateStockAdd, updateStockRemove } from "../actions/stockActions";
import { addOne, removeOne } from "../slices/fruitsCartSlice";

const stockMiddleware = (store) => (next) => (action) => {
  if (action.type === addOne.type) {
    store.dispatch(updateStockAdd(action.payload));
  } else if (action.type === removeOne.type) {
    store.dispatch(updateStockRemove(action.payload));
  }
  return next(action);
};

export default stockMiddleware;
