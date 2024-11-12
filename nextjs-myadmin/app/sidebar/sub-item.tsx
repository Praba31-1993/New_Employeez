import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface ISubMenuItem {
  item: {
    name: string;
    path: string;
    icon: LucideIcon;
  };
  isActive: boolean;
}

const SubMenuItem = ({ item, isActive }: ISubMenuItem) => {
  const router = useRouter();
  const { name, path, icon: Icon } = item;

  const onClick = () => {
    router.push(path);
  };

  return (
    <div
      className={`flex items-end p-3 rounded-r-full cursor-pointer ${
        isActive ? 'bg-red-500 text-white' : 'hover:text-sidebar-active'
      }`}
      onClick={onClick}
    >
      <Icon size={20} />
      <p className="text-sm font-semibold mb-0 ml-3">{name}</p>
    </div>
  );
};

export default SubMenuItem;
