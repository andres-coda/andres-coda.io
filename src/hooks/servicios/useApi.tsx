import { useEffect, useState } from "react";
import useRetardo from "../../hooks/tiempo/useRetardo";

interface bodyData<T>{
    bodyData:T|null;
}

interface FetchData<T>{
    url?: string | null;
    bodyData?:bodyData<T> | null; 
    methodo?: string | null; 
    adapter?:(data: any) => any;
}

function useApi<T,R>(urlGet=null, adapterGet=null) {
    const [response, setResponse] = useState<R | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorFetch, setErrorFetch] = useState<string | null>(null);
    const [controlador, setControlador] = useState<boolean>(false);
    
    const token = localStorage.getItem('token');

    const retardoRecetRetardo = useRetardo(()=>{setResponse(null)}, 3000)

    useEffect(()=>{
        if (controlador){
            retardoRecetRetardo();
        }
    },[controlador])
    
    const fetchData= async ({
        url=null, 
        bodyData=null, 
        methodo=null, 
        adapter
    }:FetchData<T>) =>{
        setErrorFetch(null);
        setResponse(null);
        setLoading(true);

        const urlLocal = url || urlGet;
        const adapterLocal = adapter || adapterGet;
        if (!urlLocal) {
            throw new Error('No hay url en el pedido')
        }

        const controller = new AbortController();
        try{
            const res = await fetch(urlLocal,{
                method: methodo || 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && {'Authorization': `Bearer ${token}`}),
                },
                signal: controller.signal,
                ...(bodyData && { 'body': JSON.stringify(bodyData) })
            })

            if (!res.ok) {
                let errorMsg = 'La petición falló';
                try {
                    const errorData = await res.json(); 
                    errorMsg = errorData?.message || errorMsg; 
                } catch (jsonErr) {
                    console.error('No se pudo parsear la respuesta de error JSON:', jsonErr);
                }
                throw new Error(errorMsg);
            }            
            const result = await res.json();
            const adapterData = adapterLocal ? adapterLocal(result) : result;
            setResponse(adapterData);
            setControlador(true);
            setErrorFetch(null);
        } catch (err) {
            const error = err as Error;
            if (error.name === 'AbortError') {
                console.log('Petición abortada');
            } else { 
                setErrorFetch(`Error al intentar comunicarse con la base de datos: ${error.message}`);
                console.error(error);                
            }
        } finally {
            setLoading(false);
        }
    };

    return {fetchData, response, loading, errorFetch};

}

export default useApi;