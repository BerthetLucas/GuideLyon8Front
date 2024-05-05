interface CardPictureProps {
    url: string, 
    alter: string
}

export const CardPicture = ({url, alter}: CardPictureProps) => {
    return (
        <div className="h-56 overflow-hidden flex justify-center items-center">
          <img
            className="object-cover"
            src={url}
            alt={alter}
          />
        </div>
    
    );
  };