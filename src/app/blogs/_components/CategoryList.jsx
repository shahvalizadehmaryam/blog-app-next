import Link from "next/link";

async function CategoryList() {
  const res = await fetch("http://localhost:5000/api/category/list");
  const {
    data: { categories },
  } = await res.json();
  console.log(categories);
  return (
    <div>
      <ul>
        <Link href={`/blogs/`}>همه</Link>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/blogs/category/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
