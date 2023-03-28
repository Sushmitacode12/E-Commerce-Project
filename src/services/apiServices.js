import axios from "axios";

export const getCartListService = async (newEmailId) => {             // Get the cartlist items for authenticated user
  const { data } = await axios.get(                                // response to await.
    `https://e-commerce-16a42-default-rtdb.firebaseio.com/cartItem/${newEmailId}.json`
  );
  const final_data = [];
  const obj_keys = Object.keys(data===null?{}:data)
  obj_keys.forEach((keys) => {
    const obj_element = data[keys];
    obj_element.id = keys;
    console.log(obj_element);
    final_data.push(obj_element);
  })
  return final_data;
};