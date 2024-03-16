"use client";

import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Contacts() {
  const [data, setData] = useState<{
    first_name: string;
    last_name: string;
    company: string;
    phone_number: string;
    email: string;
    subject: string;
    message: string;
  }>({
    first_name: "",
    last_name: "",
    company: "",
    phone_number: "",
    email: "",
    subject: "",
    message: "",
  });

  // const [loading, setLoading] = useState(false);

  // if (loading) return toast.loading("Sending Message...");

  // const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!data.first_name) {
  //     return toast.error("Please enter your first name");
  //   }
  //   if (!data.email) {
  //     return toast.error("Please enter your email");
  //   }
  //   if (!data.phone_number) {
  //     return toast.error("Please enter your phone number");
  //   }
  //   if (!data.subject) {
  //     return toast.error("Please enter a subject");
  //   }
  //   if (!data.message) {
  //     return toast.error("Please enter a message");
  //   }

  //   setLoading(true);
  //   const response = await fetch("/api/send", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   if (response.status === 200) {
  //     setLoading(false);
  //     toast.success(
  //       `Hey ${data.first_name}, your message was sent successfully! Check your inbox!`
  //     );
  //   }
  // };
  return (
    <section className="isolate p-6 py-24 sm:py-32 lg:p-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Cniper
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Quality always comes first. We strive to provide the best service to
          our customers.
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first_name"
                id="first_name"
                value={data.first_name}
                onChange={(e) =>
                  setData({ ...data, first_name: e.target.value })
                }
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={data.last_name}
                onChange={(e) =>
                  setData({ ...data, last_name: e.target.value })
                }
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                value={data.company}
                onChange={(e) => setData({ ...data, company: e.target.value })}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone_number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-2 pr-8 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm"
                >
                  <option>GH (+233)</option>
                  <option>NG (+234)</option>
                  <option>CI (+225)</option>
                  <option>TG (+228)</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone_number"
                id="phone_number"
                value={data.phone_number}
                onChange={(e) =>
                  setData({ ...data, phone_number: e.target.value })
                }
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Subject
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="subject"
                id="subject"
                value={data.subject}
                onChange={(e) => setData({ ...data, subject: e.target.value })}
                autoComplete="subject"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </section>
  );
}
