import SignIn from '@/components/admin/SignIn'

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="text-2xl font-bold">MKM</div>
            <div className="ml-2 text-2xl font-semibold">Garage</div>
          </div>
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="mt-2">Sign in to access your account</p>
        </div>
        <SignIn />
      </div>
    </div>
  )
}

export default LoginPage