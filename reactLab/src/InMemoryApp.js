import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import App from "./App.js";

function InMemoryApp(props) {
    const [data, setData] = useState(props.initialData);

    function handleItemChanged(itemID, field, newValue){
            setData(data.map(
                item => item.id !==itemID
                    ? item
                    : {...item, [field]: newValue}));
    }

    function handleItemDeleted(itemID) {
        setData(data.filter((item) => item.id !== itemID));
    }

    function handleItemCategoryDeleted(category) {
        // delete the item based on the category they are in
        if (category === "Completed"){
            setData(data.filter((item) => item.completed === false));
        } else if (category === "Uncompleted") {
            setData(data.filter((item) => item.completed === true));
        } else if (category === "All") {
            setData([]);
        }
    }

    function handleItemAdded(){
        let newId = generateUniqueID();
        setData(data.concat([{id: newId, name: "", completed: false}]));
        return newId;
    }

    return (<App data={data} onItemChanged={handleItemChanged}
                 onItemDeleted={handleItemDeleted}
                 onDeleteByCategory={handleItemCategoryDeleted}
                 onItemAdded={handleItemAdded}/>);
}

export default InMemoryApp;