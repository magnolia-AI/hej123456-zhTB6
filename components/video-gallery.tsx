'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type Video = {
  id: string
  title: string
  thumbnail: string
  views: string
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Insane BMX Backflip Over 10ft Gap',
    thumbnail: 'https://images.unsplash.com/photo-1564510714747-69c3bc1fab41?auto=format&fit=crop&q=80&w=500',
    views: '1.2M',
  },
  {
    id: '2',
    title: 'BMX Street Session Downtown',
    thumbnail: 'https://images.unsplash.com/photo-1583457756740-b7f7241d8853?auto=format&fit=crop&q=80&w=500',
    views: '856K',
  },
  {
    id: '3',
    title: 'How I Learned 360 Tailwhip',
    thumbnail: 'https://images.unsplash.com/photo-1622818425825-1dcb2bca990d?auto=format&fit=crop&q=80&w=500',
    views: '1.5M',
  },
]

export function VideoGallery() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
      {videos.map((video) => (
        <Card key={video.id} className="overflow-hidden bmx-card">
          <div className="relative aspect-video">
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {video.views} views
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Watch
              </Button>
            </div>
          </div>
          <CardContent className="pt-4">
            <h3 className="font-semibold truncate">{video.title}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
