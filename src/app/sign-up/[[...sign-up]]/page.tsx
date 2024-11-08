import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-[calc(100vh-96px)] flex items-center justify-center bg-black">
      <div className="card w-full max-w-md bg-black shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center text-2xl font-bold text-green-400">
            Join Us!
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Please sign up to get started
          </p>
          <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
        </div>
      </div>
    </div>
  );
}
