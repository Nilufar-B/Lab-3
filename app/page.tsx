import React from "react"

const Home = () => {
  return (
    <>
      <div className="relative pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Effortless Task Management
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                Easily create, edit, and organize your tasks. Our intuitive interface ensures 
                that managing your to-dos is a breeze.
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <a
                      href="/todo"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium  hover:bg-blue-dark lg:px-7"
                    >
                      Get Started
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://i.ibb.co/HgN7ZTL/markus-winkler-Q2-J2q-Qso-YH8-unsplash.jpg"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home






