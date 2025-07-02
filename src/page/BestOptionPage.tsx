import InputBestOption1 from "../components/InputBestOption1"
import InputBestOption2 from "../components/InputBestOption2"
import ButtonParcial from "../components/ButtonParcial"


import { useState } from "react";


export default function BestOptionPage(){
    const [name1, setName1]   = useState<string>("");   
    const [name2, setName2]   = useState<string>("");  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [formData, setFormData] = useState<String>("");

    


    const handleSubmit = async () => {
        setLoading(true);
        setError(null);
        setSuccess(null);
    
        const payload = {
            identificadorV1 : name1,
            identificadorV2 : name2
        };
    
        try {
          const res = await fetch("http://localhost:8080/vantage/bestOption", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
    
          if (!res.ok) {
            throw new Error(`Error ${res.status}: ${res.statusText}`);
          }
    
          const data = await res.json();
          setFormData(data)
          setSuccess(`Producto creado con ID ${data.contractID}`);
          
        } catch (err: unknown) {
          const message =
            err instanceof Error ? err.message : "Error inesperado 😢";
          setError(message);
        } finally {
          setLoading(false);
        }
      };


    return(
        <div>
            <InputBestOption1 value={name1} onChange={setName1}/>
            <InputBestOption2 value={name2} onChange={setName2}/>
            <ButtonParcial name={loading ? "Enviando..." : "comparar"}  color = 'success' onClick={handleSubmit} />
            <p>La mejor opcion es {formData}</p>
            {success && <p className="text-green-600 text-sm">{success}</p>}
            {error && <p className="text-red-600 text-sm">{error}</p>}    

        </div>

        
    );
}