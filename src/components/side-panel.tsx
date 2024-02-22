import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FrameType, MeetSidePanelClient, MeetingInfo } from "@/meet";
import { useState } from "react";
import { Icons } from "./icons";

export interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  client?: MeetSidePanelClient;
}

export function SidePanel({ client, className, ...props }: SidePanelProps) {
  const [frameType, setFrameType] = useState<FrameType>();
  const [meetingInfo, setMeetingInfo] = useState<MeetingInfo>();
  return (
    <div className={cn("h-full flex flex-col p-10", className)} {...props}>
      <div className="flex w-full border-b mb-3 pb-3 items-end">
        <Icons.applicationLogo className="h-8" />
      </div>
      <div className="flex flex-col space-y-2 items-start">
        <div className="flex items-start space-x-2 flex-col">
          <div className="px-0 py-5 break-words">
            Frame Type: {JSON.stringify(frameType)}
          </div>
          <Button
            onClick={() => {
              const type = window.meet.addon.getFrameType();
              setFrameType(type);
            }}
          >
            Get Frame Type
          </Button>
        </div>
        <div className="flex items-start space-x-2 flex-col">
          <div className="px-0 py-5 break-words">
            Meeting Info: {JSON.stringify(meetingInfo)}
          </div>
          <Button
            onClick={async () => {
              const info = await client?.getMeetingInfo();
              setMeetingInfo(info);
            }}
          >
            Get Meeting Info
          </Button>
        </div>
      </div>
    </div>
  );
}
