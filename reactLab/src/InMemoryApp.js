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

const collectionName = "todo-list-2";

function InMemoryApp(props) {
    const [sortOption, setSortOption] = useState(null);
    let query = db.collection(collectionName);
    if (sortOption){
        if (sortOption === "priority"){
            // because our priority has 4 as the highest priority, need to sort in descending order
            query = query.orderBy(sortOption, "desc");
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

    // function handleItemChanged(itemID, field, newValue){
    //         setData(data.map(
    //             item => item.id !==itemID
    //                 ? item
    //                 : {...item, [field]: newValue}));
    // }

    function handleItemChanged(itemID, field, newValue) {
        const doc = db.collection(collectionName).doc(itemID);
        doc.update({
            [field]: newValue,
        })
    }

    // function handleItemDeleted(itemID) {
    //     setData(data.filter((item) => item.id !== itemID));
    // }

    function handleItemDeleted(itemID) {
        db.collection(collectionName).doc(itemID).delete();
    }

    function handleItemCategoryDeleted(category) {
        let delete_query = null;
        // delete the item based on the category they are in
        if (category === "Completed"){
            delete_query = db.collection(collectionName).where('completed','==',true);
        } else if (category === "Uncompleted") {
            delete_query = db.collection(collectionName).where('completed','==',false);
        } else if (category === "All") {
            delete_query = db.collection(collectionName);
        }

        delete_query.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                doc.ref.delete();
            });
        });
    }
    // function handleItemCategoryDeleted(category) {
    //     // delete the item based on the category they are in
    //     if (category === "Completed"){
    //         setData(data.filter((item) => item.completed === false));
    //     } else if (category === "Uncompleted") {
    //         setData(data.filter((item) => item.completed === true));
    //     } else if (category === "All") {
    //         setData([]);
    //     }
    // }

    // function handleItemAdded(){
    //     let newId = generateUniqueID();
    //     setData(data.concat([{id: newId, name: "", completed: false}]));
    //     return newId;
    // }

    function handleItemAdded() {
        const newId = generateUniqueID();
        db.collection(collectionName).doc(newId).set({
            id: newId,
            item_name: "",
            completed: false,
            priority: 0,
            created: firebase.firestore.Timestamp.fromDate(new Date()),
        })
        return newId;
    }

    function handleSortSelected(option){
        // if you click on the same option twice, it will undo the sort
        if (sortOption === option){
            setSortOption(null);
        } else {
            setSortOption(option);
        }
    }

    return (<App data={data} onItemChanged={handleItemChanged}
                 onItemDeleted={handleItemDeleted}
                 onDeleteByCategory={handleItemCategoryDeleted}
                 onItemAdded={handleItemAdded}
                 onSortSelected={handleSortSelected}
                 selectedSortOption={sortOption}/>
    );
}

export default InMemoryApp;