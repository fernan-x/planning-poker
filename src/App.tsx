import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { generateUUID } from "./services/user";
import { Player } from "./types/player";
import PlanningPokerTable from "./views/PlanningPokerTable";

function App() {
  const [user, setUser] = useState<Player | null>(null);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    setUser({
      id: generateUUID(),
      name,
      note: "0",
      hasVoted: false,
      hasReveal: false
    })
  }

  return (
    <div className="App">

      {
        user ? <PlanningPokerTable user={user} /> :
          <form onSubmit={handleSubmit}>
            <Input placeholder='Username' value={name} onChange={e => setName(e.target.value)} />
            <Button onClick={handleSubmit}>Sumit</Button>
          </form>
      }
    </div>
  )
}

export default App
