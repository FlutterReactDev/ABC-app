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
import { ChevronDown, Loader2 } from "lucide-react";
import { useState } from "react";

import { DatePicker } from "@/components/atoms/date-picker";
import { PhoneInput } from "@/components/atoms/phone-input";
import { CityInput } from "@/components/atoms/city-input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ObjectSelectionList } from "@/components/organisms/object-selection-list";
import { useGetObjectListQuery } from "@/api/CRM";
export const SectionPage = () => {
    const { data, isSuccess, isLoading } = useGetObjectListQuery();
    const [type, setType] = useState<"list" | "map">("list");
    const [phone, setPhone] = useState("");
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
                    <div className="flex gap-2 flex-wrap ">
                        <Button variant={"secondary"} className="text-xs">
                            Отказ от общения
                        </Button>
                        <Button variant={"secondary"} className="text-xs">
                            Неадекватный клиент
                        </Button>
                        <Button variant={"secondary"} className="text-xs">
                            Уже купил ЖК
                        </Button>
                        <Button variant={"secondary"} className="text-xs">
                            Перезвонить
                        </Button>
                        <Button variant={"secondary"} className="text-xs">
                            Отложил покупку
                        </Button>
                        <Button variant={"secondary"} className="text-xs">
                            Не интересуется покупкой
                        </Button>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <Input placeholder="Введите имя" />
                        <PhoneInput value={phone} onChange={setPhone} />
                        <PhoneInput value={phone} onChange={setPhone} />
                        <CityInput placeholder="Введите город" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Визит в офис" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Сдан1</SelectItem>
                                <SelectItem value="2">Сдан2</SelectItem>
                            </SelectContent>
                        </Select>
                        <DatePicker value={date} onChange={setDate} />
                        <Input />
                        <Button className="h-10">Добавить</Button>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2 h-dvh">
                    <Input placeholder="Поиск по Названию ЖК, застройщика, округам, районам, метро" />
                    <div className="flex justify-between gap-2">
                        <div className="flex gap-1 items-center">
                            <Popover>
                                <PopoverTrigger>
                                    <Button variant={"ghost"}>
                                        По приоритету <ChevronDown />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    className=" flex flex-col gap-2 justify-start"
                                    align="start"
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
                            <div className={cn("flex flex-col gap-2")}>
                                {isSuccess && (
                                    <ObjectSelectionList
                                        list={data}
                                        modalOpen
                                    />
                                )}
                                {isLoading && (
                                    <div className="flex items-center justify-center">
                                        <Loader2 className="animate-spin" />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
