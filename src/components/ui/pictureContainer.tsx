
interface PictureContainerProps {
  url: string;
  className?: string;
}

export const PictureContainer = ({ url }: PictureContainerProps) => {
  if (url) {

    return ( 
      <div className="relative overflow-hidden h-96">
      <img src={url} className="absolute w-screen h-screen object-cover" />
    </div>
    
  )
   ;
  }

  return null;
};
