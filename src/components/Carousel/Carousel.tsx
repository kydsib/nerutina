import Image from "next/image"

interface Data {
  src: string;
  alt: string;
}

interface Props {
  data: Data[];
}


const Carousel = ({data}: Props) => {
  return (
    <div className="carousel carousel-end rounded-box ">
      {data?.map((item, index) => (
        <div className="carousel-item" key={index}>
          <Image src={item.src} width={300} height={450} alt={item.alt} />
        </div>
      ))}
</div>
  )
}

export default Carousel