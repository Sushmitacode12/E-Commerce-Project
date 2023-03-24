import axios from "axios";

export const getCartListService = async (newEmailId) => {             // Get the cartlist items for authenticated user
  const { data } = await axios.get(                                // response to await.
    `https://crudcrud.com/api/52b0c644c519449f87b3ca0f78656c55/cartItem?${newEmailId}`
  );
  return data;
};