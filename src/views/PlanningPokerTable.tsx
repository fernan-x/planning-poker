import { Avatar, AvatarBadge, Box, Button, Container, HStack, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardList from "../components/CardList/CardList";
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
            <HStack justify="center" spacing={5}>
                {
                    topTablePlayers.map(elem => (
                        <Box key={elem.id} >
                            <Tooltip label={elem.name}>
                                <Avatar name={elem.name} bg={ elem.hasVoted ? "green.500" : "gray.300"} />
                            </Tooltip>
                        </Box>
                    ))
                }
            </HStack>
        </Box>
        <Box display="flex" justifyContent="center" bg='purple.200' borderRadius='lg' p="10%">
            <Button colorScheme="purple" size="lg">
                Reveal Cards
            </Button>
        </Box>
        <Box p={5}>
            <HStack justify="center" spacing={5}>
                {
                    bottomTablePlayers.map(elem => (
                        <Avatar name={elem.name} key={elem.id} />
                    ))
                }
                {/* <Avatar name="Fabien Fernande Alves">
                    <AvatarBadge boxSize='1.25em' bg='green.500' borderColor='green.50' />
                </Avatar>
                <Avatar name="Fabien Fernande Alves">
                    <AvatarBadge boxSize='1.25em' borderColor='papayawhip' bg='tomato' />
                </Avatar> */}
            </HStack>
        </Box>

        <CardList />
    </Container>
};

export default PlanningPokerTable;