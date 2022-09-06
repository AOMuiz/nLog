import { format, formatISO } from "date-fns";

export default function Date({ date }) {
  return (
    <>
      <time dateTime={formatISO(date)}>
        <span>on {format(date, "d LLLL, yyyy")}</span>
      </time>
      <style jsx>
        {`
          span {
            color: #a5a5a5;
            font-weight: 200;
            font-size: 1rem;
            line-height: 20px;
          }
        `}
      </style>
    </>
  );
}
