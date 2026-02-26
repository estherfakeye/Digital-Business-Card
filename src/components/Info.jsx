import { Icon } from '@iconify/react'
export default function Info() {
  return (
    <div className="text-center">
      <img src="/Esther.jpg" alt="Esther" className="w-full h-99 object-cover rounded-t-lg" />

      <div className="bg-black p-6">
        <h1 className="text-white text-3xl font-bold mb-2">Esther Fakeye</h1>
        <p className="text-purple-400 text-sm mb-2">Frontend Developer</p>
        <p className="text-gray-400 text-xs mb-4">esthercodes.com</p>

         <button className="bg-white text-black px-6 py-2 rounded-md font-semibold flex items-center justify-center gap-2 w-full hover:bg-gray-100">
          <Icon icon="mdi:email" className="w-5 h-5" />
          Email
        </button>

      </div>

    </div>
  )
}