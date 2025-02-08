import React, { useState } from "react";
import { useForm } from "react-hook-form";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import RegisterGuest from "../lib/mutation/Guest/Register";
import ResgisterUser from "../lib/mutation/User/Register";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const {mutate:Guest,isPending:GuestPending}=RegisterGuest();
  const {mutate:User,isPending:userPending}=ResgisterUser()
  const [ guest,setguest]=useState(false)

  const onSubmit = (data) => {
    const payload={
      name:data?.firstName + " "+data?.lastName,
      email:data?.email,
      password:data?.password
    }
    if(guest){
      Guest(payload)

      setguest(false)
    }else{
      User(payload)
    }
  };

  return (
    <>
      <div className="w-[1200px] max-w-full mx-auto bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 md:p-6 rounded-xl">
        <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Create Account
            </h2>
            <p className="text-gray-600">
              Join us to start managing your events
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">First Name</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <PersonIcon />
                  </span>
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/50"
                    placeholder="John"
                    {...register("firstName", { required: "First name is required" })}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Last Name</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <PersonIcon />
                  </span>
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/50"
                    placeholder="Doe"
                    {...register("lastName", { required: "Last name is required" })}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <EmailIcon />
                </span>
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/50"
                  placeholder="your@email.com"
                  {...register("email", { required: "Email is required", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <LockIcon />
                </span>
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/50"
                  placeholder="••••••••"
                  {...register("password", { required: "Password is required", minLength: 6,  })} // Added minLength
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <LockIcon />
                </span>
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/50"
                  placeholder="••••••••"
                  {...register("confirmPassword", { 
                    required: "Confirm password is required",
                    validate: (value) => value === getValues("password") || "Passwords do not match"  // Password matching validation
                  })}
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transition-colors"
                {...register("terms", { required: "You must agree to the terms and conditions" })} // Added terms checkbox and validation
              />
              <label className="ml-2 block text-sm">
                I agree to the Terms and Privacy Policy
              </label>
              {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Create Account
            </button>
            <button
              type="submit"
              className="w-full px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center"
            onClick={()=>setguest(true)}
            
            >
              Create Account as Guest
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500 ml-1 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;