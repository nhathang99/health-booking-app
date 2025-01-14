import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end xl:text-left">© HealthCare</p>
            <Link href="/?admin=true" className="">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding.png"
        alt=""
        width={1000}
        height={1000}
        className="hidden h-full object-cover md:block max-w-[50%] text-dark-600"
      />
    </div>
  );
}
