import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import App from "./App.js";

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYBi2G8RnkLs2Bzj_XDLjYPylF2oRhq5Y",
    authDomain: "cs124-lab-celine-yuki.firebaseapp.com",
    projectId: "cs124-lab-celine-yuki",
    storageBucket: "cs124-lab-celine-yuki.appspot.com",
    messagingSenderId: "2120607993",
    appId: "1:2120607993:web:d5d647b2b43f3c7fd95a28"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const collectionName = "todo-lists";

function InMemoryApp(props) {
    const [sortOption, setSortOption] = useState("created");

    // get the names of all the lists first
    let overall_query = db.collection(collectionName);
    const [overall_value, overall_loading, overall_error] = useCollection(overall_query);

    let all_lists_id = [];
    if (overall_value) {
        all_lists_id = overall_value.docs.map((doc) => {
            return {...doc.data()}});
    }

    // storing the id of the current list
    const [currentList, setCurrentList] = useState("default-list");


    let query = db.collection(collectionName).doc(currentList).collection("list-of-items");

    if (sortOption){
        if (sortOption === "priority"){
            // because our priority has 4 as the highest priority, need to sort in descending order
            query = query.orderBy(sortOption, "desc").orderBy("item_name");
        } else {
            query = query.orderBy(sortOption);
        }
    }

    const [value, loading, error] = useCollection(query);

    let data = [];
    if (value) {
        data = value.docs.map((doc) => {
            return {...doc.data()}});
    }

    function handleItemChanged(itemID, field, newValue) {
        const doc = db.collection(collectionName).doc(currentList).collection("list-of-items").doc(itemID);
        doc.update({
            [field]: newValue,
        })
    }

    function handleItemDeleted(itemID) {
        db.collection(collectionName).doc(currentList).collection("list-of-items").doc(itemID).delete();
    }

    function handleItemCategoryDeleted(category) {
        // iterate through each doc only delete based on selected category
        value.forEach((doc) => {
            if (category === "Completed" && doc.data().completed) {
                doc.ref.delete();
            } else if (category === "Uncompleted" && !doc.data().completed) {
                doc.ref.delete();
            } else if (category === "All") {
                doc.ref.delete();
            }
        });
    }

    function handleItemAdded() {
        const newId = generateUniqueID();
        db.collection(collectionName).doc(currentList).collection("list-of-items").doc(newId).set({
            id: newId,
            item_name: "",
            completed: false,
            priority: 0,
            created: firebase.firestore.Timestamp.fromDate(new Date()),
        })
        return newId;
    }

    function handleListNameChanged(listId, newValue){
        const doc = db.collection(collectionName).doc(listId);
        doc.update({
            list_name: newValue,
        })
    }

    function handleListAdded(){
        const newId = generateUniqueID();
        db.collection(collectionName).doc(newId).set({
            id: newId,
            list_name: "Untitled",
        })
        return newId;
    }

    function handleListDeleted(listId) {
        db.collection(collectionName).doc(listId).delete();
    }

    // determine what list name to display in the header of the app
    let curr_list_name = "";
    if (all_lists_id.length > 0){
        // find the information of the current list that we are displaying
        let curr_list = all_lists_id.filter((e) => e.id === currentList);
        if (curr_list.length > 0) {
            curr_list_name = all_lists_id.filter((e) => e.id === currentList)[0].list_name;
        }
    }

    return (<App data={data}
                 list_data={all_lists_id}
                 curr_list_id={currentList}
                 curr_list_name={curr_list_name}
                 onItemChanged={handleItemChanged}
                 onItemDeleted={handleItemDeleted}
                 onDeleteByCategory={handleItemCategoryDeleted}
                 onItemAdded={handleItemAdded}
                 onSortSelected={(option) => setSortOption(option)}
                 onListSelected={setCurrentList}
                 onListNameChanged={handleListNameChanged}
                 onListAdded={handleListAdded}
                 onListDeleted={handleListDeleted}
                 selectedSortOption={sortOption}/>
    );
}

export default InMemoryApp;