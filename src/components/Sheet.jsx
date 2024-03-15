import { useState } from "react"
import Cell from "./Cell"

/* eslint-disable react/prop-types */
const Sheet = ({color, setColor}) => {
    const [matrix] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    const [focusedCellId, setFocusedCellId] = useState(0);
  return (
    <div className="sheet">
        {
            matrix.map((cell) => <Cell key={cell} cellId={cell} focusedCellId={focusedCellId} setFocusedCellId={setFocusedCellId} color={color} setColor={setColor} />)
        }
    </div>
  )
}

export default Sheet
