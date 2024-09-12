import { Cog, Info, Rocket, Usb } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex-grow">
        Dash
      </div>
      <div className="w-full h-[200px] bg-bg flex">
        <Tabs defaultValue="drive" className="flex w-full">
          <TabsList className="flex flex-col !bg-transparent px-0 justify-start">
            <TabsTrigger value="drive" className="!bg-[#393939] my-[1px] rounded-l-none border-r-4 border-[#464646]"><Rocket color="#fff"></Rocket></TabsTrigger>
            <TabsTrigger value="info" className="!bg-[#393939] my-[1px] rounded-l-none border-r-4 border-[#464646]"><Info color="#fff"></Info></TabsTrigger>
            <TabsTrigger value="config" className="!bg-[#393939] my-[1px] rounded-l-none border-r-4 border-[#464646]"><Cog color="#fff"></Cog></TabsTrigger>
            <TabsTrigger value="joystick" className="!bg-[#393939] my-[1px] rounded-l-none border-r-4 border-[#464646]"><Usb color="#fff"></Usb></TabsTrigger>
          </TabsList>
          
          {/* DRIVE */}
          <TabsContent value="drive" className="flex m-0 flex-grow">
            <div className="w-[26rem] p-2 m-2 rounded-md !bg-[#464646] flex items-center">
              <div className="w-64 h-full flex flex-col">
                {/* Modes */}
                <div className="modes flex flex-col">
                  <label className="flex items-center pl-3 border-2 border-[#2d2d2d] has-[input:checked]:bg-[#2d2d2d] relative">
                    <input type="radio" name="mode" value="teleop" className="hidden absolute` w-full h-full z-10" />
                    TeleOperated
                  </label>
                  <label className="flex items-center pl-3 border-x-2 border-[#2d2d2d] has-[input:checked]:bg-[#2d2d2d] relative">
                    <input type="radio" name="mode" value="auto" className="hidden absolute w-full h-full z-10" />
                    Autonomous
                  </label>
                  <label className="flex items-center pl-3 border-2 border-[#2d2d2d] has-[input:checked]:bg-[#2d2d2d] relative">
                    <input type="radio" name="mode" value="practice" className="hidden absolute w-full h-full z-10" />
                    Practice
                  </label>
                </div>

                {/* Enable / Disable */}
                <div className="flex-grow mt-6">
                  <button className="h-full w-1/2 border-2 text-lg border-[#2d2d2d] border-r-0 text-[#002f00] font-extrabold">Enable</button>
                  <button className="h-full w-1/2 border-2 text-lg border-[#2d2d2d] text-[#ff0000] bg-[#2d2d2d] font-extrabold">Disable</button>
                </div>
              </div>

              {/* Separator */}
              <div className="separator w-[2px] h-full bg-[#2d2d2d] ml-4"></div>

              <div className="flex flex-col flex-grow h-full px-4 items">
                {/* Time */}
                <div className="flex justify-between items-center">
                  <h2>Elapsed time</h2>
                  <h1 className="text-xl">00:00:00</h1>
                </div>

                {/* Status */}
                <div className="flex flex-col items-end mt-4">
                  <div className="flex items-center">
                    <h1 className="mr-2 leading-none">Communications</h1>
                    <div className="w-4 h-3 bg-[#ff0000]"></div>
                  </div>

                  <div className="flex items-center">
                    <h1 className="mr-2 leading-none">Robot Code</h1>
                    <div className="w-4 h-3 bg-[#ff0000]"></div>
                  </div>

                  <div className="flex items-center">
                    <h1 className="mr-2 leading-none">Joysticks</h1>
                    <div className="w-4 h-3 bg-[#ff0000]"></div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex-grow flex items-end pb-2">
                  <h1 className="font-bold whitespace-pre-wrap text-xl text-center message">No Robot Communication</h1>
                </div>
              </div>
            </div>

            {/* Console */}
            <div className="p-2 m-2 rounded-md !bg-[#464646] flex flex-col flex-grow">
              <h1 className="leading-none">Console</h1>
              <textarea name="console" id="console" className="bg-[#2d2d2d] resize-none flex-grow overflow-y-auto outline-none rounded-md my-1 px-4 pb-8 pt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos sint porro praesentium omnis, voluptate nam ut sequi reprehenderit. Ipsam expedita similique ducimus, ab, nostrum veritatis magni vel voluptatum quasi, soluta atque aliquid nobis? Perferendis error sunt, sed consectetur vitae rerum tempora nostrum magnam, natus nobis enim beatae unde reiciendis!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos sint porro praesentium omnis, voluptate nam ut sequi reprehenderit. Ipsam expedita similique ducimus, ab, nostrum veritatis magni vel voluptatum quasi, soluta atque aliquid nobis? Perferendis error sunt, sed consectetur vitae rerum tempora nostrum magnam, natus nobis enim beatae unde reiciendis!
              </textarea>
            </div>
          </TabsContent>

          <TabsContent value="info" className="w-[30rem] m-1 p-2 rounded-md !bg-[#393939]">Change your password here.</TabsContent>
          <TabsContent value="config" className="w-[30rem] m-1 p-2 rounded-md !bg-[#393939]">Change your password here.</TabsContent>
          <TabsContent value="joystick" className="w-[30rem] m-1 p-2 rounded-md !bg-[#393939]">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}