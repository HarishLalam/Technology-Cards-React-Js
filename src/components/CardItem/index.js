import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} each-card`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <img className="card-logo" src={imgUrl} alt={title} />
    </li>
  )
}
export default CardItem
