'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { VideoGallery } from "@/components/video-gallery"

export default function Home() {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title: "Thanks for following!",
      description: "You'll now get updates on my latest BMX content!",
    })
  }

  return (
    <div className="min-h-full">
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div className="relative h-[80vh] overflow-hidden">
          <img 
            src="https://storage.googleapis.com/magnolia-storage-dev-test-123/images/ojLd8F6Q1E/image.jpg" 
            alt="BMX rider performing aerial trick" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-[800px] mx-auto text-center text-white">
              <h1 className="text-5xl font-bold tracking-tight lg:text-7xl mb-4">
                EXTREME <span className="text-red-500">BMX</span> TRICKS
              </h1>
              <p className="mt-6 text-xl max-w-[600px] mx-auto">
                Follow my TikTok for mind-blowing stunts, behind-the-scenes content, and BMX tutorials
              </p>
              <div className="mt-12 flex gap-4 justify-center">
                <Button size="lg" className="px-8 bg-red-500 hover:bg-red-600 text-white border-none" onClick={showToast}>Follow Me</Button>
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white/20">
                  Watch Latest
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Follow My <span className="text-red-500">BMX</span> Journey?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="border-t-4 border-red-500">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Epic Stunts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Watch me push the limits with jaw-dropping tricks, jumps, and flips that will leave you amazed.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-red-500">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Behind The Scenes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get exclusive access to my training routines, bike setups, and the real story behind each stunt.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-red-500">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Learn & Grow</h3>
              <p className="text-muted-foreground leading-relaxed">
                Follow along as I share tips, tutorials, and progression videos to help you improve your own BMX skills.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-[1200px] mx-auto">
            <div className="md:w-1/2">
              <img 
                src="https://storage.googleapis.com/magnolia-storage-dev-test-123/images/jBdiXPLzAK/image.jpg" 
                alt="BMX bike close-up with graffiti background" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-white">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Join My <span className="text-red-500">TikTok</span> Community
              </h2>
              <p className="mb-8 text-lg">
                Don't miss out on daily BMX content, live streams, and exclusive challenges. Hit follow now and be part of the most extreme BMX community on TikTok!
              </p>
              <div className="flex gap-4">
                <Button className="px-8 bg-red-500 hover:bg-red-600 text-white border-none">
                  Follow @BMXTikTok
                </Button>
                <Button variant="outline" className="px-8 text-white border-white hover:bg-white/20">
                  Watch Latest
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Latest <span className="text-red-500">BMX</span> Videos</h2>
        <VideoGallery />
        <div className="text-center mt-12">
          <Button className="px-8 bg-red-500 hover:bg-red-600 text-white border-none">
            See All Videos
          </Button>
        </div>
      </section>
    </div>
  )
}




