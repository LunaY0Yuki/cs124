import './App.css';
import ItemList from "./ItemList.js";
import FilterButton from "./FilterButton.js";
import DeleteButton from "./DeleteButton.js";

function InMemoryApp(props) {
    return (<App data={props.initialData}/>);
}

function App(props) {
  return (
      <div id="content">
        <h1 className="accent">To-Do List</h1>
          <ItemList listData={props.data} />
        <div id="tools">
            <FilterButton />
            <DeleteButton />
        </div>
      </div>
  );
}

export default InMemoryApp;
