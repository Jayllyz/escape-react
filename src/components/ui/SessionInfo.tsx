import { formatMinutes } from '../../lib/time';

interface SessionInfoProps {
  name: string;
  description: string;
  numberParticipants: number;
  place: {
    city: string;
  };
  duration: number;
  pricePerPerson: number;
  image: string;
  rating: number;
}

function SessionInfo({
  name,
  description,
  numberParticipants,
  place,
  duration,
  pricePerPerson,
  image,
  rating,
}: SessionInfoProps) {
  let starItems = '';

  for (let i = 0; i < rating; i++) {
    starItems += '⭐';
  }

  return (
    <div className="flex flex-row gap-2 p-4 h-[348px] shadow-xl rounded-lg" id={name}>
      <img className="w-[428px] object-cover" src={image} alt="Jason" width={800} height={400} />
      <div className="mx-8 my-4">
        <h1 className="text-2xl font-bold mb-4">{name}</h1>
        <p className="text-justify text-base mb-4">{description}</p>
        <div className="flex items-center gap-8">
          <div className="text-lg">{`Joueurs : ${numberParticipants}`}</div>
          <div className="text-lg">💸 {pricePerPerson}$/Personne</div>
          <div className="flex items-center gap-1">
            <img
              className="object-cover"
              src="https://img.icons8.com/?size=100&id=13778&format=png&color=000000"
              alt="Jason"
              width={32}
              height={32}
            />
            <h3 className="text-lg">{place.city}</h3>
          </div>
          <div>⏰ Durée : {formatMinutes(duration)}</div>
        </div>
        <div className="mt-6">{starItems}</div>
      </div>
    </div>
  );
}

export default SessionInfo;
