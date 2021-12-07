import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import App from "./App.js";
import {useCollection} from "react-firebase-hooks/firestore";
import firebase from "firebase/compat";

const collectionName = "todo-lists-share";

function InMemoryApp(props) {
    const [sortOption, setSortOption] = useState("created");

    // get the names of all the lists first
    let overall_query = props.db.collection(collectionName).where("collaborators", "array-contains", props.email);
    const [overall_value, overall_loading, overall_error] = useCollection(overall_query);

    if (overall_error){
        console.log("error in getting all the lists' information: ");
        console.log(overall_error);
    }

    let all_lists_id = [];
    if (overall_value) {
        all_lists_id = overall_value.docs.map((doc) => {
            return {...doc.data()}});
    }

    // storing the id of the current list
    const [currentList, setCurrentList] = useState("default-list-"+props.email);

    // get the data of the list that we are currently displaying
    let query = props.db.collection(collectionName).doc(currentList).collection("list-of-items");

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
        const doc = props.db.collection(collectionName).doc(currentList).collection("list-of-items").doc(itemID);
        doc.update({
            [field]: newValue,
        })
    }

    function handleItemDeleted(itemID) {
        props.db.collection(collectionName).doc(currentList).collection("list-of-items").doc(itemID).delete();
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
        props.db.collection(collectionName).doc(currentList).collection("list-of-items").doc(newId).set({
            id: newId,
            item_name: "",
            completed: false,
            priority: 0,
            created: firebase.firestore.Timestamp.fromDate(new Date()),
        })
        return newId;
    }

    function handleListNameChanged(listId, newValue){
        const doc = props.db.collection(collectionName).doc(listId);
        doc.update({
            list_name: newValue,
        })
    }

    function handleListAdded(){
        const newId = generateUniqueID();
        props.db.collection(collectionName).doc(newId).set({
            id: newId,
            list_name: "Untitled",
            owner: props.email,
            collaborators: [props.email],
        })
        return newId;
    }

    function handleListDeleted(listId) {
        props.db.collection(collectionName).doc(listId).delete();
    }

    function handleAddCollaborator(listId, collaborator_email){
        const doc = props.db.collection(collectionName).doc(listId);
        // arrayUnion guarantees that only one copy of the collaborator email exists in the array
        //      impossible to have 2 instances of the same email in the array
        doc.update({
            collaborators: firebase.firestore.FieldValue.arrayUnion(collaborator_email)
        });
    }

    function handleRemoveCollaborator(listId, collaborator_email){
        const doc = props.db.collection(collectionName).doc(listId);
        doc.update({
            collaborators: firebase.firestore.FieldValue.arrayRemove(collaborator_email)
        });
    }

    // get additional information about the list that we are currently displaying
    let curr_list_name = "";
    let curr_list_is_sharable = false;
    let curr_list_collaborators = [];
    if (all_lists_id.length > 0){
        // find the information of the current list that we are displaying
        let curr_list_array = all_lists_id.filter((e) => e.id === currentList);
        // if we can get the current list that we are displaying
        if (curr_list_array.length > 0) {
            let curr_list = curr_list_array[0];  // get the current list

            curr_list_name = curr_list.list_name;
            // we can only share the list if the logged in user is the owner of the current list
            curr_list_is_sharable = (curr_list.owner === props.email);
            curr_list_collaborators = curr_list.collaborators;
        } else {
            // for some reason, we cannot get info about the current list that we are displaying
            //      change current list back to the default list
            //      (help handle synchronization when user deletes the list from one window,
            //      and we need to synchronize the display in another window)
            setCurrentList("default-list-"+props.email);
        }
    }

    return (<App data={data}
                 auth={props.auth}
                 email={props.email}
                 list_data={all_lists_id}
                 curr_list_id={currentList}
                 curr_list_name={curr_list_name}
                 curr_list_is_sharable={curr_list_is_sharable}
                 curr_list_collaborators={curr_list_collaborators}
                 onItemChanged={handleItemChanged}
                 onItemDeleted={handleItemDeleted}
                 onDeleteByCategory={handleItemCategoryDeleted}
                 onItemAdded={handleItemAdded}
                 onSortSelected={(option) => setSortOption(option)}
                 onListSelected={setCurrentList}
                 onListNameChanged={handleListNameChanged}
                 onListAdded={handleListAdded}
                 onListDeleted={handleListDeleted}
                 onAddCollaborator={handleAddCollaborator}
                 onRemoveCollaborator={handleRemoveCollaborator}
                 selectedSortOption={sortOption}/>
    );
}

export default InMemoryApp;