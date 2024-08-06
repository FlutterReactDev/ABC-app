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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio";
import { Label } from "@/components/ui/label";

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
                    <div className="flex flex-col gap-4 p-3 bg-white">
                        <div className="flex flex-col  ">
                            <div className="flex gap-2">
                                <div className="text-[13px]  font-medium">
                                    М-1:
                                </div>
                                <div className="text-[13px] text-foreground/60 font-medium">
                                    Добрый день!{" "}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="text-[13px] font-medium">
                                    М-2:
                                </div>
                                <div className="text-[13px] text-foreground/60 font-medium">
                                    Меня зовут ... Правильно ли я понимаю
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="text-[13px] font-medium">
                                    М-3:
                                </div>
                                <div className="text-[13px] text-foreground/60 font-medium">
                                    Отлично! Я предложу самые{" "}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button>Вся МО</Button>
                            <Button>Ю_МО</Button>
                            <Button>3_МО</Button>
                            <Button>C_МО</Button>
                        </div>
                        <div className="flex gap-2">
                            <Button>М</Button>
                            <Button>МО</Button>
                            <Button>Апартаменты</Button>
                        </div>
                        <div className="text-[13px] font-medium">
                            Не забудьте расширить запрос по ГЕО - не
                            зацикливайтесь на одной локации в ближайших проектах
                        </div>
                        <div className="flex gap-2">
                            <div className="text-[13px] font-medium">М-4:</div>
                            <div className="text-[13px] text-foreground/60 font-medium">
                                Так, в каком бюджете смотрите квартиру и сколько
                                комнат в ней должно быть?
                            </div>
                        </div>
                        <div className="flex items-center gap-3 justify-between">
                            <div className="flex gap-3 items-center">
                                <div className="text-[13px] font-medium">
                                    Бюдждет
                                </div>
                                <Input
                                    placeholder="Бюдждет"
                                    className="max-w-44 text-sm"
                                />
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="text-[13px] font-medium">
                                    Мин. площадь
                                </div>
                                <Input
                                    placeholder="Мин. площадь"
                                    className="max-w-44 text-sm"
                                />
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-[13px] font-medium">
                                    Ремонт
                                </div>
                                <Button>Да</Button>
                                <Button>Нет</Button>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button>Ст</Button>
                            <Button>1кк</Button>
                            <Button>2кк</Button>
                            <Button>3кк</Button>
                            <Button>4кк</Button>
                        </div>
                        <div className="text-[13px] font-medium">
                            Не забудьте расширить запрос по бюджету!!!
                        </div>
                        <div className="flex gap-2">
                            <div className="text-[13px] font-medium">М-5:</div>
                            <div className="text-[13px] text-foreground/60 font-medium">
                                И финально, какой максимальный срок сдачи готовы
                                рассматривать?
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-[13px] font-medium">
                                Срок сдачи
                            </div>
                            <div className="flex gap-2 items-center">
                                <RadioGroup
                                    defaultValue="comfortable"
                                    className="flex"
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value="default"
                                            id="r1"
                                        />
                                        <Label
                                            htmlFor="r1"
                                            className="text-sm text-foreground/50"
                                        >
                                            Сдан
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value="comfortable"
                                            id="r2"
                                        />
                                        <Label
                                            htmlFor="r2"
                                            className="text-sm text-foreground/50"
                                        >
                                            До 3м
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="6" id="r3" />
                                        <Label
                                            htmlFor="r3"
                                            className="text-sm text-foreground/50"
                                        >
                                            До 6м
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="9" id="r4" />
                                        <Label
                                            htmlFor="r4"
                                            className="text-sm text-foreground/50"
                                        >
                                            До 9м
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="12" id="r5" />
                                        <Label
                                            htmlFor="r4"
                                            className="text-sm text-foreground/50"
                                        >
                                            До 1г
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value="compact"
                                            id="r6"
                                        />
                                        <Label
                                            htmlFor="18"
                                            className="text-sm text-foreground/50"
                                        >
                                            До 1,5г
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="24" id="r7" />
                                        <Label
                                            htmlFor="r7"
                                            className="text-sm text-foreground/50"
                                        >
                                            До 2г
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="text-[13px] font-medium">М-6:</div>
                            <div className="text-[13px] text-foreground/60 font-medium">
                                Начинаем с самого дорогого подходящего проекта -
                                презентуем проект: местоположение, комнатность и
                                бюджет, срок сдачи, наличие ремонта, УТП
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex gap-2 items-center">
                                <div className="text-[13px] font-medium">
                                    М-7:
                                </div>
                                <div className="flex flex-col gap-3 items-center">
                                    <Button>Да</Button>
                                    <div className="text-[13px] text-foreground/60 font-medium">
                                        Отлично, тогда предлагаю соеденить с
                                        застройщиком, уточните по этажам,
                                        площади и другим интересующим вопросам,
                                        это займет 1-2 минуты
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-[13px] font-medium">
                                    М-8:
                                </div>
                                <div className="flex flex-col gap-3 items-center">
                                    <Button>Нет</Button>
                                    <div className="text-[13px] text-foreground/60 font-medium">
                                        Предлагаем проекты, подходящие под
                                        запрос, где надо дополнительно расширяем
                                        запросы, чтобы увеличить кол-во
                                        подходящих проектов
                                    </div>
                                </div>
                            </div>
                        </div>
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

                        {/* {type == "list" && (
                            <div className={cn("flex flex-col gap-2")}>
                                {mockData && (
                                    <ObjectSelectionList
                                        list={mockData}
                                        modalOpen
                                    />
                                )}
                                {isLoading && (
                                    <div className="flex items-center justify-center">
                                        <Loader2 className="animate-spin" />
                                    </div>
                                )}
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
};
