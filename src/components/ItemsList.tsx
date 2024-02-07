import { Items, ReactSet } from "../types/utils";
import Button from "./Button";

type ItemList = {
  items: Items[];
  setItems: ReactSet<Items[]>;
};

const ItemsList = ({ items, setItems }: ItemList) => {
  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
    console.log(items);
  };
  return (
    <div>
      {items.map((data) => (
        <div key={data.id} className="flex justify-between border">
          <p>{data.title}</p>

          <Button title="delete" onClick={() => handleDelete(data.id)} />
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
