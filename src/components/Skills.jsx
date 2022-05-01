import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import Mongo from "../assets/mongo.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import php from "../assets/php.png";
import laravel from "../assets/laravel.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import angular from "../assets/angular.png";
import wordpress from "../assets/wordpress.png";
import photoshop from "../assets/photoshop.png";
import figma from "../assets/Figma.png";
import postgresql from "../assets/postgresql.png";
import bootstrap from "../assets/bootstrap.png";

function Skills() {
  return (
    <div name="skills" className="w-full h-scree bg-[#0a192f] text-gray-300">
      {/*====== Container ====*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#087D97] py-1">
            Competances
          </p>
          <p className="py-4">Voici les technologies que je metrise:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-9 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            {/*====== HTML =====*/}
            <img src={html} alt="html" className="w-20 mx-auto " />
            <p className="py-4 ">HTML</p>
            <div className="bg-green-500 w-100 h-0.5"></div>
          </div>

          {/*====== CSS =====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={css} alt="html" className="w-20 mx-auto " />
            <p className="py-4 ">CSS</p>
            <div className="bg-green-500 w-100 h-0.5"></div>
          </div>
          {/*====== Tailwind =====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Tailwind} alt="html" className="w-20 mx-auto" />
            <p className="py-4 ">TAILWIND</p>
            <div className="bg-green-500 w-4/5 h-0.5"></div>
          </div>
          {/*====== BOOTSTRAP =====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={bootstrap} alt="html" className="w-20 mx-auto" />
            <p className="py-4 ">BOOTSTRAP</p>
            <div className="bg-green-500 w-5/6 h-0.5"></div>
          </div>
          {/*====== JAVASCRIPT =====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={JavaScript} alt="html" className="w-20 mx-auto" />
            <p className="py-4 ">JAVASCRIPT</p>
            <div className="bg-green-500 w-4/6 h-0.5"></div>
          </div>
          {/*====== REACT JS =====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ReactImg} alt="html" className="w-20 mx-auto" />
            <p className="py-4 ">REACT JS</p>
            <div className="bg-green-500 w-3/6 h-0.5"></div>
          </div>

          {/*====== ANGULAR ======*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={angular} alt="html" className="w-20 mx-auto" />
            <p className="py-3.5 ">ANGULAR</p>
            <div className="bg-green-500 w-2/6 h-0.5"></div>
          </div>

          {/*====== NODE JS ====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Node} alt="html" className="w-20 mx-auto" />
            <p className="py-4 ">NODE JS</p>
            <div className="bg-green-500 w-4/6 h-0.5"></div>
          </div>
          {/*====== Mongo ====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Mongo} alt="html" className="w-20 mx-auto" />
            <p className="py-6 ">MONGO DB</p>
            <div className="bg-green-500 w-3/6 h-0.5"></div>
          </div>
          {/*====== PHP =====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={php} alt="html" className="w-36 mx-auto" />
            <p className="py-6">PHP</p>
            <div className="bg-green-500 w-5/6 h-0.5"></div>
          </div>
          {/*====== LARAVEL =====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={laravel} alt="html" className="w-20 mx-auto" />
            <p className="py-5 ">LARAVEL</p>
            <div className="bg-green-500 w-3/6 h-0.5 "></div>
          </div>
          {/*====== MYSQL =====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={mysql} alt="html" className="w-36 mx-auto" />
            <p className="py-3 ">MYSQL</p>
            <div className="bg-green-500 w-5/6 h-0.5"></div>
          </div>

          {/*====== JAVA =====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={java} alt="html" className="w-20 mx-auto" />
            <p className="py-5 ">JAVA</p>
            <div className="bg-green-500 w-4/6 h-0.5"></div>
          </div>

          {/*====== postgresql ======*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={postgresql} alt="html" className="w-24 mx-auto" />
            <p className="py-6 ">POSTGRESQL</p>
            <div className="bg-green-500 w-5/6 h-0.5"></div>
          </div>

          {/*====== WORDPRESS =====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={wordpress} alt="html" className="w-28 mx-auto" />
            <p className="py-4 ">WORDPRESS</p>
            <div className="bg-green-500 w-3/6 h-0.5"></div>
          </div>

          {/*====== FIGMA =====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={figma} alt="html" className="w-16 mx-auto" />
            <p className="py-6 ">FIGMA</p>
            <div className="bg-green-500 w-full h-0.5"></div>
          </div>

          {/*====== PHOTOSHOP =====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={photoshop} alt="html" className="w-28 mx-auto" />
            <p className="py-4 ">PHOTOSHOP</p>
            <div className="bg-green-500 w-full h-0.5"></div>
          </div>

          {/*====== GITHUB =====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Github} alt="html" className="w-28 mx-auto" />
            <p className="py-4 ">GITHUB</p>
            <div className="bg-green-500 w-5/6 h-0.5"></div>
          </div>
          {/*====== FIREBASE =====*/}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={FireBase} alt="html" className="w-28 mx-auto" />
            <p className="py-4 ">FIREBASE</p>
            <div className="bg-green-500 w-5/6 h-0.5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
