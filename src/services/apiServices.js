import axios from "axios";

export const getCartListService = async (newEmailId) => {
  const { data } = await axios.get(
    `https://crudcrud.com/api/59a16e4e0c8a467da40081955fbc4d04/cartItem?${newEmailId}`
  );
  return data;
};