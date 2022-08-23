export default function Author({ author }) {
  return (
    <>
      {/* <span>{author.name}</span> */}
      <p>written by {author}</p>
      <style jsx>
        {`
          p {
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
