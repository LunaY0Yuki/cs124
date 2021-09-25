import logo from './logo.svg';
import './App.css';

const data = [
    {
        id: 1,
        item_name: "Buy new John Grisham book",
        completed: false
    },
    {
        id: 2,
        item_name: "Eat Lunch",
        completed: false
    },
    {
        id: 3,
        item_name: "Call Mom",
        completed: true
    },
    {
        id: 4,
        item_name: "Text John about bank statements",
        completed: false
    }
]

// Define the List component that contain all the items
function ItemList(props){
    return (
        <div id="item_list">
            {props.listData.map( e => <Row id={e.id} item_name={e.item_name} completed={e.completed}/>)}
            <AddButton />
        </div>
    );
}

// Define each individual item component
function Row(props){
    return (
        <div id={props.id} className="task-item">
            <input type="checkbox" className="check-complete" />
            <label htmlFor={props.id}>{props.item_name}</label>
        </div>
    );
}

function AddButton(){
    return (
        <button id="add" type="button">+</button>
    );
}

function FilterButton(){
    return (
        <div className="dropup">
            <button className="accent" id="filter-dropup" type="button">
                <i className="material-icons-outlined md-38">filter_alt</i>
            </button>
            <FilterDropUp />
        </div>
    );
}

function FilterDropUp(){
    return (
        <div className="dropup-content">
            <a href="#">Completed</a>
            <a href="#">Uncompleted</a>
        </div>
    );
}

function DeleteButton(){
    return (
        <div className="dropup">
            <button className="accent" id="delete-dropup" type="button">
                <i className="material-icons-outlined md-38">delete_outline</i>
            </button>
            <DeleteDropUp />
        </div>
    );
}

function DeleteDropUp(){
    return (
        <div className="dropup-content">
            <a href="#">All</a>
            <a href="#">Completed</a>
            <a href="#">Uncompleted</a>
        </div>
    );
}


function App() {
  return (
      <div id="content">
        <h1 className="accent">To-Do List</h1>
          <ItemList listData={data} />
        <div id="tools">
            <FilterButton />
            <DeleteButton />
        </div>
      </div>
  );
}

export default App;
