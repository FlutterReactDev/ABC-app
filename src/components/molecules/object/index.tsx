import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, CarFront, CircleAlert, PersonStanding } from "lucide-react";
import ObjectImage from "../../../assets/object-icon.png";
import { Button } from "@/components/ui/button";
export const Object = () => {
  return (
    <div className="bg-white p-4 flex flex-col gap-4 text-[13px]">
      <div>
        <Badge>
          <ArrowUp />
          Цены выросли на 16% за полгода. В среднем продается 29 квартир в
          месяцю
        </Badge>
      </div>

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
    </div>
  );
};
