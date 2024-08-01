"use-client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";

const register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className=" mx-auto flex size-full flex-col py-10 max-w-[496px]">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
            color="black"
          />
          <RegisterForm user={user} />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end xl:text-left">© HealthCare</p>
            <Link href="/?admin=true" className="">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/register.png"
        alt=""
        width={1000}
        height={1000}
        className="hidden h-full object-cover md:block max-w-[40%] text-dark-600"
      />
    </div>
  );
};

export default register;
