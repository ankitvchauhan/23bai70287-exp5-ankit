import { useSelector,useDispatch } from "react-redux";
import { addItem,toggleItem,deleteItem } from "../redux/slices/appSlice";
import { useState,useMemo } from "react";

function Reports(){

  const items = useSelector(state=>state.app.items);

  const dispatch = useDispatch();

  const [input,setInput] = useState("");

  const completed = useMemo(()=>{
    return items.filter(i=>i.completed).length;
  },[items]);

  return(

    <div className="container">

      <h1>Reports</h1>

      <input
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      placeholder="Add item"
      />

      <button onClick={()=>{

        dispatch(addItem(input));
        setInput("");

      }}>
      Add
      </button>

      <h3>Total Items: {items.length}</h3>
      <h3>Completed Items: {completed}</h3>

      {items.map(item=>(
        <div key={item.id} className="card">

          <p onClick={()=>dispatch(toggleItem(item.id))}>
            {item.name} ({item.completed ? "Done":"Pending"})
          </p>

          <button onClick={()=>dispatch(deleteItem(item.id))}>
            Delete
          </button>

        </div>
      ))}

    </div>

  );
}

export default Reports;