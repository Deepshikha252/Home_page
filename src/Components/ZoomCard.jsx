import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ZoomCard = () => {
  const cartItems = [
    { id: 1, image: "bg12.png", icon: "icon.svg" },
    { id: 2, image: "bg12.png", icon: "icon.svg" },
    { id: 3, image: "bg12.png", icon: "icon.svg" },
    { id: 4, image: "bg12.png", icon: "icon.svg" },
    { id: 5, image: "bg12.png", icon: "icon.svg" },
    // ... other cart items
  ];

  return (
    <div className="container mx-auto p-">
      <div className="flex flex-row space-x-2 overflow-y-auto md:flex-nowrap">
        {cartItems.map((item) => (
          <div key={item.id} className="relative flex-none w-56 h-60">
            <div className="w-full h-full overflow-hidden bg-white rounded shadow-md">
              <img
                src={item.image}
                alt={`Cart item ${item.id}`}
                className="object-cover w-full h-full"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={`Icon for cart item ${item.id}`}
                  className="w-12 h-12"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZoomCard;
