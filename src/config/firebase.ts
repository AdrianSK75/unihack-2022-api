import * as admin from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

import serviceAccount from "../../serviceAccountKey.json";

admin.initializeApp({
    // credential: admin.cert({
        //     projectId: process.env.PROJECT_ID,
        //     clientEmail: process.env.CLIENT_EMAIL,
        //     privateKey: process.env.PRIVATE_KEY
        // }),
    // @ts-ignore
    credential: admin.cert(serviceAccount),
    databaseURL: "https://unihack-2022-default-rtdb.europe-west1.firebasedatabase.app"
});

export const db = getFirestore();
export const auth = getAuth();