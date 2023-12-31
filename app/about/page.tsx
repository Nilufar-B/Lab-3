import React from "react";

const About = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                     className="w-full rounded-2xl"
                      src="https://i.ibb.co/HgN7ZTL/markus-winkler-Q2-J2q-Qso-YH8-unsplash.jpg"
                      alt=""
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                     className="w-full rounded-2xl"
                      src="https://i.ibb.co/X4Z2nfD/donald-giannatti-HWTXld-FPVKM-unsplash.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/sV608DN/glenn-carstens-peters-RLw-UC03-Gwc-unsplash.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why do you need a task list?
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  A task list, also known as a to-do list, is a useful tool for several reasons:
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Organization: A task list helps you organize your thoughts and responsibilities. 
                By listing tasks in a systematic way, you can prioritize and categorize them based 
                on urgency and importance.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Prioritization: It allows you to prioritize tasks, ensuring that you focus on the 
                most important and time-sensitive activities first. This helps you manage your time 
                effectively and ensures that critical tasks are addressed promptly.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Productivity: Having a task list can boost your productivity. It provides a clear
                 outline of what needs to be done, helping you stay focused and on track. Checking 
                 items off your list can also be satisfying and motivating.
                </p>
                <a
                  href="/todo"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
