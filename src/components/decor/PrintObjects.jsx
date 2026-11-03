// Original line-art objects drawn from print and out-of-home production: building wraps,
// billboards, exhibition stands, crop and registration marks, swatch fans, rulers, halftone dots.
// All decorative (aria-hidden), stroked or filled in currentColor so CSS sets their tint.

function Svg({ children, viewBox = '0 0 200 200', className = '', ...rest }) {
  return (
    <svg className={className} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...rest}>
      {children}
    </svg>
  )
}

export function BuildingWrap(props) {
  return (
    <Svg {...props}>
      <path d="M40 188V36l60-22 60 22v152" />
      <path d="M52 188V44M148 188V44" strokeWidth="1.5" />
      <path d="M40 70h120M40 104h120" strokeWidth="1" strokeDasharray="2 6" />
      <rect x="58" y="76" width="84" height="74" rx="4" />
      <path d="M58 132c20-14 44-20 84-14M66 88h40M66 98h28" />
      {[60, 80, 100, 120, 140].map((x) => <path key={x} d={`M${x} 160v10`} strokeWidth="1.5" />)}
      <path d="M24 188h152" />
    </Svg>
  )
}

export function BillboardFrame(props) {
  return (
    <Svg {...props}>
      <rect x="18" y="34" width="164" height="92" rx="6" />
      <rect x="28" y="44" width="144" height="72" rx="3" strokeWidth="1.5" />
      <path d="M40 104l30-30 22 20 18-14 50 24" strokeWidth="1.5" />
      <circle cx="140" cy="66" r="9" strokeWidth="1.5" />
      <path d="M46 20l8 14M100 16v18M154 20l-8 14" />
      <path d="M78 126v62M122 126v62M78 150h44M66 188h68" />
    </Svg>
  )
}

export function ExhibitionStand(props) {
  return (
    <Svg {...props}>
      <path d="M20 170l60-26h100l-60 26z" />
      <path d="M80 144V40h100v104" />
      <path d="M80 40l-60 26v104" />
      <rect x="92" y="28" width="76" height="20" rx="3" />
      <rect x="96" y="66" width="68" height="44" rx="4" strokeWidth="1.5" />
      <path d="M52 158v-30h40v18" />
      <path d="M36 92l32-14M36 104l32-14" strokeWidth="1.5" />
    </Svg>
  )
}

export function CropTarget(props) {
  return (
    <Svg {...props}>
      <path d="M48 20v24M20 48h24M152 20v24M180 48h-24M48 180v-24M20 152h24M152 180v-24M180 152h-24" />
      <circle cx="100" cy="100" r="34" />
      <circle cx="100" cy="100" r="18" strokeWidth="1.5" />
      <path d="M100 52v96M52 100h96" strokeWidth="1.5" />
      <path d="M100 82a18 18 0 0 1 18 18h-18z" fill="currentColor" stroke="none" />
      <path d="M100 118a18 18 0 0 1-18-18h18z" fill="currentColor" stroke="none" />
    </Svg>
  )
}

export function SwatchFan(props) {
  return (
    <Svg {...props}>
      {[-48, -28, -8, 12, 32].map((angle, index) => (
        <g key={angle} transform={`rotate(${angle} 100 172)`}>
          <rect x="84" y="24" width="32" height="150" rx="6" fill="currentColor" fillOpacity={0.08 + index * 0.05} />
          <path d="M84 54h32M84 80h32M84 106h32" strokeWidth="1" />
        </g>
      ))}
      <circle cx="100" cy="160" r="5" fill="currentColor" />
    </Svg>
  )
}

export function RulerLines(props) {
  return (
    <Svg {...props}>
      <g transform="rotate(-24 100 100)">
        <rect x="6" y="74" width="188" height="52" rx="6" />
        {Array.from({ length: 23 }, (_, index) => {
          const x = 16 + index * 8
          const length = index % 5 === 0 ? 22 : index % 2 === 0 ? 14 : 9
          return <path key={x} d={`M${x} 74v${length}`} strokeWidth={index % 5 === 0 ? 2 : 1.25} />
        })}
      </g>
      <path d="M30 170h140M30 176h96" strokeWidth="1" strokeDasharray="3 5" />
    </Svg>
  )
}

// Halftone clusters in four tints, sized like a CMYK rosette.
export function CmykDots(props) {
  const clusters = [
    { cx: 70, cy: 70, opacity: 1 },
    { cx: 120, cy: 64, opacity: .7 },
    { cx: 84, cy: 120, opacity: .5 },
    { cx: 134, cy: 118, opacity: .3 },
  ]
  return (
    <Svg {...props} stroke="none">
      {clusters.map(({ cx, cy, opacity }) => (
        <g key={`${cx}-${cy}`} fill="currentColor" fillOpacity={opacity}>
          {[-2, -1, 0, 1, 2].flatMap((row) => [-2, -1, 0, 1, 2].map((col) => {
            const r = Math.max(1.2, 5.5 - Math.hypot(row, col) * 1.6)
            return <circle key={`${row}${col}`} cx={cx + col * 12} cy={cy + row * 12} r={r} />
          }))}
        </g>
      ))}
    </Svg>
  )
}

export function CropCorner(props) {
  return (
    <Svg {...props}>
      <path d="M60 14v46H14M60 60h126M60 60v126" strokeWidth="1.5" />
      <path d="M36 14v28M14 36h28" />
      <circle cx="120" cy="120" r="22" strokeWidth="1.5" />
      <path d="M120 90v60M90 120h60" strokeWidth="1.25" />
    </Svg>
  )
}

// City silhouette used behind the "20+" card; filled so a glow can sit behind it.
export function Skyline(props) {
  return (
    <svg viewBox="0 0 400 140" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M0 140V96h18V78h14v18h10V62h20v34h8V84h16v-30l10-14 10 14v30h12v26h10V70h22v-12h6v12h14v44h10V40l12-30 12 30v74h10V88h18v26h12V66h8l6-10 6 10h8v48h12V92h16v-20h20v20h10v22h14V80h18v34h12v26z"
      />
    </svg>
  )
}
