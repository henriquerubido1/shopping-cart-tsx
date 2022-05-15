import PropTypes from 'prop-types';

const ProductCard = (props: {
	category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number,
    count: number,
  };
  title: string;
}) => {
  return (
    <div id={ props.id.toString() }>
			<h3>{ props.title }</ h3>
			<h5>{ props.category }</h5>
			<img src={ props.image } alt={ props.title } />
			<p>{ props.description }</p>
			<p>R$ { props.price }</p>
			<p>{ props.rating.rate }</p>
			<p>{ props.rating.count }</p>
		</div>
  );
}

ProductCard.propTypes = {
	category: PropTypes.string,
	description: PropTypes.string,
	id: PropTypes.number,
	image: PropTypes.string,
	price: PropTypes.number,
	rating: PropTypes.object,
	title: PropTypes.string,
};

export default ProductCard;
