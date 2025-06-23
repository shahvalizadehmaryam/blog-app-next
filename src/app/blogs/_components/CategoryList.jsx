import Link from "next/link";

async function CategoryList() {
  // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating a delay
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
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
