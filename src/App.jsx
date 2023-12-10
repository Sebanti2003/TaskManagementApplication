import { useEffect, useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import img from "/4d8a28327a9606359a31452b00ec3674.jpg";
import Eachtodo from "./components/Eachtodo";

function App() {
  const initial = JSON.parse(localStorage.getItem('shopping')) || [];
  const [editItem, setEditItem] = React.useState(null);
  const [text, settext] = useState("");
  const [items, setitems] = useState(initial);
  const create = () => {
    setitems((prev) => [
      ...prev, { task: text, checked: false, id: Date.now() }
    ]);
    settext("");
  };
  const deletethetask = (id) => {
    setitems((prev) => prev.filter((e) => e.id !== id));
  };
  const checked = (id) => {
    setitems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, checked: !i.checked } : i
      )
    );
  };
  const handleEdit = (id, newItemText) => {
    setitems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, task: newItemText } : item
      )
    );
    setEditItem(null);
  };
  useEffect(() => {
    localStorage.setItem('shopping', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="w-screen min-h-screen bg-violet-400 p-2">
        <div className="w-[60%] max-md:w-[100%] min-h-[50vh] bg-white mx-auto flex flex-col p-2 justify-center gap-2 items-center">
          <h1 className="font-bold cursive bg-blue-400 p-2 text-4xl text-center">
            Task Management Application
          </h1>
          <img src={img} className="w-[300px] h-[300px] " alt="" />
          <div className="w-full flex justify-evenly gap-3 ">
            <input
              type="text"
              value={text}
              className="border-[2px] rounded-lg border-black p-2 w-[60%]"
              onChange={(e) => settext(e.target.value)}
              placeholder="Write your task"
            />
            <button
              className="p-2 px-4 bg-blue-600 rounded-md text-white"
              onClick={() => create()}
            >
              Create
            </button>
          </div>
          {items.map((e, index) => {
            return (
              <Eachtodo
                content={e.task}
                setedit={setEditItem}
                set={setitems}
                id={e.id}
                key={index}
                edit={editItem}
                handleEdit={handleEdit}
                del={deletethetask}
                check={e.checked}
                checkf={checked}
                
              />
            );
          })}
          {/* //checkfunc={checkeditem} */}
        </div>
      </div>
    </>
  );
}

export default App;
