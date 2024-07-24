import { CRM } from "@/api/CRM/types";
import { FC, useRef } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { ObjectCard } from "@/components/molecules/object";
interface ObjectListProps {
    list: CRM[];
    modalOpen: boolean;
}
export const ObjectList: FC<ObjectListProps> = ({ list, modalOpen }) => {
    const listRef = useRef<HTMLDivElement | null>(null);
    const virtualizer = useWindowVirtualizer({
        count: list.length,
        estimateSize: () => 730,
        overscan: 5,
        scrollMargin: listRef.current?.offsetTop ?? 0,
    });

    return (
        <div ref={listRef} className="flex flex-col gap-2 mb-1">
            <div
                style={{
                    width: "100%",
                    position: "relative",
                    height: `${virtualizer.getTotalSize()}px`,
                }}
            >
                {virtualizer
                    .getVirtualItems()
                    .map(({ index, size, start, key }) => {
                        return (
                            <div
                                key={key}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: 40,
                                    width: "100%",
                                    height: `${size}px`,
                                    transform: `translateY(${
                                        start - virtualizer.options.scrollMargin
                                    }px)`,
                                }}
                            >
                                <ObjectCard
                                    modalOpen={modalOpen}
                                    {...list[index]}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
