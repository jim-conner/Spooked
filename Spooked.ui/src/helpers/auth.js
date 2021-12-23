import firebase from 'firebase/';
import { createNewUser } from './data/userData';

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((user) => {
    if (user.additionalUserInfo?.isNewUser) {
      const userInfo = {
        firebaseId: user.user?.uid
      };
      createNewUser(userInfo);
      // add to control flow here ?
    }
  });
};
const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});
export { signInUser, signOutUser };
