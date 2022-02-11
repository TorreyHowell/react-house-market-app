import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDcJuhs0vk5xX3RhhL-2Bs8D3c42vEn_TA',
  authDomain: 'react-housing-market.firebaseapp.com',
  projectId: 'react-housing-market',
  storageBucket: 'react-housing-market.appspot.com',
  messagingSenderId: '452524536320',
  appId: '1:452524536320:web:b17268d2b8d6dfaebd5ee5',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
