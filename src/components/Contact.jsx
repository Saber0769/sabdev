import React from 'react'
// import 

function Contact() {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/47501ebf-7ea2-461f-b902-b2df12a0bd54" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl inline font-bold border-b-4 border-[#087D97]">Contacter moi</p>
          <p className="py-4"> Submit the form below or shoot me an Email - <b>saber.aissaoui@yahoo.com</b></p>
        </div>
        <input name="name" required type="text" placeholder="Name" className="bg-[#ccd6f6] p-2 text-black text-lg"></input>
        <input name="email" type="email" required placeholder="Email" className="my-4 p-2 bg-[#ccd6f6] text-black text-lg"></input>
        <textarea name="message" rows="10" placeholder="Message" className="bg-[#ccd6f6] p-2 text-black text-lg"></textarea>
        <button type="submit" className=" w-1/3 rounded-sm border-2 border-white py-3 my-4 text-white hover:bg-green-800 text-xl font-bold grid grid-col justify-center items-center">
          Envoyer
        </button>
      </form>
    </div>
  )
}

export default Contact