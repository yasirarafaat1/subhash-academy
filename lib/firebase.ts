import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBaAf7tjJDpAq9RfDCP_aVfsV0V13nP7o",
  authDomain: "digitaladbirdportfolio.firebaseapp.com",
  projectId: "digitaladbirdportfolio",
  storageBucket: "digitaladbirdportfolio.appspot.com",
  messagingSenderId: "333911474607",
  appId: "1:333911474607:web:eb513566a0e35b8098ef5a",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
