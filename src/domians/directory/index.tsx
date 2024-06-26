import { HtmlMarker2GIS, Map2GIS } from "@/components/atoms/2GIS";

import { DirectoryFilter } from "@/components/molecules/directory-filter";
import { Object } from "@/components/molecules/object";
import { Button } from "@/components/ui/button";

import ObjectImage from "@/assets/object-icon.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Menu,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";
import { Drawer } from "vaul";

export const DirectoryPage = () => {
  const isMobile = useMedia("(max-width: 900px)");
  const [snap, setSnap] = useState<number | string | null>("90px");
  const [open, setOpen] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (!open) {
      setOpen(true);
      setSnap("200px");
    }
  }, [open]);

  const onToggleCollapse = () => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  return (
    <div className="w-full h-full">
      {!isMobile && <DirectoryFilter />}
      {!isMobile && (
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex justify-between">
            {collapsed ? (
              <Button onClick={onToggleCollapse} className="sticky top-0">
                <ChevronRight className="w-4 h-4" />
                Развернуть
              </Button>
            ) : (
              <Button onClick={onToggleCollapse}>
                <ChevronLeft className="w-4 h-4" />
                Свернуть
              </Button>
            )}

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
        <div
          className={cn(
            "mt-4 grid grid-cols-[minmax(0px,840px)_minmax(300px,1fr)] gap-2",
            collapsed && "grid-cols-1"
          )}
        >
          <div className={cn("flex flex-col gap-2", collapsed && "hidden")}>
            <Object modalOpen />
            <Object modalOpen />
            <Object modalOpen />
            <Object modalOpen />
            <Object modalOpen />
            <Object modalOpen />
            <Object modalOpen />
            <Object modalOpen />
            <Object modalOpen />
            <Object modalOpen />
            <Object modalOpen />
            <Object modalOpen />
          </div>
          <div className="flex h-dvh w-full  rounded-lg sticky top-[-35px]">
            <Map2GIS
              initialMapOptions={{
                center: [74.603605, 42.876452],
                zoom: 15,
              }}
              className="w-full h-full rounded-lg overflow-hidden"
            >
              <HtmlMarker2GIS coordinates={[74.604923, 42.847277]}>
                <div
                  className="relative bg-white rounded p-3.5 flex flex-col gap-3"
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
                      <p className="text-destructive font-medium">
                        Апартаменты
                      </p>
                      <Tooltip>
                        <TooltipTrigger>
                          <CircleAlert className="text-foreground/50 w-4 h-4" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-52 text-center">
                          Только домены 2 или 3 уровня: site.ru или moscow.ru,
                          без возможности выбора страницы или раздела
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

                  <div className="flex gap-1 justify-end">
                    <Button>Сдан</Button>
                    <Button variant={"secondary"}>2024</Button>
                    <Button variant={"secondary"}>2025</Button>
                  </div>

                  <Table>
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
                  <div>
                    <Button
                      variant={"ghost"}
                      className="text-primary hover:text-primary"
                    >
                      Показать детали
                    </Button>
                  </div>

                  <div className="absolute h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white bottom-0 left-[50%] translate-y-[88%] rotate-180" />
                </div>
              </HtmlMarker2GIS>
              <HtmlMarker2GIS coordinates={[74.620365, 42.852053]}>
                <div
                  className="relative bg-white rounded p-3.5 flex flex-col gap-3"
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
                      <p className="text-destructive font-medium">
                        Апартаменты
                      </p>
                      <Tooltip>
                        <TooltipTrigger>
                          <CircleAlert className="text-foreground/50 w-4 h-4" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-52 text-center">
                          Только домены 2 или 3 уровня: site.ru или moscow.ru,
                          без возможности выбора страницы или раздела
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

                  <div className="flex gap-1 justify-end">
                    <Button>Сдан</Button>
                    <Button variant={"secondary"}>2024</Button>
                    <Button variant={"secondary"}>2025</Button>
                  </div>

                  <Table>
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
                  <div>
                    <Button
                      variant={"ghost"}
                      className="text-primary hover:text-primary"
                    >
                      Показать детали
                    </Button>
                  </div>

                  <div className="absolute h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white bottom-0 left-[50%] translate-y-[88%] rotate-180" />
                </div>
              </HtmlMarker2GIS>
            </Map2GIS>
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
          snapPoints={["90px", 1]}
          activeSnapPoint={snap}
          open={open}
          setActiveSnapPoint={(snapPoint) => {
            if (snapPoint) {
              setSnap(snapPoint);
            } else {
              setOpen(false);
              setSnap("90px");
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
                className={cn("flex flex-col w-full p-4 pt-5 bg-muted gap-4", {
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
