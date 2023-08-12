// import EllipsisText from 'react-ellipsis-text';
// import { dateFormatter } from 'utils/dateFormatter';
// import { convertTimeFormat } from 'utils/converTimeFormat';
import defaultPhoto from '../../images/NoImage.jpg';
import {
  CardCategory,
  CardDate,
  CardDescription,
  CardImg,
  CardInfo,
  CardItem,
  CardLinkWrap,
  CardLocation,
  CardMoreInfoLink,
  CardPriority,
  CardThumb,
  CardTitle,
  InfoThumb,
  PriorityWrapper,
  TimeDetails,
} from './Card.styled';

const Card = ({ card }) => {
  const {
    id,
    title,
    description,
    date,
    // time,
    location,
    category,
    picture = defaultPhoto,
    priority,
  } = card;
  //   const formattedDate = dateFormatter(date);

  return (
    <CardItem>
      <CardThumb>
        <PriorityWrapper>
          <CardCategory>{category.label}</CardCategory>
          <CardPriority $priority={priority.value}>
            {priority.label}
          </CardPriority>
        </PriorityWrapper>
        <CardImg src={picture ? picture : defaultPhoto} alt={category.label} />
      </CardThumb>

      <InfoThumb className="infoThumb">
        <TimeDetails>
          <CardDate>
            {/* {formattedDate.split('.')[0]}.{formattedDate.split('.')[1]}. */}
            {/* {formattedDate.slice(-2)} at {convertTimeFormat(time).split(' ')[0]} */}
          </CardDate>
          <CardLocation>{location}</CardLocation>
        </TimeDetails>

        <CardInfo>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardInfo>
        <CardLinkWrap>
          <CardMoreInfoLink
            $disabled={Date.parse(date) <= Date.now()}
            //   state={{ from: linkLocation }}
            to={`event/${id}`}
          >
            More info
          </CardMoreInfoLink>
        </CardLinkWrap>
      </InfoThumb>
    </CardItem>
  );
};

export default Card;
