// Attribution line for an openly licensed photo: title/author, license link, and source link.
function ImageCredit({ credit }) {
  if (!credit) return null
  return (
    <span className="image-credit">
      Photo: {credit.source ? <a href={credit.source} target="_blank" rel="noreferrer">{credit.author}<span className="sr-only"> (opens in a new tab)</span></a> : credit.author}
      {credit.license && <>, {credit.licenseUrl ? <a href={credit.licenseUrl} target="_blank" rel="noreferrer">{credit.license}<span className="sr-only"> (opens in a new tab)</span></a> : credit.license}</>}
    </span>
  )
}

export default ImageCredit
