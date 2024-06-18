import { CitySelect } from "@/components/atoms/city-select";
import { CurrencyInput } from "@/components/atoms/currency-input";
import { DeadlineSelect } from "@/components/atoms/deadline-select";
import { DirectionFilter } from "@/components/atoms/direction-filter";
import { FinishingSelect } from "@/components/atoms/finishing-select";
import { MetroSelect } from "@/components/atoms/metro-select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const DirectoryFilter = () => {
  return (
    <div className="bg-white p-4 flex flex-col gap-5">
      <Input placeholder="Поиск по Названию ЖК, застройщика, округам, районам, метро" />
      <div className="flex gap-8">
        <div className="flex flex-col gap-3 flex-1">
          <div className="flex flex-col gap-3">
            <Label>Город</Label>
            <CitySelect onChange={() => {}} />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Метро</Label>
            <MetroSelect onChange={() => {}} />
          </div>
          <div className="flex gap-1">
            <Checkbox id="extend" />
            <label
              htmlFor="extend"
              className="text-sm font-medium leading-none text-foreground/50"
            >
              Расширить до соседних станций
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <Label>Направление</Label>
          <DirectionFilter />
        </div>
        <div className="flex flex-col gap-3 ">
          <Label>Цена</Label>
          <div className="flex gap-2 ">
            <CurrencyInput placeholder="от" className="max-w-36 w-full" />
            <CurrencyInput placeholder="до" className="max-w-36 w-full" />
          </div>
          <div className="flex flex-col gap-3 ">
            <Label>Площадь</Label>
            <div className="flex gap-2">
              <Input placeholder="от" className="max-w-36 w-full" />
              <Input placeholder="до" className="max-w-36 w-full" />
            </div>
          </div>
          <div className="flex gap-1">
            <Checkbox id="north" />
            <label
              htmlFor="north"
              className="text-sm font-medium leading-none text-foreground"
            >
              Север
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <Label>Класс ЖК</Label>
          <div className="flex gap-3">
            <div className="flex gap-2 flex-col">
              <div className="flex gap-1">
                <Checkbox id="north" />
                <label
                  htmlFor="north"
                  className="text-sm font-medium leading-none text-foreground"
                >
                  Эконом
                </label>
              </div>
              <div className="flex gap-1">
                <Checkbox id="north" />
                <label
                  htmlFor="north"
                  className="text-sm font-medium leading-none text-foreground"
                >
                  Эконом
                </label>
              </div>
            </div>

            <div className="flex gap-2 flex-col">
              <div className="flex gap-1">
                <Checkbox id="north" />
                <label
                  htmlFor="north"
                  className="text-sm font-medium leading-none text-foreground"
                >
                  Эконом
                </label>
              </div>
              <div className="flex gap-1">
                <Checkbox id="north" />
                <label
                  htmlFor="north"
                  className="text-sm font-medium leading-none text-foreground"
                >
                  Эконом
                </label>
              </div>
            </div>
          </div>

          <Label>Комнатность (ст)</Label>
          <div className="flex gap-1">
            <Button size={"icon"}>1</Button>
            <Button size={"icon"}>2</Button>
            <Button size={"icon"}>3</Button>
            <Button size={"icon"}>4+</Button>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-w-56 w-full">
          <Label>Срок сдачи</Label>
          <DeadlineSelect onChange={() => {}} />
          <Label>Отделка</Label>
          <FinishingSelect onChange={() => {}} />
        </div>
      </div>
    </div>
  );
};
