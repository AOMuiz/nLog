import { generatePagination } from "../lib/pagination";
import Link from "next/link";

export default function Pagination({ current, pages, link }) {
  const pagination = generatePagination(current, pages);
  return (
    <div>
      <ul>
        {pagination.map((it, i) => (
          <li key={i}>
            {it.excerpt ? (
              "..."
            ) : (
              <Link href={link.href(it.page)} as={link.as(it.page)}>
                <a className={it.page === current ? "active" : null}>
                  {it.page}
                </a>
              </Link>
            )}
          </li>
        ))}
        <style jsx>{`
          div {
            /* display: flex;
            justify-content: flex-end;
            align-items: center; */
            margin: 0 auto;
          }
          ul {
            list-style: none;
            margin: 2rem 0 0 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          li {
            display: inline-block;
            margin-right: 1em;
            color: #9b9b9b;
            font-size: 1.25rem;
          }
          a.active {
            color: var(--primary-color);
            font-weight: bold;
          }
        `}</style>
      </ul>
    </div>
  );
}
