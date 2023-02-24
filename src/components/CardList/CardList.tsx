import { Wrap } from "@chakra-ui/react";
import PlayingCard from "../PlayingCard/PlayingCard";

const CardList = (): JSX.Element => {
    const cards = ["0", "1", "2", "3", "5", "8", "13", "21", "34", "☕️"]
    return <Wrap justify="center" mt={10}>
        {
            cards.map((elem, idx) => (
                <PlayingCard value={elem} key={idx} selected={ elem === "3"} />
            ))
        }
    </Wrap>;
}

export default CardList;