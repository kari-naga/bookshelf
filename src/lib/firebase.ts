import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCjgtZVb34FWmbm3TC6bbXeqrM8jZ-Aobw',
  authDomain: 'bookshelf-app-kn.firebaseapp.com',
  projectId: 'bookshelf-app-kn',
  storageBucket: 'bookshelf-app-kn.appspot.com',
  messagingSenderId: '616710097422',
  appId: '1:616710097422:web:1a20ab5a0b201924b54a5f',
  measurementId: 'G-SHYKG2DDQ8'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)