import { SidePanel } from "@/components/side-panel";
import { useCallback, useEffect, useState } from "react";
import { MeetSidePanelClient } from "./meet";

function App() {
  const [client, setClient] = useState<MeetSidePanelClient>();
  const getSidePanelClient = useCallback(async function () {
    const session = await window.meet.addon.createAddonSession({
      cloudProjectNumber: "409015876408",
    });
    const result = await session.createSidePanelClient();
    setClient(result);
    console.log("Successfully constructed side panel client.");
  }, []);
  useEffect(() => {
    getSidePanelClient();
  }, [getSidePanelClient]);
  return (
    <div className="p-10">
      <SidePanel client={client} />
    </div>
  );
}

export default App;
