import { Map2GIS } from "@/components/atoms/2GIS";

export const DirectoryPage = () => {
  return (
    <div className="w-full h-full">
      <Map2GIS
        initialMapOptions={{
          center: [37.617774, 55.755836],
          zoom: 12,
        }}
      />
    </div>
  );
};
