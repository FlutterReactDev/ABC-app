import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
interface MetroSelectProps {
  value?: number | undefined;
  onChange: (value: number) => void;
}
export const MetroSelect: FC<MetroSelectProps> = (props) => {
  const { onChange, value } = props;
  return (
    <Select
      value={value ? `${value}` : undefined}
      onValueChange={(value) => {
        onChange(parseInt(value));
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Выберите метро" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Сокольники</SelectItem>
      </SelectContent>
    </Select>
  );
};
