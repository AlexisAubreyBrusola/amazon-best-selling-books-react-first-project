#React Book List App ReadMe

This ReadMe file is an explanation for the React App **Book List**. This will explain **variables**, **functions**, and **methods** used in the App.

## `books` variable

`books` is a variable that contains an array of 3 objects. An objects holds key-value pairs of information such as the title, author and image of the book.

```javascript
const books = [
  {
    id: 1,
    author: 'Rebecca Yarros',
    title: 'Fourth Wing (The Empyrean, 1)',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg',
  },
  {
    id: 2,
    author: 'Matthew Perry',
    title: 'Friends, Lovers, and the Big Terrible Thing: A Memoir',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81tdvyI0MeL._AC_UL600_SR600,400_.jpg',
  },
  {
    id: 3,
    author: 'Rebecca Yarros',
    title: 'Iron Flame (The Empyrean, 2)',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL600_SR600,400_.jpg',
  },
];
```

##`BookList` functional component
The BookList component renders a `<section>` containing a list of books. It achieves this by **mapping** over the books array, extracting the properties of each book, and passing them as props to the Book component.

```javascript
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book);
        const { image, title, author } = book;
        return <Book image={image} title={title} author={author} />;
      })}
    </section>
  );
}
```

####`books.map()` method explained:

- The `map` function is applied to the books array. It takes a function as an argument, and this function is executed for each element in the array.
- `const { image, title, author } = book;
`: **Destructuring Book Object** - The properties (image, title, and author) of each book object are destructured, creating variables with the same names.
- `return <Book image={image} title={title} author={author} />;`: **Returning a Book Component** - For each book in the array, a new Book component is created and returned. The destructured properties (image, title, and author) are passed as props to the Book component.

  > **Resulting JSX:** The result is an array of Book components, where each component represents an individual book from the books array.

## `Book` functional component

The `Book` component is a reusable piece of UI that takes in information about a book as props, logs these props for debugging, and renders a styled article containing the book's image, title, and author. This component can be used multiple times within a parent component, such as the `BookList` component, to display a list of books. The destructuring of props at the beginning makes the code cleaner and more readable.

```javascript
const Book = (props) => {
  console.log(props);
  const { image, title, author } = props;
  return (
    <article className='book'>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
```

####Explanation:

**Functional Component Declaration:**

```javascript
const Book = (props) => {
This declares a functional component named Book that takes props as its parameter.
```

**Logging Props to Console:**

```javascript
console.log(props);
```

This statement logs the props object to the console. It's a helpful practice during development for debugging and understanding what data is being passed to the component.

**Destructuring Props:**

```
const { image, title, author } = props;
```

The line above destructures the props object, extracting the properties image, title, and author. This makes it easier to reference these properties in the JSX below.

**Returning JSX:**

```
return (
  <article className='book'>
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <h4>{author}</h4>
  </article>
);

```

The component returns JSX, representing an `<article>` element with a book's information. It includes an `<img>` element for the book's image, an `<h2>` element for the title, and an `<h4>` element for the author. The values for src (image source), alt (alternative text for the image), title, and author are obtained from the destructured props.
