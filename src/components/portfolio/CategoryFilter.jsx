function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="filters" role="group" aria-label="Filter projects by category">
      {categories.map(({ id, label }) => (
        <button key={id} type="button" className="filter" aria-pressed={selected === id} onClick={() => onSelect(id)}>
          {label}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
