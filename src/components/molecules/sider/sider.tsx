import type { ReactNode } from 'react';

export interface SiderProps {
  options: { option: string; href: string }[];
  title: string;
  icon?: ReactNode;
}

export function Sider({ options, title, icon }: SiderProps) {
  return (
    <div className="p-4 flex flex-col">
      <div className="p-1 flex items-center gap-2 text-teamflow-primary text-lg">
        {icon}
        <span>{title}</span>
      </div>
      <div className="p-1 flex flex-col gap-2">
        {options.map(({ option, href }, index) => (
          <a key={index} href={href} className="text-teamflow-primary">
            {option}
          </a>
        ))}
      </div>
    </div>
  );
}