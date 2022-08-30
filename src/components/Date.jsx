import { format, formatISO } from "date-fns";

export default function Date({ date }) {
  return (
    <>
      <time dateTime={formatISO(date)}>
        <p>on {format(date, "d LLLL , yyyy")}</p>
      </time>
      <style jsx>
        {`
          p {
            color: #a5a5a5;
            font-weight: 200;
            font-size: 1.2rem;
            line-height: 20px;
          }
        `}
      </style>
    </>
  );
}
