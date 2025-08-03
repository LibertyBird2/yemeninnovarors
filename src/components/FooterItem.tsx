import Link from "next/link";
interface Item {
  label: string;
  link: string;
  value?: string;
}

interface FooterItemProps {
  head: string;
  text?: string;
  items?: Item[];
}
const FooterItem: React.FC<FooterItemProps> = ({
  head,
  text = null,
  items = null,
}) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{head}</h3>
      {text && <p className="text-gray-400 mb-4">{text}</p>}
      {items && (
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index}>
              <i className="me-2 h-5 w-5 text-brand-orange"></i>
              {item.link ? (
                <Link
                  href={item.link}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                item.label
              )}
              {item.value && <p className="text-gray-400 mb-4">{item.value}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FooterItem;
