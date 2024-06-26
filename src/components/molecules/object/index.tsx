import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUp,
  CarFront,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CirclePlay,
  Pencil,
  PersonStanding,
} from "lucide-react";
import ObjectImage from "../../../assets/object-icon.png";
import { Button } from "@/components/ui/button";
import { GridTable, GridTableItem } from "@/components/atoms/grid-table";
import ObjectItemImage from "@/assets/obejct-item.png";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ObjectItem2 from "@/assets/object-item-2.png";
import { FC, MutableRefObject, useRef, useState } from "react";
import { useMedia } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import {
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";
interface ObjectProps {
  modalOpen?: boolean;
}

const editObjectSchema = object({
  peculiarities: string(),
  description: string(),
  location: string(),
});

export const Object: FC<ObjectProps> = ({ modalOpen = false }) => {
  const nextButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const prevButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const form = useForm({
    resolver: yupResolver(editObjectSchema),
  });
  const { control } = form;

  const isMobile = useMedia("(max-width: 1200px)");
  const [open, setOpen] = useState(false);

  if (isMobile) {
    return (
      <Sheet
        open={open}
        onOpenChange={(value) => {
          if (modalOpen) {
            setOpen(value);
          } else {
            setOpen(false);
          }
        }}
      >
        <SheetTrigger asChild>
          <div className="bg-white p-4 flex flex-col gap-4 text-[13px] cursor-pointer rounded-sm">
            <div>
              <Badge>
                <ArrowUp />
                Цены выросли на 16% за полгода. В среднем продается 29 квартир в
                месяцю
              </Badge>
            </div>

            <div className="flex justify-between items-center flex-wrap gap-2">
              <div className="flex gap-2 items-center flex-wrap">
                <Avatar className="h-14 w-14">
                  <AvatarFallback>ЖК Ромашка</AvatarFallback>
                  <AvatarImage src={ObjectImage} />
                </Avatar>
                <div className="flex flex-col gap-0">
                  <h1 className="text-sm font-medium">ЖК Ромашка</h1>
                  <div className="flex gap-1 text-foreground/80 text-xs items-center flex-wrap">
                    <p>СВАО / Реутов /</p>
                    <div className="flex gap-1 items-center">
                      <p>Сокол</p>
                      <Separator orientation="vertical" className="h-4" />
                    </div>
                    <div className="flex gap-1 items-center">
                      <CarFront className="w-5 h-5" />
                      <p>3 мин.</p>
                      <Separator orientation="vertical" className="h-4" />
                    </div>
                    <div className="flex gap-1 items-center">
                      <PersonStanding className="w-5 h-5" />
                      <p>39 мин.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Badge className="text-[11px]">Старт продаж</Badge>
                <Badge variant={"destructive"} className="gap-1 text-[11px]">
                  <CircleAlert className="w-3 h-3" /> Старт продаж
                </Badge>
              </div>
            </div>
            <div className="flex justify-between flex-wrap gap-2">
              <div className="flex gap-2 items-center flex-wrap">
                <div className="flex items-center gap-1">
                  <p className="text-destructive font-medium">Апартаменты</p>
                  <CircleAlert className="text-foreground/50 w-4 h-4" />
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-2">
                  <p className="text-foreground/50">Класс жилья:</p>
                  <p className="text-foreground font-medium">Бизнес</p>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-2">
                  <p className="text-foreground/50">Отделка:</p>
                  <p className="text-foreground font-medium">Да</p>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-2">
                  <p className="text-foreground/50">Потолки:</p>
                  <p className="text-foreground font-medium">3,1м</p>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-2">
                  <p className="text-foreground/50">Парковка:</p>
                  <p className="text-foreground font-medium">подземная</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button>Сдан</Button>
                <Button variant={"secondary"}>2024</Button>
                <Button variant={"secondary"}>2025</Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="h-full w-full flex flex-col gap-2">
                <img
                  src={ObjectItemImage}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant={"ghost"}
                  className="text-blue text-[13px] w-full justify-start hover:text-blue "
                >
                  <CirclePlay className="w-4 h-4" /> Видео презентация
                </Button>
              </div>
              <ScrollArea className="w-full whitespace-nowrap" type="always">
                <div className="min-w-[820px]">
                  <GridTable cols={6}>
                    <GridTableItem></GridTableItem>
                    <GridTableItem>Ст</GridTableItem>
                    <GridTableItem>1кк</GridTableItem>
                    <GridTableItem>2кк</GridTableItem>
                    <GridTableItem>3кк</GridTableItem>
                    <GridTableItem>4кк</GridTableItem>
                    <GridTableItem>Без отделки</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem></GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>Предчистовая</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem></GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>Чистовая</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem></GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                  </GridTable>
                </div>

                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-sm">Особенности</h3>
                <div className="flex gap-2 flex-wrap">
                  <Button variant={"secondary"}>Река</Button>
                  <Button variant={"secondary"}>Пруд</Button>
                  <Button variant={"secondary"}>Лесопарк</Button>
                  <Button variant={"secondary"}>Подземная парковка</Button>
                  <Button variant={"secondary"}>Чистовая отделка</Button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-sm">Описание</h3>
                <p>
                  В ЖК Прокшино можно найти квартиры с высокими потолками, а
                  также уникальными планировками. В шаговой доступности есть все
                  необходимые объекты инфраструктуры, а из окон открываются
                  живописные вида на реку Сосновку. Комплекс расположен в
                  непосредственной близости от крупных природных лесопарков с
                  благоустроенными дорожками для пеших и велосипедных прогулок и
                  зонами отдыха.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-sm">Расположение</h3>
                <p>
                  ЖК "Прокшино" расположено всего в 10 минутах ходьбы от ст.м
                  Прокшино, рядом с багоустроенной набережной. Рядом строится
                  крупный бизнес-квартал с торговым центром и
                  спортивно-событийный кластер с горнолыжным склоном.
                </p>
              </div>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-full overflow-y-auto">
          <div className="grid grid-cols-1">
            <div className="bg-white p-4 flex flex-col gap-4 text-[13px]">
              <div>
                <Badge>
                  <ArrowUp />
                  Цены выросли на 16% за полгода. В среднем продается 29 квартир
                  в месяцю
                </Badge>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center flex-wrap">
                  <Avatar className="h-14 w-14">
                    <AvatarFallback>ЖК Ромашка</AvatarFallback>
                    <AvatarImage src={ObjectImage} />
                  </Avatar>
                  <div className="flex flex-col gap-0">
                    <h1 className="text-sm font-medium">ЖК Ромашка</h1>
                    <div className="flex gap-1 text-foreground/80 text-xs items-center">
                      <p>СВАО / Реутов /</p>
                      <div className="flex gap-1 items-center">
                        <p>Сокол</p>
                        <Separator orientation="vertical" className="h-4" />
                      </div>
                      <div className="flex gap-1 items-center">
                        <CarFront className="w-5 h-5" />
                        <p>3 мин.</p>
                        <Separator orientation="vertical" className="h-4" />
                      </div>
                      <div className="flex gap-1 items-center">
                        <PersonStanding className="w-5 h-5" />
                        <p>39 мин.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2  flex-wrap">
                  <Badge className="text-[11px]">Старт продаж</Badge>
                  <Badge variant={"destructive"} className="gap-1 text-[11px]">
                    <CircleAlert className="w-3 h-3" /> Старт продаж
                  </Badge>
                </div>
              </div>
              <div className="flex justify-between flex-wrap">
                <div className="flex gap-2 items-center flex-wrap">
                  <div className="flex items-center gap-1 flex-wrap">
                    <p className="text-destructive font-medium">Апартаменты</p>
                    <CircleAlert className="text-foreground/50 w-4 h-4" />
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-2">
                    <p className="text-foreground/50">Класс жилья:</p>
                    <p className="text-foreground font-medium">Бизнес</p>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-2">
                    <p className="text-foreground/50">Отделка:</p>
                    <p className="text-foreground font-medium">Да</p>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-2">
                    <p className="text-foreground/50">Потолки:</p>
                    <p className="text-foreground font-medium">3,1м</p>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-2">
                    <p className="text-foreground/50">Парковка:</p>
                    <p className="text-foreground font-medium">подземная</p>
                  </div>
                </div>
                <div className="flex gap-1 flex-wrap">
                  <Button>Сдан</Button>
                  <Button variant={"secondary"}>2024</Button>
                  <Button variant={"secondary"}>2025</Button>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-2 items-center">
                <div className="h-full w-full flex flex-col gap-2">
                  <img
                    src={ObjectItemImage}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    variant={"ghost"}
                    className="text-blue text-[13px] w-full justify-start hover:text-blue "
                  >
                    <CirclePlay className="w-4 h-4" /> Видео презентация
                  </Button>
                </div>
                <GridTable cols={6}>
                  <GridTableItem></GridTableItem>
                  <GridTableItem>Ст</GridTableItem>
                  <GridTableItem>1кк</GridTableItem>
                  <GridTableItem>2кк</GridTableItem>
                  <GridTableItem>3кк</GridTableItem>
                  <GridTableItem>4кк</GridTableItem>
                  <GridTableItem>Без отделки</GridTableItem>
                  <GridTableItem>12,2 млн - 50м²</GridTableItem>
                  <GridTableItem>12,2 млн - 50м²</GridTableItem>
                  <GridTableItem>12,2 млн - 50м²</GridTableItem>
                  <GridTableItem></GridTableItem>
                  <GridTableItem>12,2 млн - 50м²</GridTableItem>
                  <GridTableItem>Предчистовая</GridTableItem>
                  <GridTableItem>12,2 млн - 50м²</GridTableItem>
                  <GridTableItem></GridTableItem>
                  <GridTableItem>12,2 млн - 50м²</GridTableItem>
                  <GridTableItem>12,2 млн - 50м²</GridTableItem>
                  <GridTableItem>12,2 млн - 50м²</GridTableItem>
                  <GridTableItem>Чистовая</GridTableItem>
                  <GridTableItem>12,2 млн - 50м²</GridTableItem>
                  <GridTableItem></GridTableItem>
                  <GridTableItem>12,2 млн - 50м²</GridTableItem>
                  <GridTableItem>12,2 млн - 50м²</GridTableItem>
                  <GridTableItem>12,2 млн - 50м²</GridTableItem>
                </GridTable>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-sm">Особенности</h3>
                  <div className="flex gap-2">
                    <Button variant={"secondary"}>Река</Button>
                    <Button variant={"secondary"}>Пруд</Button>
                    <Button variant={"secondary"}>Лесопарк</Button>
                    <Button variant={"secondary"}>Подземная парковка</Button>
                    <Button variant={"secondary"}>Чистовая отделка</Button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-sm">Описание</h3>
                  <p>
                    В ЖК Прокшино можно найти квартиры с высокими потолками, а
                    также уникальными планировками. В шаговой доступности есть
                    все необходимые объекты инфраструктуры, а из окон
                    открываются живописные вида на реку Сосновку. Комплекс
                    расположен в непосредственной близости от крупных природных
                    лесопарков с благоустроенными дорожками для пеших и
                    велосипедных прогулок и зонами отдыха.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-sm">Расположение</h3>
                  <p>
                    ЖК "Прокшино" расположено всего в 10 минутах ходьбы от ст.м
                    Прокшино, рядом с багоустроенной набережной. Рядом строится
                    крупный бизнес-квартал с торговым центром и
                    спортивно-событийный кластер с горнолыжным склоном.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <div className="bg-white p-4 flex flex-col gap-4 text-[13px]  relative">
      <div>
        <Badge>
          <ArrowUp />
          Цены выросли на 16% за полгода. В среднем продается 29 квартир в
          месяцю
        </Badge>
      </div>
      <Dialog>
        <DialogTrigger>
          <Button
            className="absolute top-2 right-2 text-foreground/50"
            variant={"ghost"}
          >
            <Pencil className="w-4 h-4" />
            Редактировать
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-7xl">
          <DialogHeader>
            <DialogTitle>Редактирование ЖК Ромашка</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <div className="grid grid-cols-1 gap-2">
              <FormField
                control={control}
                name={"peculiarities"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Особенности</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={"description"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Описание</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={"location"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Расположение</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Form>

          <DialogFooter>
            <Button type="submit">Сохранить изменения</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Avatar className="h-14 w-14">
            <AvatarFallback>ЖК Ромашка</AvatarFallback>
            <AvatarImage src={ObjectImage} />
          </Avatar>
          <div className="flex flex-col gap-0">
            <h1 className="text-sm font-medium">ЖК Ромашка</h1>
            <div className="flex gap-1 text-foreground/80 text-xs items-center">
              <p>СВАО / Реутов /</p>
              <div className="flex gap-1 items-center">
                <p>Сокол</p>
                <Separator orientation="vertical" className="h-4" />
              </div>
              <div className="flex gap-1 items-center">
                <CarFront className="w-5 h-5" />
                <p>3 мин.</p>
                <Separator orientation="vertical" className="h-4" />
              </div>
              <div className="flex gap-1 items-center">
                <PersonStanding className="w-5 h-5" />
                <p>39 мин.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge className="text-[11px]">Старт продаж</Badge>
          <Badge variant={"destructive"} className="gap-1 text-[11px]">
            <CircleAlert className="w-3 h-3" /> Старт продаж
          </Badge>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-1">
            <p className="text-destructive font-medium">Апартаменты</p>
            <Tooltip>
              <TooltipTrigger>
                <CircleAlert className="text-foreground/50 w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent className="max-w-52 text-center">
                Только домены 2 или 3 уровня: site.ru или moscow.ru, без
                возможности выбора страницы или раздела
              </TooltipContent>
            </Tooltip>
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center gap-2">
            <p className="text-foreground/50">Класс жилья:</p>
            <p className="text-foreground font-medium">Бизнес</p>
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center gap-2">
            <p className="text-foreground/50">Отделка:</p>
            <p className="text-foreground font-medium">Да</p>
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center gap-2">
            <p className="text-foreground/50">Потолки:</p>
            <p className="text-foreground font-medium">3,1м</p>
          </div>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center gap-2">
            <p className="text-foreground/50">Парковка:</p>
            <p className="text-foreground font-medium">подземная</p>
          </div>
        </div>
        <div className="flex gap-1">
          <Button>Сдан</Button>
          <Button variant={"secondary"}>2024</Button>
          <Button variant={"secondary"}>2025</Button>
        </div>
      </div>
      <div className="grid grid-cols-[160px_1fr] gap-2 items-center">
        <Dialog
          open={open}
          onOpenChange={(value) => {
            if (modalOpen) {
              setOpen(value);
            } else {
              setOpen(false);
            }
          }}
        >
          <DialogTrigger asChild>
            <div className="h-full w-full flex flex-col gap-2">
              <img
                src={ObjectItemImage}
                className="w-full h-full object-cover"
              />
              <Button
                variant={"ghost"}
                className="text-blue text-[13px] w-full justify-start hover:text-blue "
              >
                <CirclePlay className="w-4 h-4" /> Видео презентация
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-full w-full xl:max-w-[1629px] p-0 rounded-none  border-0 shadow-none overflow-y-auto h-full xl:h-auto">
            <div className="grid grid-cols-1  xl:grid-cols-[730px_1fr]">
              <div className="h-full w-full relative">
                <Swiper
                  navigation={{
                    prevEl: ".object-prev-button",
                    nextEl: ".object-next-button",
                  }}
                  modules={[Navigation]}
                  className="w-full h-full"
                >
                  <SwiperSlide className="w-full h-full">
                    <img src={ObjectItem2} className="w-full h-full" />
                  </SwiperSlide>
                  <SwiperSlide className="w-full h-full">
                    <img src={ObjectItem2} className="w-full h-full" />
                  </SwiperSlide>
                  <SwiperSlide className="w-full h-full">
                    <img src={ObjectItem2} className="w-full h-full" />
                  </SwiperSlide>
                  <SwiperSlide className="w-full h-full">
                    <img src={ObjectItem2} className="w-full h-full" />
                  </SwiperSlide>
                </Swiper>
                <Button
                  ref={prevButtonRef}
                  className="absolute object-prev-button z-50 top-[50%] left-2"
                  variant={"outline"}
                >
                  <ChevronLeft />
                </Button>
                <Button
                  ref={nextButtonRef}
                  variant={"outline"}
                  className="absolute object-next-button z-50 top-[50%] right-2 "
                >
                  <ChevronRight />
                </Button>
              </div>
              <div className="bg-white p-4 flex flex-col gap-4 text-[13px]">
                <div>
                  <Badge>
                    <ArrowUp />
                    Цены выросли на 16% за полгода. В среднем продается 29
                    квартир в месяцю
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center flex-wrap">
                    <Avatar className="h-14 w-14">
                      <AvatarFallback>ЖК Ромашка</AvatarFallback>
                      <AvatarImage src={ObjectImage} />
                    </Avatar>
                    <div className="flex flex-col gap-0">
                      <h1 className="text-sm font-medium">ЖК Ромашка</h1>
                      <div className="flex gap-1 text-foreground/80 text-xs items-center">
                        <p>СВАО / Реутов /</p>
                        <div className="flex gap-1 items-center">
                          <p>Сокол</p>
                          <Separator orientation="vertical" className="h-4" />
                        </div>
                        <div className="flex gap-1 items-center">
                          <CarFront className="w-5 h-5" />
                          <p>3 мин.</p>
                          <Separator orientation="vertical" className="h-4" />
                        </div>
                        <div className="flex gap-1 items-center">
                          <PersonStanding className="w-5 h-5" />
                          <p>39 мин.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2  flex-wrap">
                    <Badge className="text-[11px]">Старт продаж</Badge>
                    <Badge
                      variant={"destructive"}
                      className="gap-1 text-[11px]"
                    >
                      <CircleAlert className="w-3 h-3" /> Старт продаж
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-between flex-wrap gap-2">
                  <div className="flex gap-2 items-center flex-wrap">
                    <div className="flex items-center gap-1 flex-wrap">
                      <p className="text-destructive font-medium">
                        Апартаменты
                      </p>
                      <CircleAlert className="text-foreground/50 w-4 h-4" />
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-2">
                      <p className="text-foreground/50">Класс жилья:</p>
                      <p className="text-foreground font-medium">Бизнес</p>
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-2">
                      <p className="text-foreground/50">Отделка:</p>
                      <p className="text-foreground font-medium">Да</p>
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-2">
                      <p className="text-foreground/50">Потолки:</p>
                      <p className="text-foreground font-medium">3,1м</p>
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-2">
                      <p className="text-foreground/50">Парковка:</p>
                      <p className="text-foreground font-medium">подземная</p>
                    </div>
                  </div>
                  <div className="flex gap-1 flex-wrap">
                    <Button>Сдан</Button>
                    <Button variant={"secondary"}>2024</Button>
                    <Button variant={"secondary"}>2025</Button>
                  </div>
                </div>
                <div className="flex  gap-2 items-center">
                  <div className="h-full flex flex-col gap-2 max-w-[160px]">
                    <img
                      src={ObjectItemImage}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant={"ghost"}
                      className="text-blue text-[13px] w-full justify-start hover:text-blue "
                    >
                      <CirclePlay className="w-4 h-4" /> Видео презентация
                    </Button>
                  </div>
                  <GridTable cols={6}>
                    <GridTableItem></GridTableItem>
                    <GridTableItem>Ст</GridTableItem>
                    <GridTableItem>1кк</GridTableItem>
                    <GridTableItem>2кк</GridTableItem>
                    <GridTableItem>3кк</GridTableItem>
                    <GridTableItem>4кк</GridTableItem>
                    <GridTableItem>Без отделки</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem></GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>Предчистовая</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem></GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>Чистовая</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem></GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                    <GridTableItem>12,2 млн - 50м²</GridTableItem>
                  </GridTable>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-sm">Особенности</h3>
                    <div className="flex gap-2">
                      <Button variant={"secondary"}>Река</Button>
                      <Button variant={"secondary"}>Пруд</Button>
                      <Button variant={"secondary"}>Лесопарк</Button>
                      <Button variant={"secondary"}>Подземная парковка</Button>
                      <Button variant={"secondary"}>Чистовая отделка</Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-sm">Описание</h3>
                    <p>
                      В ЖК Прокшино можно найти квартиры с высокими потолками, а
                      также уникальными планировками. В шаговой доступности есть
                      все необходимые объекты инфраструктуры, а из окон
                      открываются живописные вида на реку Сосновку. Комплекс
                      расположен в непосредственной близости от крупных
                      природных лесопарков с благоустроенными дорожками для
                      пеших и велосипедных прогулок и зонами отдыха.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-sm">Расположение</h3>
                    <p>
                      ЖК "Прокшино" расположено всего в 10 минутах ходьбы от
                      ст.м Прокшино, рядом с багоустроенной набережной. Рядом
                      строится крупный бизнес-квартал с торговым центром и
                      спортивно-событийный кластер с горнолыжным склоном.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <GridTable cols={6}>
          <GridTableItem></GridTableItem>
          <GridTableItem>Ст</GridTableItem>
          <GridTableItem>1кк</GridTableItem>
          <GridTableItem>2кк</GridTableItem>
          <GridTableItem>3кк</GridTableItem>
          <GridTableItem>4кк</GridTableItem>
          <GridTableItem>Без отделки</GridTableItem>
          <GridTableItem>12,2 млн - 50м²</GridTableItem>
          <GridTableItem>12,2 млн - 50м²</GridTableItem>
          <GridTableItem>12,2 млн - 50м²</GridTableItem>
          <GridTableItem></GridTableItem>
          <GridTableItem>12,2 млн - 50м²</GridTableItem>
          <GridTableItem>Предчистовая</GridTableItem>
          <GridTableItem>12,2 млн - 50м²</GridTableItem>
          <GridTableItem></GridTableItem>
          <GridTableItem>12,2 млн - 50м²</GridTableItem>
          <GridTableItem>12,2 млн - 50м²</GridTableItem>
          <GridTableItem>12,2 млн - 50м²</GridTableItem>
          <GridTableItem>Чистовая</GridTableItem>
          <GridTableItem>12,2 млн - 50м²</GridTableItem>
          <GridTableItem></GridTableItem>
          <GridTableItem>12,2 млн - 50м²</GridTableItem>
          <GridTableItem>12,2 млн - 50м²</GridTableItem>
          <GridTableItem>12,2 млн - 50м²</GridTableItem>
        </GridTable>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-sm">Особенности</h3>
          <div className="flex gap-2">
            <Button variant={"secondary"}>Река</Button>
            <Button variant={"secondary"}>Пруд</Button>
            <Button variant={"secondary"}>Лесопарк</Button>
            <Button variant={"secondary"}>Подземная парковка</Button>
            <Button variant={"secondary"}>Чистовая отделка</Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-sm">Описание</h3>
          <p>
            В ЖК Прокшино можно найти квартиры с высокими потолками, а также
            уникальными планировками. В шаговой доступности есть все необходимые
            объекты инфраструктуры, а из окон открываются живописные вида на
            реку Сосновку. Комплекс расположен в непосредственной близости от
            крупных природных лесопарков с благоустроенными дорожками для пеших
            и велосипедных прогулок и зонами отдыха.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-sm">Расположение</h3>
          <p>
            ЖК "Прокшино" расположено всего в 10 минутах ходьбы от ст.м
            Прокшино, рядом с багоустроенной набережной. Рядом строится крупный
            бизнес-квартал с торговым центром и спортивно-событийный кластер с
            горнолыжным склоном.
          </p>
        </div>
      </div>
    </div>
  );
};
