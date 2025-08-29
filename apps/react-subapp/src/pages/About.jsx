import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h2>About Page</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </div>
  );
}
