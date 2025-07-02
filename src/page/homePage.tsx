import InputParcial from "../components/Input"
import ButtonParcial from "../components/ButtonParcial"
import type { Historial } from "../types/HistorialChat";

import { useState } from "react";



export default function HomePage(){
    const [data, setData]   = useState<Historial[]>([]);
    const [name, setName]   = useState<string>("");   
    const [error, setError] = useState<string | null>(null);


    const handleClick = async () => {
        try {
          setError(null);
          const res = await fetch(`http://localhost:8080/vantage/historico?identificador=${name}`);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const json = (await res.json()) as Historial | Historial[];
          setData(Array.isArray(json) ? json : [json]);
          console.log(data);
        } catch (err) {
          setError((err as Error).message);
        }
      };


    return(
        <div>

            <InputParcial value={name} onChange={setName}/>
            <ButtonParcial name="Traer historial"  color = 'success' onClick={handleClick} />
            {error && <p className="text-red-600 text-sm">{error}</p>}  
        </div>

        
    );
}