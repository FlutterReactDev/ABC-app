import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.css";
export interface GridTableProps {
  cols: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
export const GridTable: FC<PropsWithChildren<GridTableProps>> = (props) => {
  const { cols, children } = props;
  return (
    <div
      className={cn("grid grid-auto overflow-hidden ", {
        ["grid-cols-1"]: cols == 1,
        ["grid-cols-2"]: cols == 2,
        ["grid-cols-3"]: cols == 3,
        ["grid-cols-4"]: cols == 4,
        ["grid-cols-5"]: cols == 5,
        ["grid-cols-6"]: cols == 6,
        ["grid-cols-7"]: cols == 7,
        ["grid-cols-8"]: cols == 8,
        ["grid-cols-9"]: cols == 9,
        ["grid-cols-10"]: cols == 10,
        ["grid-cols-11"]: cols == 11,
        ["grid-cols-12"]: cols == 12,
      })}
      style={{
        gridAutoRows: "1fr",
      }}
    >
      {children}
    </div>
  );
};
export interface GridTableItemProps {}
export const GridTableItem: FC<PropsWithChildren<GridTableItemProps>> = (
  props
) => {
  const { children } = props;
  return (
    <div
      className={cn(styles.GridItem, "after:bg-[#b9bfc4] before:bg-[#b9bfc4]")}
    >
      {children}
    </div>
  );
};
