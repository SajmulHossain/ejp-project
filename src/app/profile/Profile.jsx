"use client"
import { LoginLink, useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";


const Profile = () => {
  
  const { user, isAuthenticated } = useKindeAuth();

  if(!isAuthenticated) {
    return (
      <section className="flex justify-center text-center">
        <div className="space-y-3 border border-green-500 p-4 rounded-md">
          <h3>You are not logged in!</h3>
          <LoginLink className="btn">
            Log in
          </LoginLink>
        </div>
      </section>
    );
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