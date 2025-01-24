"use client"
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";


const Profile = () => {
  
  const { user, isAuthenticated, login } = useKindeAuth();
  console.log(user);

  if(!isAuthenticated) {
    return <div>
      <h3>You are not logged in!</h3>
      <button onClick={login} className="btn">Log in</button>
    </div>
  }

  return (
    <section>
      <h3 className="font-bold text-3xl text-center">Profile</h3>
      <div className="flex justify-center mt-8">
        <div className="flex gap-2 items-center border p-4 rounded-md border-green-600">
          <div>
            <img
              className="h-24 w-24 rounded-full"
              referrerPolicy="no-referrer"
              src={user?.picture}
              alt={`Picture of ${user?.given_name}`}
            />
          </div>
          <div>
            <h3>{user?.given_name}</h3>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;