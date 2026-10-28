// Every image on the site uses the same shape: { src, srcSet?, width, height }.
// ResponsiveImage renders it inside a fixed aspect-ratio box, so swapping a photo never
// changes the layout.

// For bundled assets in src/assets/images, exported at 800px and 1600px wide.
// `width`/`height` are the intrinsic size of the large file (used to reserve space).
export function responsiveAsset({ small, large, width, height }) {
  return { src: large, srcSet: `${small} 800w, ${large} 1600w`, width, height }
}

// For a single file, e.g. a verified project photo placed in /public/portfolio/.
export function localImage(src, width, height) {
  return { src, width, height }
}
