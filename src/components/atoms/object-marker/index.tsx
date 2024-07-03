import ObjectImage from "@/assets/object-icon.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleAlert } from "lucide-react";
import { FC, useState } from "react";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { HtmlMarker2GIS } from "../2GIS";

export interface ObjectMarkerProps {
  coordinates: number[];
}
export const ObjectMarker: FC<ObjectMarkerProps> = (props) => {
  const { coordinates } = props;
  const [open, setOpen] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <HtmlMarker2GIS coordinates={coordinates}>
      <div
        className="relative bg-white rounded p-3.5 flex flex-col gap-3 max-w-2xl w-full text-xs"
        style={{
          transform: "translate(-51%, -103%)",
        }}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Avatar className="h-14 w-14">
              <AvatarFallback>ЖК Ромашка</AvatarFallback>
              <AvatarImage src={ObjectImage} />
            </Avatar>
            <div className="flex flex-col gap-0">
              <h1 className="text-sm font-medium">ЖК Ромашка</h1>
              <div className="flex gap-1 text-foreground/80 text-xs items-center">
                Бизнес
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center flex-wrap text-[12px]">
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

        <div className="flex gap-1 justify-end ">
          <Button
            className="text-xs"
            onClick={() => {
              setActiveSlide(0);
              swiperInstance?.slideTo(0);
            }}
            variant={"secondary"}
            {...(activeSlide == 0 && {
              variant: "default",
            })}
          >
            Сдан
          </Button>
          <Button
            variant={"secondary"}
            className="text-xs"
            {...(activeSlide == 1 && {
              variant: "default",
            })}
            onClick={() => {
              setActiveSlide(1);
              swiperInstance?.slideTo(1);
            }}
          >
            2024
          </Button>
          <Button
            variant={"secondary"}
            className="text-xs"
            {...(activeSlide == 2 && {
              variant: "default",
            })}
            onClick={() => {
              setActiveSlide(2);
              swiperInstance?.slideTo(2);
            }}
          >
            2025
          </Button>
        </div>
        <Swiper
          className="w-full h-full"
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
          }}
          spaceBetween={10}
          slidesPerView={"auto"}
          freeMode={true}
        >
          <SwiperSlide className="w-full h-full">
            <Table className="text-xs">
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Ст</TableHead>
                  <TableHead>1кк</TableHead>
                  <TableHead>2кк</TableHead>
                  <TableHead>3кк</TableHead>
                  <TableHead>4кк</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Без отделки</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Без отделки</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Без отделки</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            {" "}
            <Table className="text-xs">
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Ст</TableHead>
                  <TableHead>1кк</TableHead>
                  <TableHead>2кк</TableHead>
                  <TableHead>3кк</TableHead>
                  <TableHead>4кк</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Без отделки</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Без отделки</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Без отделки</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            {" "}
            <Table className="text-xs">
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Ст</TableHead>
                  <TableHead>1кк</TableHead>
                  <TableHead>2кк</TableHead>
                  <TableHead>3кк</TableHead>
                  <TableHead>4кк</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Без отделки</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Без отделки</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Без отделки</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                  <TableCell>12,2 млн - 50м²</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </SwiperSlide>
        </Swiper>

        <Collapsible open={open} onOpenChange={setOpen}>
          <div className="gap-2">
            <CollapsibleTrigger>
              <Button
                variant={"ghost"}
                className="text-primary hover:text-primary"
              >
                {open && "Скрыть детали"}
                {!open && "Показать детали"}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col gap-3 px-2">
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
            </CollapsibleContent>
          </div>
        </Collapsible>

        <div className="absolute h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white bottom-0 left-[50%] translate-y-[88%] rotate-180" />
      </div>
    </HtmlMarker2GIS>
  );
};
