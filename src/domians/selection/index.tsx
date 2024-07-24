import { Map2GIS } from "@/components/atoms/2GIS";
import { ObjectMarker } from "@/components/atoms/object-marker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { ObjectCard } from "@/components/molecules/object";
import { DatePicker } from "@/components/atoms/date-picker";
export const SectionPage = () => {
    const [type, setType] = useState<"list" | "map">("list");

    const onChangeType = (type: "list" | "map") => {
        if (type == "list") {
            setType("list");
        }

        if (type == "map") {
            setType("map");
        }
    };

    const [date, setDate] = useState<Date>();
    return (
        <div className="w-full h-full">
            <div className="grid grid-cols-2 gap-5 h-full">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 flex-wrap">
                        <Button variant={"secondary"}>Отказ от общения</Button>
                        <Button variant={"secondary"}>
                            Неадекватный клиент
                        </Button>
                        <Button variant={"secondary"}>Уже купил ЖК</Button>
                        <Button variant={"secondary"}>Перезвонить</Button>
                        <Button variant={"secondary"}>Отложил покупку</Button>
                        <Button variant={"secondary"}>
                            Не интересуется покупкой
                        </Button>
                    </div>
                    <DatePicker value={date} onChange={setDate} />
                </div>
                <div className="w-full flex flex-col gap-2 h-dvh">
                    <Input placeholder="Поиск по Названию ЖК, застройщика, округам, районам, метро" />
                    <div className="flex justify-between gap-2">
                        <div className="flex gap-1 items-center">
                            <div className="text-sm">Сортировка:</div>
                            <Popover>
                                <PopoverTrigger>
                                    <Button variant={"ghost"}>
                                        По приоритету <ChevronDown />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    className=" flex flex-col gap-2 justify-start"
                                    align="end"
                                >
                                    <Button
                                        variant={"ghost"}
                                        className="justify-start"
                                    >
                                        По приоритету
                                    </Button>
                                    <Button
                                        variant={"ghost"}
                                        className="justify-start"
                                    >
                                        Цена по возрастанию
                                    </Button>
                                    <Button
                                        variant={"ghost"}
                                        className="justify-start"
                                    >
                                        Цена по убыванию
                                    </Button>
                                    <Button
                                        variant={"ghost"}
                                        className="justify-start"
                                    >
                                        Площадь по возрастанию
                                    </Button>
                                    <Button
                                        variant={"ghost"}
                                        className="justify-start"
                                    >
                                        Площадь по убыванию
                                    </Button>
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="flex gap-2">
                            <Button
                                variant="secondary"
                                {...(type == "list" && {
                                    variant: "default",
                                })}
                                onClick={() => onChangeType("list")}
                            >
                                Листинг
                            </Button>
                            <Button
                                variant="secondary"
                                {...(type == "map" && {
                                    variant: "default",
                                })}
                                onClick={() => onChangeType("map")}
                            >
                                Карта
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 ">
                        {type == "map" && (
                            <Map2GIS
                                initialMapOptions={{
                                    center: [74.603605, 42.876452],
                                    zoom: 15,
                                }}
                                className="w-full h-full rounded-lg overflow-hidden"
                            >
                                <ObjectMarker
                                    coordinates={[74.604923, 42.847277]}
                                />
                                <ObjectMarker
                                    coordinates={[74.620365, 42.852053]}
                                />
                            </Map2GIS>
                        )}

                        {type == "list" && (
                            <div className={cn("flex flex-col gap-2")}></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
