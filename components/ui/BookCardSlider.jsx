"use client";
import BookCard from "./BookCard";

const books = [
  {
    id: 1,
    title: "Birds gonna be happy",
    img: "/happy-book.jpg",
    desc: "Jump start your book reading by quickly check through the popular book categories. Buy your favourite books."
  },
  {
    id: 2,
    title: "Adventure of Sky",
    img: "/happy-book.jpg",
    desc: "1000+ books are published by different authors everyday. Explore now and enjoy reading."
  },
];

const BookCardSlider = () => {
  return (
    <section className="bg-white py-20 border-y border-muted">
      <div className="container mx-auto px-4 space-y-20">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            img={book.img}
            desc={book.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default BookCardSlider;
