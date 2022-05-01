import React from "react";
import { FaCertificate } from "react-icons/fa";
import Cv from "../assets/cv_pdf.png";

const about = () => {
  return (
    <div name="about" className="w-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#087D97]  ">
              À propos
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px]  px-4 grid sm:grid-col gap-8">
          <div className="sm:text-left text-4xl font-bold">
            <p>
              Je suis <b className="text-4xl ">Saber Aissaoui</b>,<b className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-[#00d0ff]"> Développeur Full Stack Junior</b><br /><br />

              <p className="text-xl text-gray-300 flex flex-col items-center">
                Passionné par les nouvelles technologies et leurs facultés à améliorer la productivité des entreprises.
                je suis Saber, développeur Web Junior. Aprèsnombreuse formations dans la domaine, j'ai découvert le développement. Je m'y suis initié autant par curiosité que par plaisir en commençant par du PHP et JAVA afin de créer des applications.
                Cet intêret est devenu une véritable passion qui a nourri chez moi une forte envie d'apprendre.
                J 'ai donc décidé de changer d'orientation et de reprendre des études afin d'obtenir un Diplôme DWWM bac+2, ce qui me permettait également d'explorer le web, tout en légitimant mes connaissances techniques et ainsi avoir un premier passeport pour exercer en professionnel. Une véritable passion qui a nourri chez moi une forte envie d'apprendre.
                Après avoir obtenu mon diplôme, j'ai poursuivi mon apprentissage et grâce à ma capacité d'assimilation, je me suis formé en autodidacte et je me suis spécialisé sur les technologies du web. Autant passionné par le Front-end que par le Back-end, je souhaite, à terme, devenir développeur Full Stack.
                Encore actuellement, je continue d'apprendre et de pratiquer activement sur des projets personnels afin de perfectionner mes connaissances et de conforter mes acquis. Je suis prêt à mettre à votre service toute ma compétence. N'hésitez pas à me contacter pour plus d'informations.
              </p>
              <div className="flex-row justify-around md:flex">
                <ul className="text-base sm:text-xl sm:my-24 grid items-center">
                    <li>
                      <FaCertificate size={22} className="text-[#087D97] inline m-4" />Vous recherchez un développeur?
                    </li>
                    <li>
                      <FaCertificate size={22} className="text-[#087D97] inline m-4" />Vous souhaitez créer un site?

                    </li>
                    <li>
                      <FaCertificate size={22} className="text-[#087D97] inline m-4" />Organiser une équipe?
                    </li>
                </ul>
                <div className="md:w-1/2 flex flex-col justify-right items-center ">
                  <img src={Cv} alt="Saber_Cv" className="w-2/3 " />

                    <button onClick={() => window.open("https://cv.saber-aissaoui.com/")} type="submit" className="rounded-sm border-2 border-white py-3 px-3 my-4 text-white hover:bg-[#112747] text-xl font-bold">
                      Résumé PDF
                    </button>
 
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
