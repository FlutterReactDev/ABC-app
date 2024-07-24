import { CRM } from "@/api/CRM/types";
import { FC, useRef } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { Object } from "@/components/molecules/object";
interface ObjectListProps {
    list: CRM[];
    modalOpen: boolean;
}
export const ObjectList: FC<ObjectListProps> = ({ list, modalOpen }) => {
    const listRef = useRef<HTMLDivElement | null>(null);
    const virtualizer = useWindowVirtualizer({
        count: list.length,
        estimateSize: () => 35,
        overscan: 5,
        scrollMargin: listRef.current?.offsetTop ?? 0,
    });

    return (
        <div ref={listRef} className="flex flex-col gap-2 mb-1">
            {virtualizer.getVirtualItems().map(({ index }) => {
                return (
                    <Object
                        key={index}
                        modalOpen={modalOpen}
                        {...list[index]}
                    />
                );
            })}
        </div>
    );
};
