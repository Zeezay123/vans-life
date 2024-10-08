


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDocs, collection,getFirestore, doc, getDoc,query,where} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vans-app-a13bd.firebaseapp.com",
  projectId: "vans-app-a13bd",
  storageBucket: "vans-app-a13bd.appspot.com",
  messagingSenderId: "227471157678",
  appId: "1:227471157678:web:90d9483a868995c239003f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


const vansCollectionRef = collection(db,'vans')  /* for getting a collection of documents */

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc=>({...doc.data(), id: doc.id}))
    return vans

    // getting the data from firebase database in the form of what our api call expects
}

export async function getVan(id) {
    const docRef = doc(db, 'vans', id)
    const snapshot = await getDoc(docRef)
     const van = {...snapshot.data(), id: snapshot.id}
    console.log(van)
   

    return van
    
}

//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }



export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc=>({...doc.data(), id: doc.id}))
    return vans

    // getting the data from firebase database in the form of what our api call expects
}

// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}