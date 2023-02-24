import { RealtimeChannel } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { Player } from "../types/player";

export interface UseChannelResult {
    players: Player[];
}

export function useChannel(channelName: string, user: Player): UseChannelResult {

    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        const loadedChannel = supabase.channel(channelName, {
            config: {
                presence: { key: user.name }
            }
        });

        loadedChannel
            .on('presence', { event: 'sync' }, () => presenceChanged())
            .subscribe(async (status) => {
                console.log(`Subscribe to channel : ${status}`);
                if (status === 'SUBSCRIBED') {
                    const status = await loadedChannel.track(user);
                    console.log(`Track channel : ${status}`);
                }
            });

        // Receive Presence updates
        const presenceChanged = () => {
            const newState = loadedChannel.presenceState()
            console.log('Presence changed : ');
            console.log(newState);
        }

        return () => {
            console.log(`Cleanup channel ${channelName}`);
            supabase.removeChannel(loadedChannel)
        };
    }, []);

    return {
        players
    }
}