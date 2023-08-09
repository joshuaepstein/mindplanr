import { BrandWithoutSize } from "@mindplanr/ui";
import {Inter} from "next/font/google";
import {cn} from "@mindplanr/utils"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  return (
    <>
      <div className="w-full h-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-center space-y-3">
          <BrandWithoutSize className="md:w-[600px] xs:w-[300px] w-[80vw] text-primary" />
          <h3 className="text-xl md:text-2xl lg:text-4xl">coming soon.</h3>
        </div>
        <div className="absolute top-0 right-0 left-0 bottom-0 -mx-24 flex items-center justify-center">
          <BrandWithoutSize height={1000} className="w-full absolute text-white stroke-primary-50 stroke-[3] -z-10" />
        </div>

        <p className={cn(inter.className, "font-medium absolute bottom-5 h-max text-center text-primary-900")}>© Mindplanr 2023. A Joshua Epstein Project.</p>
      </div>
    </>
  );
}
