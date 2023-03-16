import { Avatar, Box, HStack, Tooltip } from "@chakra-ui/react";
import { Player } from "../../types/player";

interface PlayersSeatListProps {
    players: Player[];
}

const PlayersSeat = ({ players }: PlayersSeatListProps): JSX.Element => {
    return <HStack justify="center" spacing={5}>
        {
            players.map(elem => (
                <Box key={elem.id} >
                    <Tooltip label={elem.name}>
                        <Avatar name={elem.name} bg={elem.hasVoted ? "green.500" : "gray.300"} />
                    </Tooltip>
                </Box>
            ))
        }
    </HStack>
};

export default PlayersSeat;