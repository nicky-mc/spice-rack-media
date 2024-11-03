// SignUpPage.tsx
import { SignUp } from '@clerk/clerk-react';

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-500 via-teal-500 to-blue-600 text-white">
      <div className="card w-full max-w-sm shadow-lg p-8 bg-white text-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Join Us!</h2>
        <p className="text-center text-gray-600 mb-8">
          Create an account to get started
        </p>
        
        <SignUp>
          <SignUp.Form className="form-control">
            {/* Username Field */}
            <SignUp.UsernameField
              className="input input-bordered w-full mt-4"
              placeholder="Username"
            />

            {/* Email Field */}
            <SignUp.EmailField
              className="input input-bordered w-full mt-4"
              placeholder="Email"
            />

            {/* Password Field */}
            <SignUp.PasswordField
              className="input input-bordered w-full mt-4"
              placeholder="Password"
            />

            {/* Submit Button */}
            <button className="btn btn-primary w-full mt-6">
              Sign Up
            </button>
          </SignUp.Form>
        </SignUp>

        {/* Sign-In Redirect */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{' '}
          <a href="/sign-in" className="text-teal-600 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}