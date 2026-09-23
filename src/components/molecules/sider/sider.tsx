import type { ReactNode } from 'react';

export interface SiderProps {
  options: { option: string; href: string }[];
  title: string;
  icon?: ReactNode;
}

export function Sider({ options, title, icon }: SiderProps) {
  return (
    <div className="p-4 flex flex-col bg-theme-background w-64">
      <div className="p-1 flex items-center gap-2 text-default-text-light text-lg">
        {icon}
        <span>{title}</span>
      </div>
      <div className="p-1 flex flex-col gap-2">
        {options.map(({ option, href }, index) => (
          <a key={index} href={href} className="text-theme-text bg-primary-background p-2 rounded hover:bg-theme-subtle hover:translate-x-1">
            {option}
          </a>
        ))}
      </div>
    </div>
  );
}