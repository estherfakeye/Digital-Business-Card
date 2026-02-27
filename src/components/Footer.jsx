import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer className="bg-black px-4 sm:px-6 py-5 sm:py-6 rounded-b-2xl border-t border-gray-400">
      <div className="flex justify-center gap-4 sm:gap-6">
        <a 
          href="https://twitter.com/yourhandle" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-500 transition-colors"
        >
          <Icon icon="mdi:twitter" className="w-6 h-6" />
        </a>
        
        <a 
          href="https://facebook.com/yourprofile" 
          target="_blank"
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-purple-500 transition-colors"
        >
          <Icon icon="mdi:facebook" className="w-6 h-6" />
        </a>
        
        <a 
          href="https://instagram.com/yourhandle" 
          target="_blank"
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-purple-500 transition-colors"
        >
          <Icon icon="mdi:instagram" className="w-6 h-6" />
        </a>
        
        <a 
          href="https://linkedin.com/in/yourprofile" 
          target="_blank"
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-purple-500 transition-colors"
        >
          <Icon icon="mdi:linkedin" className="w-6 h-6" />
        </a>
        
        <a 
          href="https://github.com/yourusername" 
          target="_blank"
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-purple-500 transition-colors"
        >
          <Icon icon="mdi:github" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  )
}