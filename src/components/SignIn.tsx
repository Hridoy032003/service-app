import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubAuth from "./GithubAuth";
import GoogleAuth from "./GoogleAuth";
import SignInFrom from "./SignInFrom";

const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <h1 className="text-2xl font-semibold tracking-tight text-center">Wealcome Back!</h1>
        <SignInFrom />
      <GithubAuth/>
      <GoogleAuth />
      
    </div>
  );
};

export default SignIn;
