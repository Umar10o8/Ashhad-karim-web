// Every image on the site uses the same shape: { src, srcSet?, width, height }.
// ResponsiveImage renders it inside a fixed aspect-ratio box, so swapping a photo never
// changes the layout.

// For bundled assets in src/assets/images, exported at a small and a large width.
// `width`/`height` are the intrinsic size of the large file (used to reserve space and as its
// srcset width); `smallWidth` is the small file's width (800px unless the source was narrower).
export function responsiveAsset({ small, large, width, height, smallWidth = 800 }) {
  return { src: large, srcSet: `${small} ${smallWidth}w, ${large} ${width}w`, width, height }
}

// For a single file, e.g. a verified project photo placed in /public/portfolio/.
export function localImage(src, width, height) {
  return { src, width, height }
}
