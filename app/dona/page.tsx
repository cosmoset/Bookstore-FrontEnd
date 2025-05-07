"use client"
import TiltedCard from "@/All Components /tiltcard";

export default function Showbiz() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {/* Card 1 */}
      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Kendrick Lamar - GNX Album Cover"
        containerWidth="200px"
        imageWidth="200px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        displayOverlayContent={true}
        overlayContent={
          <div className="absolute inset-0 flex flex-col p-4 bg-black bg-opacity-70 text-white">
            <h3 className="text-xl font-bold mb-2">Kendrick Lamar - GNX</h3>
            
          </div>
        }
      />
      
      {/* Card 2 */}
      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Another Album"
        containerWidth="200px"
        imageWidth="200px"
        displayOverlayContent={true}
        overlayContent={
          <div className="absolute inset-0 flex flex-col p-4 bg-black bg-opacity-70 text-white">
            <h3 className="text-xl font-bold mb-2">Album Title</h3>
            
          </div>
        }
      />
      
      {/* Card 3 */}
      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Third Album"
        containerWidth="200px"
        imageWidth="200px"
        displayOverlayContent={true}
        overlayContent={
          <div className="absolute inset-0 flex flex-col p-4 bg-black bg-opacity-70 text-white">
            <h3 className="text-xl font-bold mb-2">Album Title</h3>
            
          </div>
        }
      />
    </div>
  );
}