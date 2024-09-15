// Show loader
document.getElementById("loader").style.display = "block";

// Initialize Cloudinary gallery
const myGallery = cloudinary.galleryWidget({
  container: "#my-gallery",
  cloudName: "dzgdcc0lw",
  mediaAssets: [
    { tag: "keerti-3d-visual-gallery" }, // by default mediaType: "image"
    { tag: "keerti-3d-visual-gallery", mediaType: "video" },
    { tag: "keerti-3d-visual-gallery", mediaType: "spin" },
  ],
  aspectRatio: "4:3",
  navigationButtonProps: {
    shape: "square",
    color: "#FFFFFF",
    iconColor: "#000000",
  },
  transition: "fade",
  themeProps: {
    active: "#ff4a17",
    onPrimary: "#ff4a17",
  },
  carouselLocation: "bottom",
  thumbnailProps: {
    navigationColor: "#FFFFFF",
    navigationIconColor: "#ff4a17",
    selectedBorderPosition: "bottom",
    mediaSymbolShape: "square",
  },
  carouselOffset: 10,
});

// Render gallery and hide loader after it's rendered
myGallery
  .render()
  .then(() => {
    // Once gallery is rendered, hide the loader
    document.getElementById("loader").style.display = "none";
  })
  .catch((err) => {
    console.error("Gallery load failed", err);
    document.getElementById("loader").style.display = "none"; // hide loader even on error
  });
