import Link from "next/link";
import Image from "next/image";
import { Button } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

interface CardProps {
  title: string;
  description: string;
  image?: any;
  date?: string;
  link?: string;
  icon?: React.ReactNode;
  position?: string;
  service?: boolean;
  blog?: boolean;
  team?: boolean;
}
const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  position,
  date,
  link,
  icon,
  service,
  blog,
  team,
}) => {
  const Icon = icon
  return (
    <div
      className={`rounded-xl shadow-md overflow-hidden hover-scale ${
        service && "p-6"
      }`}
    >
      {!service && (
        <div className={`h-${blog ? "48" : "64"} overflow-hidden`}>
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover transation-transform duration-500 hover:scale-110"
            width={1000}
            height={1000}
          />
        </div>
      )}
      <div className={`p-${service ? "0" : "6"}`}>
        {date && (
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <HiCalendar className="h-4 w-4 me-2" />
            <span>{date}</span>
          </div>
        )}
        {service && (
          <div className="h-14 w-14 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
            <Icon className="h-7 w-7 text-brand-blue" />
          </div>
        )}
        <h3
          className={`text-xl font-bold mb-${
            team ? "1" : service ? "3" : "2 line-clamp-2"
          }`}
        >
          {title}
        </h3>
        {position && (
          <p className="text-brand-orange font-medium mb-3">{position}</p>
        )}
        <p
          className={`text-gray-600 ${
            service ? "mb-4" : blog ? "mb-4 line-clamp-3" : ""
          }`}
        >
          {description}
        </p>
        {link && (
          <Button className="w-full bg-brand-blue/10 mt-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
            <Link href={link}>Learn More</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
