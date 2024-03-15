import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const Cell = ({ cellId, focusedCellId, setFocusedCellId, color, setColor}) => {
  const [cellValue, setCellValue] = useState({ text: "", color: "" });
  const [doubleClick, setDoubleClick] = useState(false);

  useEffect(() => {
    if(cellId === focusedCellId) {
      const obj = {...cellValue, color: color};
      setCellValue(obj);
    }
  }, [focusedCellId, color])

  const handleInput = (e) => {
    setCellValue({ ...cellValue, text: e.target.value });
  };

  const handleClick = () => {
    if (cellId !== focusedCellId) {
      setDoubleClick(false);
      setFocusedCellId(cellId);
      setColor("");
      return;
    } else if (cellId === focusedCellId) {
      
      setDoubleClick(true);
      return;
    } else if (doubleClick) {
      setFocusedCellId(0);
      setDoubleClick(false);
      return;
    }
  };

  return doubleClick ? (
    <input
      type="text"
      className="cell"
      style={{
        background: cellValue.color,
      }}
      value={cellValue.text}
      onClick={handleClick}
      onChange={handleInput}
    />
  ) : (
    <div
      className="cell"
      style={{
        border:
          cellId !== focusedCellId ? "1px solid black" : "2px solid black",
        background: cellValue.color,
      }}
      onClick={handleClick}
    >
      {cellValue.text}
    </div>
  );
};

export default Cell;
