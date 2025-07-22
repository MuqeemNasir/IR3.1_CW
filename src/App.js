import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <main className="container py-4">
      <h1>Latest Blogs</h1>
      <article>
        <h2>Blog 1</h2>
        <img
          src="https://placehold.co/500x200"
          alt="Blog 1"
          className="img-fluid rounded"
        />
        <p>Posted on February 22, 2024 by John Doe.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          repellendus iure provident fuga. Totam soluta consequuntur quas
          quibusdam dolorem reprehenderit rem. Praesentium ipsa tempore nesciunt
          omnis recusandae incidunt non fugiat facilis nisi sapiente possimus,
          repudiandae numquam maxime sequi repellat error ipsam inventore
          deleniti qui ab magnam aut quod assumenda modi!
        </p>
      </article>
      <article>
        <h2>Blog 2</h2>
        <img src="https://placehold.co/500x200" alt="Blog 2" />
        <p>Posted on February 18, 2024 by Jane Smith.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum
          inventore quas minus voluptatem, quod placeat aspernatur consectetur
          aperiam ad eos similique dicta deleniti porro quisquam. Itaque nulla
          cumque quaerat expedita praesentium aliquid, voluptates, fugit
          blanditiis ducimus, id sequi quasi odio eligendi necessitatibus iusto
          natus. Minima expedita rem voluptatibus enim saepe aliquid labore,
          consequuntur natus ducimus sit blanditiis sequi beatae.
        </p>
      </article>
    </main>
  );
}
