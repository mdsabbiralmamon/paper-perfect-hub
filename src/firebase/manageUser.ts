import { updateProfile } from "firebase/auth";
import { auth } from "./firebase";

const updateName = async (name: string) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await updateProfile(user, {
        displayName: name,
      });
      console.log("Profile updated successfully", user);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  } else {
    console.log("No user is currently signed in");
  }
};

export { updateName };
