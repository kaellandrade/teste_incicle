import React from "react";

/**
 * Renderiza um componente select
 * Recebe um array de objetos e retorna uma tags options.
 *
 */
const SelectComponent = ({ name, id, options, className }) => {
  return (
    <div className={className}>
      <select className="form-select form-select-md" name={name} id={id}>
        {options.map(({ value, text }, index) => (
          <option key={index} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
