import blogapp from "../assets/images/blog_app.png";
import movieManiac from "../assets/images/movie_maniac.png";
import greenStack from "../assets/images/Green_cart.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1> Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={greenStack}
              className="zoom"
              alt="thumbnail"
              width="100%"
              height={"425px"}
            />
          </a>
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Green Stack</h2>
          </a>
          <p>
            Developed a grocery e-commerce application with a seller dashboard
            for adding products, integrated Google authentication, and user
            login functionality. Users can browse items, view images, add
            products to their cart, and place orders using Cash on Delivery or
            Stripe payment. The platform also features a 'Best Sellers' section
            and a smooth user experience throughout
          </p>
        </div>
        <div className="project">
          <a
            href="https://mern-blog-kc7p.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={blogapp} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://mern-blog-kc7p.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Mern Blog App</h2>
          </a>
          <p>
            Developed a blog app that is used to create blogs like comment and
            interact and share information amoing various users ,includes google
            authentication{" "}
          </p>
        </div>
        <div className="project">
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={movieManiac}
              className="zoom"
              alt="thumbnail"
              width="100%"
              height={"425px"}
            />
          </a>
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <h2> Movie Maniac </h2>
          </a>
          <p>
            Designed a movie application that categorizes movies based on
            popularity and other filters, with features to view detailed
            information such as ratings and reviews. Also implemented dark mode
            and Arabic style switching support.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
