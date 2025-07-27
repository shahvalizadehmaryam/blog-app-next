import Image from "next/image";
function CoverImage({ coverImageUrl, title }) {
  return (
    <div className="relative aspect-video rounded-md overflow-hidden mb-6">
      <Image
        src={coverImageUrl}
        alt={title}
        fill
        className="object-cover object-center hover:scale-110 duration-300 ease-out"
        quality={90}
      />
    </div>
  );
}

export default CoverImage;
