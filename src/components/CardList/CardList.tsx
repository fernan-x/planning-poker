import { Wrap } from "@chakra-ui/react";
import { useState } from "react";
import { Player } from "../../types/player";
import PlayingCard from "../PlayingCard/PlayingCard";

interface CardListProps {
    user: Player;
}

const CardList = ({ user }: CardListProps): JSX.Element => {
    const cards = ["0", "1", "2", "3", "5", "8", "13", "21", "34", "☕️"]
    const [selectedCard, setSelectedCard] = useState("");

    const handleSelect = (elem: string) => {
        const value = selectedCard === elem ? "" : elem;
        setSelectedCard(value);
        user.note = value;
        user.hasVoted = value !== "";
    }

    return <Wrap justify="center" mt={10}>
        {
            cards.map((elem, idx) => (
                <PlayingCard value={elem} key={idx} selected={elem === selectedCard} onClick={() => handleSelect(elem)} />
            ))
        }
    </Wrap>;
}

export default CardList;