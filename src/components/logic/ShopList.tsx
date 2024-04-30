import axios from "axios";

export const ShopList = () => {
  axios
    .get("http://127.0.0.1:8000/api/shops")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Erreur lors de la requête POST:", error);
    });

  return <></>;
};
