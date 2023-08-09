import { BrandWithoutSize } from "@mindplanr/ui";

export default function Page() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-3">
          <BrandWithoutSize className="md:w-[600px] xs:w-[300px] w-[80vw] text-primary" />
          <h3 className="text-xl md:text-2xl lg:text-4xl">coming soon.</h3>
        </div>
        <BrandWithoutSize height={1000} className="font-[Riffic] w-full absolute left-0 right-0 text-white stroke-primary-50 stroke-[3] -z-10" />
      </div>
    </>
  );
}
