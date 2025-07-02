import { Input } from "@heroui/react";

interface Props {
  value: string;
  onChange: (newValue: string) => void;
}


export default function InputBestoption2({ value, onChange }: Props) {
  return (
    
    <Input
      className="max-w-xs"
      label="identificador 2"
      variant="bordered"
      value={value}
      onValueChange={onChange} 
    />
  );
}
