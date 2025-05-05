'use client'

import { Button } from '@/components/ui/button'

const socialLinks = [
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@yourusername',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
        <path d="M15 8c0 1.657-1.343 3-3 3v5.5a6.5 6.5 0 1 1-6.5-6.5H7V6c1.657 0 3 1.343 3 3h5z"></path>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/yourusername',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@yourusername',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
        <path d="m10 15 5-3-5-3z"></path>
      </svg>
    ),
  },
]

export function SocialLinks() {
  return (
    <div className="flex space-x-2">
      {socialLinks.map((social) => (
        <a 
          key={social.name} 
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex"
        >
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full border-gray-300 hover:border-red-500 hover:text-red-500 transition-colors"
          >
            {social.icon}
          </Button>
        </a>
      ))}
    </div>
  )
}
