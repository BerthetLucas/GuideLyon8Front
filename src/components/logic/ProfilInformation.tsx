import { useState, useEffect } from "react";
import axios from "axios";


interface ProfilInformationProps {
    id:string, 
    name: string, 
    firstName: string
}

export const ProfilInformation = () => {

const [information, setInformation] = useState<ProfilInformationProps[]>([]);

useEffect(() => {
    axios.get
})

return(<>
    
    </>)

}