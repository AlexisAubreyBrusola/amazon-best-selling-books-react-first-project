const Book = ({ image, title, author, number }) => {
  // const { image, title, author } = props;
  return (
    <article className='book'>
      <span className='number'>{`# ${number + 1}`}</span>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
