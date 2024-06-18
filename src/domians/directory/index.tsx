import { Map2GIS } from "@/components/atoms/2GIS";
import { DirectoryFilter } from "@/components/molecules/directory-filter";
import { Object } from "@/components/molecules/object";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

import { ChevronDown, ChevronLeft } from "lucide-react";

export const DirectoryPage = () => {
  return (
    <div className="w-full h-full">
      <DirectoryFilter />
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex justify-between">
          <Button>
            <ChevronLeft className="w-4 h-4" />
            Свернуть
          </Button>
          <div className="flex gap-1 items-center">
            <div className="text-sm">Сортировка:</div>
            <Popover>
              <PopoverTrigger>
                <Button variant={"ghost"}>
                  По приоритету <ChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="max-w-52 flex flex-col gap-2 justify-start"
                align="end"
              >
                <Button variant={"ghost"} className="justify-start">
                  По приоритету
                </Button>
                <Button variant={"ghost"} className="justify-start">
                  Цена по возрастанию
                </Button>
                <Button variant={"ghost"} className="justify-start">
                  Цена по убыванию
                </Button>
                <Button variant={"ghost"} className="justify-start">
                  Площадь по возрастанию
                </Button>
                <Button variant={"ghost"} className="justify-start">
                  Площадь по убыванию
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <Separator />
        <div className="flex gap-2">
          <Button className="italic cursor-pointer">
            Панорамное остекление
          </Button>
          <Button variant={"secondary"} className="italic cursor-pointer">
            Лоджия
          </Button>
          <Button variant={"secondary"} className="italic cursor-pointer">
            Балкон
          </Button>
          <Button variant={"secondary"} className="italic cursor-pointer">
            Кладовые
          </Button>
          <Button variant={"secondary"} className="italic cursor-pointer">
            Терасса
          </Button>
          <Button variant={"secondary"} className="italic cursor-pointer">
            Низкоэтажность
          </Button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <Object />
          <Object />
          <Object />
          <Object />
          <Object />
          <Object />
          <Object />
          <Object />
          <Object />
          <Object />
          <Object />
          <Object />
        </div>
        <div className="flex h-dvh w-full  rounded-lg sticky top-0">
          <Map2GIS
            initialMapOptions={{
              center: [74.603605, 42.876452],
              zoom: 15,
            }}
            className="w-full h-full rounded-lg overflow-hidden"
            
          />
        </div>
      </div>
    </div>
  );
};
