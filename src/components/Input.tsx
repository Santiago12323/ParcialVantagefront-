import { Input } from "@heroui/react";

interface Props {
  value: string;
  onChange: (newValue: string) => void;
}


export default function InputParcial({ value, onChange }: Props) {
  return (
    
    <Input
      className="max-w-xs"
      label="identificador"
      variant="bordered"
      value={value}
      onValueChange={onChange} 
    />
  );
}
