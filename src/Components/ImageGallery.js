// import React from 'react'

// const ImageGallery = () => {
//   return (
//     <div>

//     <div className="grid grid-cols-1 gap-4 p-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
//       <div className="relative overflow-hidden rounded-lg group">
//         {/* <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
//           <span className="sr-only">View</span>
//         </Link> */}
//         <img
//           src={rectangle26}
//           alt=""
          
//           className="object-cover bg-center bg-cover transition-transform duration-300 ease-in-out md:h[250px] group-hover:scale-105"
//         />
//         <div className="absolute inset-0 transition-colors duration-300 ease-in-out bg-black/0 group-hover:bg-black/20" />
//       </div>
//       <div className="relative overflow-hidden rounded-lg group">
//         {/* <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
//           <span className="sr-only">View</span>
//         </Link> */}
//         <img
//           src={rectangle29}
//           alt=""
//           width={200}
//           height={230}
//           className="object-cover  transition-transform duration-300 ease-in-out md:h[250px] group-hover:scale-105"
//         />
//         <div className="absolute inset-0 transition-colors duration-300 ease-in-out bg-black/0 group-hover:bg-black/20" />
//       </div>
//       <div className="relative overflow-hidden rounded-lg group">
//         {/* <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
//           <span className="sr-only">View</span>
//         </Link> */}
//         <img
//           src={rectangle30}
//           alt=""
         
//           className="object-cover transition-transform duration-300 ease-in-out md-w[620px] md:h-[505px] group-hover:scale-105"
//         />
//         <div className="absolute inset-0 transition-colors duration-300 ease-in-out bg-black/0 group-hover:bg-black/20" />
//       </div>
//       <div className="relative overflow-hidden rounded-lg group">
//         {/* <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
//           <span className="sr-only">View</span>
//         </Link> */}
//         <img
//           src={rectangle27}
//           alt=""
//           width={475}
//           height={475}
//           className="object-cover transition-transform duration-300 ease-in-out h-100 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 transition-colors duration-300 ease-in-out bg-black/0 group-hover:bg-black/20" />
//       </div>
//       <div className="relative overflow-hidden rounded-lg group">
//         {/* <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
//           <span className="sr-only">View</span>
//         </Link> */}
//         <img
//           src={rectangle28}
//           alt=""
//           width={475}
//           height={717}
//           className="object-cover w-full transition-transform duration-300 ease-in-out h-60 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 transition-colors duration-300 ease-in-out bg-black/0 group-hover:bg-black/20" />
//       </div>
     
//     </div>
//     </div>
//   )
// }

// export default ImageGallery
// import React from 'react';


// import rectangle26 from "../assets/img/rectangle26.png";
// import rectangle27 from "../assets/img/rectangle27.png";
// import rectangle29 from "../assets/img/rectangle29.png";
// import rectangle28 from "../assets/img/rectangle28.png";
// import rectangle30 from "../assets/img/rectangle30.png";
// const ImageGallery = () => {
//   const images = [
//     { src: "https://source.unsplash.com/400x300/?hanging-planters", alt: "Hanging Planters", label: "Hanging Planters" },
//     { src: "https://source.unsplash.com/400x300/?planter-stand", alt: "Planter Stand with Pots", label: "Planter Stand with Pots" },
//     { src: "https://source.unsplash.com/400x300/?watering-cans", alt: "Watering Cans", label: "Watering Cans" },
//     { src: "https://source.unsplash.com/400x300/?metal-planters", alt: "Metal Planters", label: "Metal Planters" },
//     { src: "https://source.unsplash.com/400x300/?table-top-planters", alt: "Table Top Planters", label: "Table Top Planters" },
   
   
//   ];

//   return (
//     <div className="flex flex-col gap-3 md:grid md:grid-cols-3">
//       {images.map((image, index) => (
//         <div key={index} className="relative overflow-hidden rounded">
//           <img src={image.src} alt={image.alt} className="w-full h-auto" />
//           <p
//             className="absolute inset-0 flex items-center justify-center text-2xl font-medium text-center text-white transition duration-300 bg-black cursor-pointer bg-opacity-40 font-roboto hover:bg-opacity-60"
//           >
//             {image.label}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGallery
import React from "react";

const images = [
  { id: 1, src: "image1.png", alt: "Image 1" },
  { id: 2, src: "image2.png", alt: "Image 2" },
  { id: 3, src: "image5.png", alt: "Image 5" },
  { id: 4, src: "image3.png", alt: "Image 3" },
  { id: 5, src: "image4.png", alt: "Image 4" },
];

const ImageGallery = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="grid grid-rows-1 md:grid-cols-3">
        {images.map((image) => (
          <div key={image.id} className="relative w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-[1300px] h-[600px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default  ImageGallery;
