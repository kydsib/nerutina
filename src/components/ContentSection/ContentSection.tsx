import Image from "next/image";

interface Props {
  title: string;
  firstParagraph: string;
  secondParagraph?: string;
  image: string;
  imgAlt: string;
  isContentOnRight?: boolean;
}

const ContentSection = ({ title, firstParagraph, secondParagraph, image, imgAlt }: Props) => {

  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <Image src={image} alt={imgAlt}  width={350} height={350} />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">{title}</h2>
            <p className="mt-6 text-gray-600">{firstParagraph}</p>
            <p className="mt-4 text-gray-600">{secondParagraph}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentSection