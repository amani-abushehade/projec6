import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";

function Items() {
  const items = useSelector((state) => state.items);
  return (
    <div className="items">
      {items.map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
}

export default Items;
