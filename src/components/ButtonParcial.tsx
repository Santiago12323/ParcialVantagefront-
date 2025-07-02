import { Button, ButtonProps } from "@heroui/react";

interface Props {
  name: string;
  onClick: () => void;
  color?: ButtonProps["color"];
  className?: string;          
}

export default function ButtonParcial({
  name,
  onClick,
  color = "primary",
  className = "",                   
}: Props) {
  return (
    <Button
      color={color}
      onPress={onClick}
      className={className}    
    >
      {name}
    </Button>
  );
}
