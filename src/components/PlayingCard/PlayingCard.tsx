import './PlayingCard.scss';

interface PlayingCardProps {
    value: string;
    selected?: boolean;
    onClick: () => void;
}

const PlayingCard = ({ value, selected = false, onClick }: PlayingCardProps): JSX.Element => {
    return <div className={`playing-card${selected ? " selected" : ""}`} onClick={onClick}>
        <div className="playing-card__content">
            <h1>{value}</h1>
        </div>
    </div>;
};

export default PlayingCard;