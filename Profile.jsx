import { auth, db } from "./Firebase";
import { getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

function Profile() {
  const [userDetails, setUserDeatails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserDeatails(docSnap.data());
      } else {
        console.log("user not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  async function Logout(){
    try{
        await auth.signOut()
        window.location.href="/login"
    }
    catch(err){
        console.log(err.message)

    }
  }
  return (
    <div>
      {userDetails ? (
        <>
          <h1>Welcome to the site : {userDetails.firstname}</h1>
          <div>
            <h3>email : {userDetails.email}</h3>
            <h3>firstname : {userDetails.firstName}</h3>
            <h3>lastname : {userDetails.secondName}</h3>
          </div>
          <button type="submit" onClick={Logout}>Logout</button>
        </>):
        (
        <p>
            .....Loading
        </p>
      )}
    </div>
  );
}
export default Profile;