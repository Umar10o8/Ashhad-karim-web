function ChipList({ items, tone = 'neutral', label }) {
  return (
    <ul className={`chip-list chip-list-${tone}`} aria-label={label}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}

export default ChipList
