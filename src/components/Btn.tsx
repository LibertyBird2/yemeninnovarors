import { Button } from "flowbite-react";
import Link from "next/link";

interface BtnProps {
    link?: string;
    text:string;
    className: string;
}
const Btn: React.FC<BtnProps> = ({link, text, className}) => {
  return (
    <Link href={`/${link}`}>
      <Button className={className}>
        {text}
      </Button>
    </Link>
  );
};

export default Btn;
