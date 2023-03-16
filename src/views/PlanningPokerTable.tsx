import { Avatar, AvatarBadge, Box, Button, Container, HStack, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardList from "../components/CardList/CardList";
import PlayersSeat from "../components/PlayersSeat/PlayersSeat";
import PlayingCard from "../components/PlayingCard/PlayingCard";
import { useChannel } from "../hooks/useChannel";
import { useMockedChannel } from "../hooks/useMockedChannel";
import { Player } from "../types/player";

interface PlanningPokerTableProps {
    user: Player;
}

const PlanningPokerTable = ({ user }: PlanningPokerTableProps): JSX.Element => {
    //const { players } = useChannel('table-1', user);
    const { players } = useMockedChannel('table-1', user);

    const [topTablePlayers, setTopTablePlayers] = useState<Player[]>([]);
    const [bottomTablePlayers, setBottomTablePlayers] = useState<Player[]>([]);

    useEffect(() => {
        if (players.length > 0) {
            const split = Math.round(players.length / 2);
            setTopTablePlayers(players.slice(0, split));
            setBottomTablePlayers(players.slice(split, players.length));
        }
    }, [players]);

    return <Container>
        <Box p={5}>
            <PlayersSeat players={topTablePlayers} />
        </Box>
        <Box display="flex" justifyContent="center" bg='purple.200' borderRadius='lg' p="10%">
            <Button colorScheme="purple" size="lg">
                Reveal Cards
            </Button>
        </Box>
        <Box p={5}>
            <PlayersSeat players={bottomTablePlayers} />
        </Box>

        <CardList user={user}/>
    </Container>
};

export default PlanningPokerTable;