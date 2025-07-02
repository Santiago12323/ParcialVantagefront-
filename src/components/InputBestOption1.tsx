import { Input } from "@heroui/react";

interface Props {
  value: string;
  onChange: (newValue: string) => void;
}


export default function InputBestoption1({ value, onChange }: Props) {
  return (
    
    <Input
      className="max-w-xs"
      label="identificador 1"
      variant="bordered"
      value={value}
      onValueChange={onChange} 
    />
  );
}
