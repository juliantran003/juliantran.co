// IMPORTS
import Link from "next/link";

// JSON
import portfolio from "../public/JSON/portfolio.json";

export default function Home() {
  return (
    <div className="home">
      <style jsx global>
        {`
          body {
            background-color: #d9d9d9;
          }
        `}
      </style>
      <ul>
        {portfolio.map((portfolio) => {
          return (
            <Link key={portfolio.title} href={portfolio.url}>
              <h1>{portfolio.title}</h1> <h2>{portfolio.type}</h2>
            </Link>
          );
        })}
      </ul>
      <div className="fade_footer"></div>
    </div>
  );
}
