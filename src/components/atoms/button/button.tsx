import React from "react";
import Link from "next/link";

export interface buttonProps {
    variant : "primary" | "secondary" | "ternary" | "outline";
    size : "sm" | "default" | "lg";
    text : string;
    href : string;
    children : React.ReactNode
}

export function button({variant, size="default", href, children, text} : buttonProps) {

 const baseClass = "rounded-sm width-fit text-default-text-light"; 
 
 const variants = {
    primary : "bg-primary-button",
    secondary : "bg-secondary-button",
    ternary : "bg-subtle-button text-teamflow-primary",
    outline : "border-1 border-teamflow-primary text-teamflow-primary",
 }

 const sizes = {
    sm: "px-4 py-2 text-xs uppercase",
    default: "px-7 py-3 text-xs uppercase",
    lg: "px-9 py-4 text-sm uppercase",
  };

  if (href) {
    return (
    <Link href={href} className={`${baseClass} ${variants[variant]} ${sizes[size]}`}>
        {children}
    </Link>
    )
  }

 return (
    <div className={`${baseClass} ${variants[variant]} ${sizes[size]}`}>
        {children}
    </div>
 )
}