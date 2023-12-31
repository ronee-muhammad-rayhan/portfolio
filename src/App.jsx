import { useEffect, useState } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { NavLink } from 'react-router-dom'
import profile from "../public/assets/images/profile.png"
import banner from "../public/assets/images/banner.jpg"
import html from "../src/assets/images/icons/HTML.png"
import css from "../src/assets/images/icons/css.png"
import js from "../src/assets/images/icons/JavaScript.png"
import node from "../src/assets/images/icons/node.png"
import express from "../src/assets/images/icons/express.png"
import mongo from "../src/assets/images/icons/mongo.png"
import tour from "../public/assets/images/tour.png"
import print from "../public/assets/images/print.png"
import brand from "../public/assets/images/brand.png"

function App() {
  // const [count, setCount] = useState(0)
  const [showMenu, setShowMenu] = useState(false)
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      <div id='home'>
        {/* header section */}
        <header id='header' className="p-4 bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex justify-between h-16 mx-auto relative">
            <a rel="noopener noreferrer" href="https://roneemrayhan-portfolio.web.app/" aria-label="Back to homepage" className="flex items-center p-2">
              <img className='rounded-full w-10' src={profile} alt="profile" />
            </a>
            <ul className="items-stretch hidden space-x-3 lg:flex py-4">
              <li className="flex">
                <a rel="noopener noreferrer" href="#home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#skills" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Skills</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#projects" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Projects</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Contact</a>
              </li>
            </ul>
            <div className="flex-none">
              {/* Toggle button here */}
              <button className="btn btn-square btn-ghost">
                <label className="swap swap-rotate w-12 h-12">
                  <input type="checkbox" onChange={handleToggle}
                    // show toggle image based on localstorage theme
                    checked={theme === "light" ? false : true} />
                  {/* light theme sun image */}
                  <FaSun className="w-8 h-8 swap-on" />
                  {/* dark theme moon image */}
                  <FaMoon className="w-8 h-8 swap-off" />
                </label>
              </button>
            </div>
            <button onClick={() => setShowMenu(!showMenu)} className="p-4 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            {showMenu && <ul className="lg:hidden space-x-3 flex flex-col absolute top-20 right-3 bg-slate-400 py-4">
              <li className="flex">
                <a rel="noopener noreferrer" href="#home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#skills" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Skills</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#projects" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Projects</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Contact</a>
              </li>
            </ul>}
          </div>
        </header>
        {/* <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      {/* <h1>Ronee M Rayhan</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* main part */}
      <main id='main'>
        {/* banner section */}
        <section id='banner' className='w-full mx-auto bg-red-300'>
          <img className='object-cover h-[600px] w-full' src={banner} alt="banner" />
          {/* <img className='' src="../public/assets/images/banner.avif" alt="banner" width="700px" height="300px" style={{ width: "700px", height: "300px" }} /> */}
        </section>
        {/* about section */}
        <section id='about' className='py-10'>
          <h3 className="text-4xl text-red-600 font-bold text-center py-10">About</h3>
          <h1>Md. Rayhan Kibria Ronee</h1>
          <h5 className='text-2xl'>React Frontend Developer</h5>
          <h5 className='text-2xl'>I&apos;m from Bangladesh. Currently working with frontend using react and tailwind focusing on the MERN Stack.</h5>
          <a href='/Resume_RoneeMRayhan.pdf' download={true} className='text-3xl text-right'>Download Resume</a>
        </section>

        {/* skills section */}
        <section id='skills' className='flex flex-col justify-center items-center gap-3 py-10'>
          <h3 className="text-4xl text-red-600 font-bold text-center">Skills</h3>

          <br />

          Technologies that I know

          <br />
          <p className="text-center flex gap-4">
            <img src={html} />
            <img src={css} />
            <img src={js} />
          </p>
          <p className="text-center">
            <a href="https://skillicons.dev" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=react,tailwind,firebase" />
            </a>
          </p>
          <p className="text-center flex gap-4">
            <img src={node} />
            <img src={express} />
            <img src={mongo} />
          </p>
          <br />
        </section>
        {/* experiences section */}
        <section id='experiences' className='py-10'>
          <h3 className="text-4xl text-red-600 font-bold text-center pb-4">Experiences</h3>
          <p>I have 1 Year Experience in Web Development especially in frontend focusing on MERN Stack</p>
        </section>
        {/* projects section */}
        <section id='projects' className='py-10'>
          <h3 className="text-4xl text-red-600 font-bold text-center pb-3">Projects</h3>
          <div>
            <div className="bg-gray-100 text-gray-800">
              <div className="container flex flex-col justify-center p-6 mx-auto sm:py-2 lg:py-3 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                  <img src={tour} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                  <h1 className="text-5xl font-bold leadi sm:text-6xl">Tourist Guide
                    {/* <span className="text-indigo-600">senectus</span>erat pharetra */}
                  </h1>
                  <p className="mt-6 mb-8 text-lg sm:mb-12">Tourist Guide is a fully functional website using MERN Stack.
                    <br className="hidden md:inline lg:hidden" />There are 3 types role 1.tourist, 2.tour-guide and 3.admin.
                  </p>
                  <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" href="https://github.com/ronee-muhammad-rayhan/tourist-guide-client.git" className="px-8 py-3 text-lg font-semibold rounded hover:text-red-500 bg-indigo-600 text-gray-50">Client</a>
                    <a rel="noopener noreferrer" href="https://tour-guide-rmr.web.app/" className="px-8 py-3 text-lg font-semibold border rounded hover:text-red-500 hover:bg-indigo-600 border-gray-800">Live</a>
                    <a rel="noopener noreferrer" href="https://github.com/ronee-muhammad-rayhan/tourist-guide-server.git" className="px-8 py-3 text-lg font-semibold rounded  hover:text-red-500 bg-indigo-600 text-gray-50">Server</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 text-gray-800">
              <div className="container flex flex-col justify-center p-6 mx-auto sm:py-2 lg:py-4 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                  <img src={print} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                  <h1 className="text-5xl font-bold leadi sm:text-6xl">PrintHub Finder
                    {/* <span className="text-indigo-600">senectus</span>erat pharetra */}
                  </h1>
                  <p className="mt-6 mb-8 text-lg sm:mb-12">PrintHub Finder is a fully functional website using MERN Stack.
                    <br className="hidden md:inline lg:hidden" />There are 3 types role 1.user, 2.service-provider and 3.admin.
                  </p>
                  <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" href="https://github.com/ronee-muhammad-rayhan/print-hub-finder-client" className="px-8 py-3 text-lg font-semibold rounded hover:text-red-500 bg-indigo-600 text-gray-50">Client</a>
                    <a rel="noopener noreferrer" href="https://b8a11-client-print-hub-finder.web.app/" className="px-8 py-3 text-lg font-semibold border rounded hover:text-red-500 hover:bg-indigo-600 border-gray-800">Live</a>
                    <a rel="noopener noreferrer" href="https://github.com/ronee-muhammad-rayhan/print-hub-finder-server" className="px-8 py-3 text-lg font-semibold rounded  hover:text-red-500 bg-indigo-600 text-gray-50">Server</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 text-gray-800">
              <div className="container flex flex-col justify-center p-6 mx-auto sm:py-2 lg:py-4 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                  <img src={brand} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                  <h1 className="text-5xl font-bold leadi sm:text-6xl">ElecTech BrandShop
                    {/* <span className="text-indigo-600">senectus</span>erat pharetra */}
                  </h1>
                  <p className="mt-6 mb-8 text-lg sm:mb-12">ElecTech BrandShop is a fully functional website using MERN Stack.
                    <br className="hidden md:inline lg:hidden" />There are 2 types role 1.user, 2.admin.
                  </p>
                  <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" href="https://github.com/ronee-muhammad-rayhan/ElecTech-BrandShop-client" className="px-8 py-3 text-lg font-semibold rounded hover:text-red-500 bg-indigo-600 text-gray-50">Client</a>
                    <a rel="noopener noreferrer" href="https://b8a10-brandshop-electech.web.app/" className="px-8 py-3 text-lg font-semibold border rounded hover:text-red-500 hover:bg-indigo-600 border-gray-800">Live</a>
                    <a rel="noopener noreferrer" href="https://github.com/ronee-muhammad-rayhan/ElecTech-BrandShop-server.git" className="px-8 py-3 text-lg font-semibold rounded  hover:text-red-500 bg-indigo-600 text-gray-50">Server</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* education section */}
        <section id='education' className='py-10'>
          <h3 className="text-4xl text-red-600 font-bold text-center pb-4">Education</h3>
          <p>PGD-in-ICT (completed  in 2016)</p>
          <p>B.Sc. Engineering (completed in 2015)</p>
          <p></p>
        </section>
        {/* contact information section */}
        <section id='contact' className="py-6 bg-gray-100 dark:bg-gray-700 dark:text-gray-50">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Rangpur, Bangladesh</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+880 1737716972</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>roneemrayhan.edu@gmail.com</span>
                </p>
              </div>
            </div>
            <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
              <label className="block">
                <span className="mb-1">Full name</span>
                <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-2 px-2" spellCheck="false" data-ms-editor="true" />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-2 px-2" />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea rows="3" className="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800" spellCheck="false" data-ms-editor="true"></textarea>
              </label>
              <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri bg-gray-50 dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri">Submit</button>
            </form>
          </div>
        </section>

      </main>

      {/* footer section */}
      <footer id='footer' className="bg-gray-200 dark:bg-gray-800 dark:text-gray-50">
        <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-400">
          <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center space-x-4">
              <a rel="noopener noreferrer" href="#" title="Github" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                {/* <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4">
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg> */}
                <svg /* height="32" */ aria-hidden="true" viewBox="0 0 16 16" version="1.1" /* width="32" */ data-view-component="true" className="octicon octicon-mark-github v-align-middle color-fg-default w-4 h-4">
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                {/* <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path> */}
              </a>
              {/* <a rel="noopener noreferrer" href="#" title="Pinterest" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                  <path d="M16.021 0c-8.828 0-15.984 7.156-15.984 15.984 0 6.771 4.214 12.552 10.161 14.88-0.141-1.266-0.266-3.203 0.052-4.583 0.292-1.25 1.875-7.943 1.875-7.943s-0.479-0.964-0.479-2.375c0-2.219 1.292-3.88 2.891-3.88 1.365 0 2.026 1.021 2.026 2.25 0 1.37-0.87 3.422-1.323 5.323-0.38 1.589 0.797 2.885 2.365 2.885 2.839 0 5.026-2.995 5.026-7.318 0-3.813-2.75-6.49-6.677-6.49-4.547 0-7.214 3.417-7.214 6.932 0 1.375 0.526 2.854 1.188 3.651 0.13 0.161 0.146 0.302 0.109 0.464-0.12 0.5-0.391 1.599-0.443 1.818-0.073 0.297-0.229 0.359-0.536 0.219-1.99-0.922-3.245-3.839-3.245-6.193 0-5.036 3.667-9.672 10.563-9.672 5.542 0 9.854 3.958 9.854 9.229 0 5.516-3.474 9.953-8.307 9.953-1.62 0-3.141-0.839-3.677-1.839l-1 3.797c-0.359 1.391-1.339 3.135-2 4.193 1.5 0.458 3.078 0.714 4.734 0.714 8.813 0 15.979-7.151 15.979-15.984 0-8.828-7.167-15.979-15.979-15.979z"></path>
                </svg>
              </a>
              <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                  <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                </svg>
              </a> */}
              <a rel="noopener noreferrer" href="https://facebook.com/roneemrayhan" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a rel="noopener noreferrer" href="roneemrayhan.edu@gmail.com" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
