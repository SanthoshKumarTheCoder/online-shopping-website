import React from "react";
import ContentLoader from "react-content-loader";

const DressLoader = () => (
  <ContentLoader
    speed={1}
    width={320}
    height={300}
    viewBox="0 0 320 400"
    backgroundColor="#f3f3f3"
   foregroundColor="#cbc4c4"
  >
    {/* ❤️ Heart Icon Placeholder */}
    <circle cx="25" cy="25" r="12" /> 

    {/* 👜 Image Placeholder */}
    <rect x="10" y="50" rx="10" ry="10" width="300" height="180" />

    {/* 🏷️ Product Title */}
    <rect x="20" y="240" rx="5" ry="5" width="250" height="20" />

    {/* 📝 Product Description */}
    <rect x="20" y="270" rx="5" ry="5" width="280" height="12" />
    <rect x="20" y="290" rx="5" ry="5" width="260" height="12" />
    <rect x="20" y="310" rx="5" ry="5" width="240" height="12" />

    {/* 💲 Price */}
    <rect x="20" y="340" rx="5" ry="5" width="60" height="18" />
    <rect x="90" y="340" rx="5" ry="5" width="50" height="18" />

    {/* ➕ Add Button */}
    <circle cx="290" cy="350" r="15" />
  </ContentLoader>
);

const DressLoadersList = () => {
  return (
    <div className="dress-loaders" style={{ display: "flex", gap: "1px", flexWrap: "wrap" }}>
      <DressLoader />
    </div>
  );
};

export default DressLoadersList;
