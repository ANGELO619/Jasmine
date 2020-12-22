import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItemIndex = state.items.findIndex((x) => x.product.id === item.product.id);

      if (existItemIndex > -1) {
        state.items[existItemIndex] = item
        return {
          ...state,
        };
      }

      return { ...state, items: [...state.items, item] };

    case CART_REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((x) => x.product.id !== action.payload),
      };

    default:
      return state;
  }
};
