"use client";

import Link from "next/link";
const Hero = () => {
  return (
    <>
    
        
<section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
  <div className="container">
    <div className="-mx-4 flex flex-wrap justify-center">
      <div className="w-full px-4 lg:w-8/12">
        <div
          className="shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:px-12 xl:p-[55px]"
        >
          <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Skill Bridge Academy – Registration Form
          </h2>
          <p className="mb-12 text-base font-medium text-body-color">
            Please provide the student and parent details below. Our team will get in touch shortly.
          </p>

          {/* ✅ Formspree integration */}
          <form
  action="https://formspree.io/f/xpwyqobn"
  method="POST"
  onSubmit={(e) => {
    // stop browser from following Formspree's "thanks" page
    e.preventDefault();

    // let Formspree process the form manually
    fetch("https://formspree.io/f/xpwyqobn", {
      method: "POST",
      body: new FormData(e.currentTarget),
      headers: { Accept: "application/json" },
    }).then((response) => {
      if (response.ok) {
        alert("✅ Thanks! Your registration has been submitted.");
        // redirect to homepage
        window.location.href = "http://localhost:3000";
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    });
  }}
>
            <div className="-mx-4 flex flex-wrap">
              {/* Student Information */}
              <div className="w-full px-4">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  Student Information
                </h3>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    name="studentFirstName"
                    placeholder="Enter first name"
                    required
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-base outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    name="studentLastName"
                    placeholder="Enter last name"
                    required
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-base outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium">Age</label>
                  <input
                    type="number"
                    name="studentAge"
                    placeholder="Enter age"
                    min="3"
                    max="100"
                    required
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-base outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium">Subjects Interested</label>
                  <input
                    type="text"
                    name="subjects"
                    placeholder="E.g., Math, Science, Art"
                    required
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-base outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Parent Information */}
              <div className="w-full px-4">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  Parent / Guardian Information
                </h3>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    name="parentFirstName"
                    placeholder="Enter parent first name"
                    required
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-base outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    name="parentLastName"
                    placeholder="Enter parent last name"
                    required
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-base outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    name="parentEmail"
                    placeholder="Enter email"
                    required
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-base outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="parentPhone"
                    placeholder="+1-902-123-4567"
                    required
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-base outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="w-full px-4">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Write your message..."
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-4 py-3 text-base outline-none focus:border-primary"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="w-full px-4">
                <button
                  type="submit"
                  className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Hero;
