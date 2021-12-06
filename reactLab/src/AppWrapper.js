import InMemoryApp from "./InMemoryApp.js";
import './AppWrapper.css';

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
import {useAuthState} from "react-firebase-hooks/auth";
import {FcGoogle} from "react-icons/all";

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
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

function AppWrapper(props) {
    const [user, loading, error] = useAuthState(auth);

    if (error){
        console.log("error: ");
        console.log(error);
    }

    if (loading) {
        return <div id={"login-screen"}>
            <div id={"app-name"}>To-do Lists</div>
            <div id={"login-google"}>Loading...</div>
        </div>;
    } else if (user) {
        // user has logged in
        return <InMemoryApp db={db} auth={auth} email={user.email}/>;
    } else {
        return <SignIn />;
    }
}

function SignIn() {
    return <div id={"login-screen"}>
        <div id={"app-name"}>To-do Lists</div>
        <div  id={"login-google"}>
            <button onClick={() =>
                auth.signInWithPopup(googleProvider)}><FcGoogle/> Login with Google
            </button>
        </div>
    </div>
}


export default AppWrapper;