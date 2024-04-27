
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { BellIcon, DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";




export default function Home() {
  const data = Date().toString();
  return (
    <>
      <div className="h-screen bg-zinc-800">
      <div className="h-1/6 w-full justify-between items-center flex p-5 ">

<div>
  <p className="text-xl font-semibold font-sans text-white">ZeroDoller</p>
</div>

<div className=" h-full flex justify-center items-center">
  <Button className="bg-indigo-600 rounded-full mx-2 " size='icon' ><BellIcon className="h-5 w-5" /></Button>
  <Button className="bg-indigo-600 rounded-full" >Joind Now</Button>
</div>
</div>
      <div className=" w-auto h-4/6 flex justify-center items-center bg-zinc-800 flex-col">
        
        <div className="flex w-auto h-auto  md:mx-96 rounded-full flex-row  items-center  text-center text-white">
          <Input type='search' className="rounded-full bg-zinc-700 h-10 border-none hover:border-none selection:border-none" placeholder="Serach..." width={50} />
          
        </div>
        

      </div>
      <div className=" w-full h-1/6 bottom-0 p-5 left-0 bg-indigo-600">

        <div className="md:flex md:justify-between md:items-center text-white font-semibold">
          <div className="text-2xl ">India, <p className="text-xs">{data}</p></div>
          <Separator className="my-2 md:hidden block" />
          <div >
            <Button size='icon' variant='ghost' className=" rounded-full hover:bg-zinc-800 hover:text-white"><InstagramLogoIcon className="h-5 w-5 " /></Button>
            <Button size='icon' variant='ghost' className="rounded-full hover:bg-zinc-800 hover:text-white"><LinkedInLogoIcon className="h-5 w-5 " /></Button>
            <Button size='icon' variant='ghost' className="rounded-full hover:bg-zinc-800 hover:text-white"><DiscordLogoIcon className="h-5 w-5 " /></Button>
            <Button size='icon' variant='ghost' className=" rounded-full hover:bg-zinc-800 hover:text-white"><GitHubLogoIcon className="h-5 w-5 " /></Button>


          </div>

        </div>
      </div>
      </div>

    </>


  );
}
