// Source: supplied CV, plus the current role confirmed by Ashhad from his THE.TEAM signature
// (from 2026). The two Print Works & Fabrication roles share one entry; `stints` lists them
// separately for the home-page card, and `role` sums them up for the About-page timeline.

const experience = [
  {
    role: 'Senior Print Production Manager',
    company: 'THE.TEAM',
    location: 'Saudi Arabia',
    start: '2026',
    end: 'Present',
    current: true,
  },
  {
    role: 'Pre-Production Supervisor (2021–26); Pre-Press Studio Graphic Layout Artist (2015–21)',
    company: 'Print Works & Fabrication',
    location: 'UAE',
    start: '2015',
    end: '2026',
    stints: [
      { start: '2021', end: '2026', role: 'Pre-Production Supervisor' },
      { start: '2015', end: '2021', role: 'Pre-Press Studio Graphic Layout Artist' },
    ],
  },
  {
    role: 'Pre-Press Studio Graphic Layout Artist',
    company: 'Brand Options Advertising',
    location: 'UAE',
    start: '2013',
    end: '2015',
  },
  {
    role: 'Pre-Press Studio Graphic Layout Artist',
    company: 'Samar Advertising',
    location: 'Oman',
    start: '2012',
    end: '2013',
  },
  {
    role: 'Pre-Press Studio Graphic Layout Artist',
    company: 'Ravi Advertising',
    location: 'Pakistan',
    start: '2010',
    end: '2012',
  },
  {
    role: 'Pre-Press Studio Graphic Layout Artist',
    company: 'Image Graphic Solutions',
    location: 'Pakistan',
    start: '2006',
    end: '2009',
  },
  {
    role: 'Pre-Press Studio Graphic Layout Artist',
    company: 'Link Advertising Agency',
    location: 'Pakistan',
    start: '2004',
    end: '2006',
  },
]

export default experience
