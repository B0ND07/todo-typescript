import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import { Items } from "./types/utils";
import ItemsList from "./components/ItemsList";

const App: React.FC = () => {

  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setItems((prev) => [
      ...prev,
      { title: inputValue, id: Date.now().toString() },
    ]);
    setInputValue("");
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="w-[350px]">

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <Button
            className="my-2 text-white bg-gray-600 w-full rounded"
            title="Add"
          />
        </form>

        <div className="bg-red-400">
          <ItemsList items={items} setItems={setItems} />
        </div>
        
      </div>
    </div>
  );
};

export default App;
