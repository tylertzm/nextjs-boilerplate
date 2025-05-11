// pages/404.tsx
import Link from "next/link";

const Error404 = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">
        <a>Go to Home</a>
      </Link>
    </div>
  );
};

export default Error404;