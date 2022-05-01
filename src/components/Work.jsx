import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import Realestate from "../assets/realestate.jpg";

function Work() {
  return (
    <div name="work" className="w-full md:h-scree bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#087D97]">
            Mes Projets:
          </p>
          <p className="py-6">voir mes projets frontend et backend</p>
        </div>

        {/* Container */}
          <div className="grid sm:grid-col md:grid-cols-2 gap-4">
          {/* Grid Element */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Effet de Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-bold text-white tracking-wider">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    type="button"
                    className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"
                  >
                    Démo
                  </button>
                </a>
                <a href="/">
                  <button
                    type="button"
                    className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Realestate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Effet de Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-bold text-white tracking-wider">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    type="button"
                    className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"
                  >
                    Démo
                  </button>
                </a>
                <a href="/">
                  <button
                    type="button"
                    className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Effet de Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-bold text-white tracking-wider">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    type="button"
                    className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"
                  >
                    Démo
                  </button>
                </a>
                <a href="/">
                  <button
                    type="button"
                    className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Realestate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Effet de Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-bold text-white tracking-wider">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    type="button"
                    className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"
                  >
                    Démo
                  </button>
                </a>
                <a href="/">
                  <button
                    type="button"
                    className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Effet de Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-bold text-white tracking-wider">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    type="button"
                    className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"
                  >
                    Démo
                  </button>
                </a>
                <a href="/">
                  <button
                    type="button"
                    className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Realestate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Effet de Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-bold text-white tracking-wider">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    type="button"
                    className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"
                  >
                    Démo
                  </button>
                </a>
                <a href="/">
                  <button
                    type="button"
                    className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
