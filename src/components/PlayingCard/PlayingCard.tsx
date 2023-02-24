import './PlayingCard.scss';

interface PlayingCardProps {
    value: string;
    selected?: boolean;
}

const PlayingCard = ({ value, selected = false }: PlayingCardProps): JSX.Element => {
    return <div className={`playing-card${selected ? " selected" : ""}`}>
        <div className="playing-card__content">
            <h1>{value}</h1>
        </div>
    </div>;
};

export default PlayingCard;