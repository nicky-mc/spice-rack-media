import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-[calc(100vh-96px)] flex items-center justify-center bg-gray-100">
      <div className="card w-full max-w-md bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center text-2xl font-bold text-gray-800">
            Welcome Back!
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Please sign in to continue
          </p>
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </div>
      </div>
    </div>
  );
}
