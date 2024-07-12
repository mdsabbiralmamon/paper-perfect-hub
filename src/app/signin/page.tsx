'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = async () => {
    const result = await signIn('credentials', { email, password, redirect: false, callbackUrl: '/' })
    if (result?.error) {
      Swal.fire({
        title: 'Failed!',
        text: 'Sign in Failed. Please recheck Credentials...',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Success!',
        text: 'Sign in successful. Redirecting...',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        router.push('/');
      });
    }
  };

  const handleGithubSignIn = async () => {
    await signIn('github', { callbackUrl: '/' });
  };

  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: '/' });
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className='flex justify-center items-center'>
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-700">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block p-4 w-full rounded-md border-0 bg-gray-50 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-700">
                  Password
                </label>
                <div className="text-sm">
                  <div onClick={() => router.push('/forgot-password')} className="cursor-pointer font-semibold text-indigo-500 hover:text-indigo-400">
                    Forgot password?
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block p-4 w-full rounded-md border-0 bg-gray-50 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleSignIn}
                disabled={!email || !password}
                className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-600">
            Not a member?{' '}
            <button onClick={() => router.push('signup')} className="font-semibold leading-6 text-indigo-500 hover:text-indigo-400">
              Sign Up
            </button>
          </p>
          {/* social login buttons */}
          <div className='mt-4 flex items-center justify-center'>
            <div className='text-gray-700 w-full'>
              <div className="divider divider-primary w-full">Or continue with</div>
              <div className='mt-10 flex justify-center items-center gap-8'>
                <button onClick={handleGithubSignIn} className='btn btn-primary text-gray-700 border-gray-300'><FaGithub className='text-2xl text-white' /></button>
                <button onClick={handleGoogleSignIn} className='btn btn-primary text-gray-700 border-gray-300'><FaGoogle className='text-2xl text-white' /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}