import Navbar from "../navbar/Navbar";
import UserProfile from "../user/components/UserProfile";

function UserProfilePage() {
  return (
    <Navbar>
        <h1 className="mx-auto text-2xl">My Profile</h1>
      <UserProfile />
    </Navbar>
  );
}

export default UserProfilePage;
