import Table from "@/ui/Table";
import { toPersianDigits } from "@/utils/numberFormatter";
import toLocaleDateShort from "@/utils/toLocaleDateShort";
import truncateText from "@/utils/truncateText";
import { DeletePost, UpdatePost } from "./Buttons";

//free - premium
const typeStyle = {
  free: {
    label: "رایگان",
    className: "badge--success",
  },
  premium: {
    label: "پولی",
    className: "badge--secondary",
  },
};
const PostRow = ({ post, index }) => {
  const { title, category, author, createdAt, type } = post;
  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(title)}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{toLocaleDateShort(createdAt)}</td>
      <td>
        <span className={`badge ${typeStyle[type].className}`}>
          {typeStyle[type].label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
        <UpdatePost onClick={post._id} />
        <DeletePost
         onClick={post._id} />
        </div>
      </td>
    </Table.Row>
  );
};

export default PostRow;
