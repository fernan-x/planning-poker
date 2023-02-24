import { useEffect, useState } from "react";
import { generateUUID } from "../services/user";
import { Player } from "../types/player";
import { UseChannelResult } from "./useChannel";

export function useMockedChannel(channelName: string, user: Player): UseChannelResult {

    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        setPlayers([
            user,
            {
                id: generateUUID(),
                name: "Fabien FERNANDES ALVES",
                note: "0",
                hasVoted: false,
                hasReveal: false
            },
            {
                id: generateUUID(),
                name: "Alexandre LEMATRE",
                note: "5",
                hasVoted: true,
                hasReveal: false
            },
            {
                id: generateUUID(),
                name: "Anthony CARDINALE",
                note: "0",
                hasVoted: false,
                hasReveal: false
            },
            {
                id: generateUUID(),
                name: "Ludovic CARDINALE",
                note: "0",
                hasVoted: false,
                hasReveal: false
            }
        ])
    }, []);

    return {
        players
    }
}