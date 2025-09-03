import React, { useState } from "react";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VideoItem {
  id: string;
  title: string;
  videoUrl: string;
  description?: string;
}

const demoVideos: VideoItem[] = [
  {
    id: '1',
    title: 'Удивительная планета',
    videoUrl: '/videos/Amazing_Planet.mp4',
    description: 'Захватывающее путешествие по нашей невероятной планете'
  },
  {
    id: '2',
    title: 'Европа к звездам',
    videoUrl: '/videos/Europe_to_the_stars.mp4',
    description: 'Астрономические открытия европейских обсерваторий'
  },
  {
    id: '3',
    title: 'Полёт фантазии',
    videoUrl: '/videos/Flight_of_Fancy.mp4',
    description: 'Виртуальное приключение в мире воображения'
  },
  {
    id: '4',
    title: 'Майянская археоастрономия',
    videoUrl: '/videos/Mayan_Archaeoastronomy.mp4',
    description: 'Древние астрономические знания цивилизации майя'
  },
  {
    id: '5',
    title: 'Космическая панда',
    videoUrl: '/videos/SPACE_PANDA.mp4',
    description: 'Забавное космическое приключение для всей семьи'
  },
  {
    id: '6',
    title: 'Космическое путешествие',
    videoUrl: '/videos/Ultimate_Space.mp4',
    description: 'Эпическое исследование космических просторов'
  },
  {
    id: '7',
    title: 'Мечты китов',
    videoUrl: '/videos/Whale_Dreams.mp4',
    description: 'Подводный мир и жизнь величественных китов'
  }
];

// Custom DialogContent without close button
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const VideoSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeVideo = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const navigateVideo = (direction: 'prev' | 'next') => {
    if (!selectedVideo) return;
    
    const currentIndex = demoVideos.findIndex(v => v.id === selectedVideo.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : demoVideos.length - 1;
    } else {
      newIndex = currentIndex < demoVideos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedVideo(demoVideos[newIndex]);
  };

  // Auto-play video when modal opens or video changes
  React.useEffect(() => {
    if (isModalOpen && selectedVideo) {
      const timer = setTimeout(() => {
        const videoElement = document.querySelector('video[controls]') as HTMLVideoElement;
        if (videoElement) {
          videoElement.play().catch(console.error);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isModalOpen, selectedVideo]);

  // Auto-scroll carousel every 2 seconds
  React.useEffect(() => {
    const carousel = document.querySelector('[data-orientation="horizontal"]');
    if (!carousel) return;

    const interval = setInterval(() => {
      const nextButton = carousel.querySelector('[data-orientation="horizontal"] ~ button:last-child') as HTMLButtonElement;
      if (nextButton) {
        nextButton.click();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="video" className="section section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Наш потрясающий видео-контент</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {demoVideos.map((video) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative">
                    <div 
                      className="relative rounded-xl overflow-hidden cursor-pointer border border-white/20 hover:border-[#80dfd5]/50 transition-all duration-300 hover:scale-[1.02]"
                      onClick={() => openVideo(video)}
                    >
                      {/* Video Preview */}
                      <div className="relative aspect-video bg-gray-900">
                        <video
                          className="w-full h-full object-cover"
                          preload="metadata"
                          muted
                          playsInline
                          onLoadedData={(e) => {
                            // Set current time to show a preview frame
                            const video = e.target as HTMLVideoElement;
                            if (video.duration > 0) {
                              video.currentTime = Math.min(5, video.duration * 0.1);
                            }
                          }}
                        >
                          <source src={video.videoUrl} type="video/mp4" />
                        </video>
                        
                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#80dfd5]/80 group-hover:scale-110 transition-all duration-300">
                            <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Video Info */}
                      <div 
                        className="p-4"
                        style={{
                          backgroundColor: 'rgb(40,20,40)',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#80dfd5] transition-colors">
                          {video.title}
                        </h3>
                        {video.description && (
                          <p className="text-sm text-purple-200 line-clamp-2">
                            {video.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 border-[#80dfd5]/50 text-[#80dfd5] hover:bg-[#80dfd5]/10 bg-gray-900/80 backdrop-blur-sm" />
            <CarouselNext className="-right-12 border-[#80dfd5]/50 text-[#80dfd5] hover:bg-[#80dfd5]/10 bg-gray-900/80 backdrop-blur-sm" />
          </Carousel>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-gray-900 border-gray-800">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-semibold text-white">
                {selectedVideo?.title}
              </DialogTitle>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 mr-4">
                  <div className="flex space-x-1">
                    {demoVideos.map((video) => (
                      <div
                        key={video.id}
                        className={`h-2 w-2 rounded-full transition-all ${
                          selectedVideo?.id === video.id 
                            ? 'bg-[#80dfd5] scale-125' 
                            : 'bg-gray-600 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => navigateVideo('prev')}
                  className="h-10 w-10 bg-[#80dfd5]/20 hover:bg-[#80dfd5]/30 text-[#80dfd5] border-[#80dfd5]/30 hover:scale-110 transition-all"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => navigateVideo('next')}
                  className="h-10 w-10 bg-[#80dfd5]/20 hover:bg-[#80dfd5]/30 text-[#80dfd5] border-[#80dfd5]/30 hover:scale-110 transition-all"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeVideo}
                  className="h-10 w-10 text-gray-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/30 border border-transparent transition-all"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            {selectedVideo?.description && (
              <p className="text-gray-300 text-sm mt-2">
                {selectedVideo.description}
              </p>
            )}
          </DialogHeader>
          
          <div className="p-6 pt-4">
            {selectedVideo && (
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <video
                  className="w-full h-full"
                  controls
                  autoPlay={false}
                  key={selectedVideo.id} // Force re-render when video changes
                >
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoSection;
