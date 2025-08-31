const urlColor = import.meta.env.VITE_API_COLOR

export const leerColor = async () => {
    try{
        const respuesta = await fetch(urlColor)
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
};

