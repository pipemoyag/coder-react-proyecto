const InputAux = ({ cartCount, setCartCount }) => {
  const handleChange = (e) => {
    const cartCountInput = Number(e.target.value);
    if (Number.isInteger(cartCountInput) && cartCountInput >= 0) {
      setCartCount(String(cartCountInput));
    } else {
      alert("Por favor ingresa un número entero positivo");
    }
  };

  return (
    <div className="d-flex justify-content-center m-4">
      <div className="input-group" style={{ maxWidth: "300px" }}>
        <input
          type="number"
          min="0"
          step="1"
          className="form-control border border-dark fs-3 text-center py-3"
          placeholder="Cuántos productos llevas?"
          value={cartCount}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputAux;
