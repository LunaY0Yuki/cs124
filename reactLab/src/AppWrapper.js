import InMemoryApp from "./InMemoryApp.js";

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
import {useAuthState} from "react-firebase-hooks/auth";

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
        return <p>Checking...</p>;
    } else if (user) {
        // user has logged in
        return <InMemoryApp db={db}/>;
    } else {
        return <SignIn />;
    }
}

function SignIn() {
    return <div>
        <button onClick={() =>
            auth.signInWithPopup(googleProvider)}>Login with Google
        </button>
    </div>
}

export default AppWrapper;