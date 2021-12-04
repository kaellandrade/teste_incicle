import React from "react";

/**
 * Renderiza um componente select
 * Recebe um array de objetos e retorna uma tag option.
 *
 */
function SelectComponent({ name, id, options, className }) {
  return (
    <div className={className}>
      <select className="form-select form-select-md" name={name} id={id}>
        {options.map(({ value, text }) => (
          <option value={value}>{text}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectComponent;
