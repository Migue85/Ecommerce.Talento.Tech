import { useState } from "react";
import { ProductForm } from './ProductForm.jsx'

export function NewProductContainer(){
    const [loading, setLoading] = useState(false);

    const handFormSubmit = async (datosDelFormulario) =>{
        setLoading(true);

        try{
            await new Promise(resolve=> setTimeout(resolve,2000));
            console.log("Producto guardado con éxito", datosDelFormulario);
        } catch(error){
            console.error("Hubo un error al guardar", error);
        } finally {
            setLoading(false);
        }
    };

    return(
        <div>
            <h2>Agregar nuevo producto</h2>
            <ProductForm
                alEnviar={handFormSubmit}
                loading={loading}
                    />
        </div>
    );
}