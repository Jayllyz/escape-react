interface SessionInfoProps {
  title: string;
  description: string;
  image: string;
  imageSide: 'left' | 'right';
  minPlayers: number;
  maxPlayers: number;
}

function SessionInfo({ title, description, image, imageSide, minPlayers, maxPlayers }: SessionInfoProps) {
  return (
    <div className={`flex flex-row gap-2 ${imageSide === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
      <img src={image} alt="Jason" width={800} height={400} />
      <div className="mx-8 my-4">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div className="text-justify text-lg mb-4">{description}</div>
        <div className="text-lg">{`Joueurs : ${minPlayers} à ${maxPlayers}`}</div>
      </div>
    </div>
  );
}

export default SessionInfo;
