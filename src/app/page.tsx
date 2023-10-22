"use client"
import { HomeHeader } from "@/components/home/HomeHeader";
import { Spinner } from "@/components/shared/common/Spinner";
import { useDefaultContext } from "@/lib/providers/default-provider";




export default  function Home() {
  const {isLoading} = useDefaultContext()

  if(isLoading) return <Spinner/>
  return (
    <div className="">
      <HomeHeader/>
    </div>
  )
}
