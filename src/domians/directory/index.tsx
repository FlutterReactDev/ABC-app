import { CitySelect } from "@/components/atoms/city-select";
import { CurrencyInput } from "@/components/atoms/currency-input";
import { DeadlineSelect } from "@/components/atoms/deadline-select";
import { FinishingSelect } from "@/components/atoms/finishing-select";
import { MetroSelect } from "@/components/atoms/metro-select";
import { DirectoryFilter } from "@/components/molecules/directory-filter";
import { Label } from "@/components/ui/label";

export const DirectoryPage = () => {
  return (
    <div className="w-full h-full">
      <CitySelect onChange={() => {}} />
      <MetroSelect onChange={() => {}} />

      <CurrencyInput />
      <DeadlineSelect onChange={() => {}} />
      <FinishingSelect onChange={() => {}} />
      <Label>1232132</Label>
      <DirectoryFilter />
      {/* <Map2GIS
        initialMapOptions={{
          center: [37.617774, 55.755836],
          zoom: 12,
        }}
      /> */}
    </div>
  );
};
