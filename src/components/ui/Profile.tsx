import type { FC } from "react";
import { Button } from "./button";

const Profile: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-muted-foreground">john.doe@example.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="profile-name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  id="profile-name"
                  type="text"
                  className="w-full p-2 rounded-md border"
                  defaultValue="John Doe"
                  placeholder="Enter your name"
                  title="Name"
                />
              </div>
              <div>
                <label
                  htmlFor="profile-email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="profile-email"
                  type="email"
                  className="w-full p-2 rounded-md border"
                  defaultValue="john.doe@example.com"
                  placeholder="Enter your email"
                  title="Email"
                />
              </div>
              <div>
                <label
                  htmlFor="profile-phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone
                </label>
                <input
                  id="profile-phone"
                  type="tel"
                  className="w-full p-2 rounded-md border"
                  defaultValue="+1 234 567 890"
                  placeholder="Enter your phone number"
                  title="Phone"
                />
              </div>
              <div>
                <label
                  htmlFor="profile-location"
                  className="block text-sm font-medium mb-1"
                >
                  Location
                </label>
                <input
                  id="profile-location"
                  type="text"
                  className="w-full p-2 rounded-md border"
                  defaultValue="New York, USA"
                  placeholder="Enter your location"
                  title="Location"
                />
              </div>
            </div>
            <Button className="mt-4">Save Changes</Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Order History</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">No orders yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
