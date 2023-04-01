import React, { useState } from "react";
import PendingOrderTable from "../PendingTable/PendingTable";

function AddOrderForm(props) {
  const [buyer, setBuyer] = useState("");
  const [seller, setSeller] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  useEffect(async () => {
    const response = await addOrder();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newOrder = { buyer, seller, quantity, price };

    setBuyer("");
    setSeller("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Buyer:
          <input
            type="text"
            value={buyer}
            onChange={(e) => setBuyer(e.target.value)}
          />
        </label>
        <label>
          Seller:
          <input
            type="text"
            value={seller}
            onChange={(e) => setSeller(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button type="submit">Place Order</button>
      </form>
      <PendingOrderTable
        buyer={buyer}
        seller={seller}
        quantity={quantity}
        price={price}
      />
    </div>
  );
}

export default AddOrderForm;
