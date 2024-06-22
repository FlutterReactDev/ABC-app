import { Map2GIS } from "@/components/atoms/2GIS";

import { DirectoryFilter } from "@/components/molecules/directory-filter";
import { Object } from "@/components/molecules/object";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { ChevronDown, ChevronLeft, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";
import { Drawer } from "vaul";

export const DirectoryPage = () => {
  const isMobile = useMedia("(max-width: 768px)");
  const [snap, setSnap] = useState<number | string | null>("108px");
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      setOpen(true);
      setSnap("200px");
    }
  }, [open]);
  return (
    <div className="w-full h-full">
      {!isMobile && <DirectoryFilter />}
      {!isMobile && (
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
      )}

      {!isMobile && (
        <div className="mt-4 grid grid-cols-[840px_1fr] gap-2">
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
      )}
      {isMobile && (
        <Map2GIS
          initialMapOptions={{
            center: [74.603605, 42.876452],
            zoom: 15,
          }}
          className="w-full h-full rounded-lg overflow-hidden z-50 pointer-events-auto"
        />
      )}
      {isMobile && open && (
        <Drawer.Root
          snapPoints={["108px", 1]}
          activeSnapPoint={snap}
          open={open}
          setActiveSnapPoint={(snapPoint) => {
            if (snapPoint) {
              setSnap(snapPoint);
            } else {
              setSnap("108px");
            }
          }}
        >
          {snap == 1 && (
            <Drawer.Overlay className="fixed inset-0 z-50 bg-black/80" />
          )}

          <Drawer.Portal>
            <Drawer.Content className="bg-white flex z-50 flex-col fixed bottom-0 left-0 right-0 max-h-[100%] rounded-t-[10px]">
              <div className="mx-auto mt-4 h-8 w-[100px] rounded-full bg-muted" />
              <div
                className={cn(
                  "grid gap-1.5 p-4 text-center sm:text-left h-[70px]"
                )}
              >
                <div className="flex gap-2">
                  <Input
                    placeholder="Поиск по Названию ЖК, застройщика, округам, районам, метро"
                    className="flex-1 h-10"
                    onFocus={() => {
                      setSnap(1);
                    }}
                  />
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button size={"icon"}>
                        <Menu />
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="sm:max-w-full overflow-y-auto max-w-full w-full">
                      <SheetHeader>
                        <SheetTitle>Фильтр</SheetTitle>
                      </SheetHeader>
                      <DirectoryFilter />
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
              <div
                className={cn("flex flex-col w-full p-4 pt-5", {
                  "overflow-y-auto": snap === 1,
                  "overflow-hidden": snap !== 1,
                })}
              >
                <Object />
                <Object />
                <Object />
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
    </div>
  );
};
