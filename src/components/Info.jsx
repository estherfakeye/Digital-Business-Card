import { Icon } from '@iconify/react'
export default function Info() {
  return (
    <div className="text-center">
      <img src="/Esther.jpg" alt="Esther" className="w-full h-72 sm:h-96 object-top object-cover rounded-t-2xl" />

      <div className="bg-black p-6">
        <h1 className="text-white text-3xl font-bold mb-1 sm:text-4xl">Esther Fakeye</h1>
        <p className="text-purple-400 text-sm mb-1">Frontend Developer</p>
        <p className="text-gray-400 text-xs mb-2 sm:text-sm">esthercodes.com</p>

         <a 
            href="mailto:your.fakeyeesther04@gmail.com"
            className="bg-white text-gray-900 px-4 sm:px-6 py-2 rounded-md font-semibold flex items-center justify-center gap-2 w-full hover:bg-gray-100 text-sm sm:text-base"
          >
            <Icon icon="mdi:email" className="w-4 h-4 sm:w-5 sm:h-5" />
            Email
          </a>

      </div>

    </div>
  )
}