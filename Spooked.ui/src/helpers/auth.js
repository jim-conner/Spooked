import firebase from 'firebase/';
import { createNewUser } from './data/userData';

const provider = new firebase.auth.GoogleAuthProvider();

const firstSignIn = () => {
  firebase.auth().signInWithPopup(provider).then((firebaseUser) => {
    if (firebaseUser.additionalUserInfo?.isNewUser) {
      const userInfo = {
        firebaseId: firebaseUser.user?.uid
      };
      createNewUser(userInfo);
    } else {
      // firebase.auth().signInWithPopup(provider);
    }
  });
};

const signInUser = () => {
  firebase.auth().signInWithPopup(provider);
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { firstSignIn, signInUser, signOutUser };
