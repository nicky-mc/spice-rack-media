i// SignInPage.tsx
import { SignIn } from '@clerk/clerk-react';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white">
      <div className="card w-full max-w-sm shadow-lg p-8 bg-white text-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Welcome Back!</h2>
        <p className="text-center text-gray-600 mb-8">
          Sign in to continue to your account
        </p>
        
        <SignIn>
          <SignIn.Form className="form-control">
            {/* Email or Username Field */}
            <SignIn.EmailOrPhoneField
              className="input input-bordered w-full mt-4"
              placeholder="Email or Username"
            />

            {/* Password Field */}
            <SignIn.PasswordField
              className="input input-bordered w-full mt-4"
              placeholder="Password"
            />

            {/* Submit Button */}
            <button className="btn btn-primary w-full mt-6">
              Sign In
            </button>
          </SignIn.Form>
        </SignIn>

        {/* Sign-Up Redirect */}
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{' '}
          <a href="/sign-up" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
