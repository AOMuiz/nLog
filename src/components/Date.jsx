import { format, formatISO } from "date-fns";
import { PostDate } from "../../styles/PostItemStyle";

export default function Date({ date }) {
  console.log(date);
  return (
    <time dateTime={formatISO(date)}>
      <PostDate>{format(date, "LLLL d, yyyy")}</PostDate>
    </time>
  );
}
