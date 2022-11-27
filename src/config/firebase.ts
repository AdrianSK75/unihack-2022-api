import * as admin from "firebase-admin/app";
// import * as client from "firebase/app"
// import { getFirestore as getFirestoreClient } from "firebase/firestore";
import { getFirestore as getFirestoreAdmin } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

import serviceAccount from "../../serviceAccountKey.json";

// CLIENT INIT
// const firebaseConfig = {
//     apiKey: "AIzaSyCd40JtbDghOKrYiaW2ZFk6xD4HOFFyQ-o",
//     authDomain: "unihack-2022.firebaseapp.com",
//     databaseURL: "https://unihack-2022-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "unihack-2022",
//     storageBucket: "unihack-2022.appspot.com",
//     messagingSenderId: "684462232584",
//     appId: "1:684462232584:web:a1be4e4ac3a4d09e4aedbd",
//     measurementId: "G-G7WZSRD55X"
// };

// const firebaseClientApp = client.initializeApp(firebaseConfig)
// export const clientDb = getFirestoreClient(firebaseClientApp);

// ADMIN INIT
const firebaseAdminApp = admin.initializeApp({
    // credential: admin.cert({
        //     projectId: process.env.PROJECT_ID,
        //     clientEmail: process.env.CLIENT_EMAIL,
        //     privateKey: process.env.PRIVATE_KEY
        // }),
    // @ts-ignore
    credential: admin.cert(serviceAccount),
    databaseURL: "https://unihack-2022-default-rtdb.europe-west1.firebasedatabase.app"
});

export const db = getFirestoreAdmin(firebaseAdminApp);

// OTHER SERVICIES

export const auth = getAuth();