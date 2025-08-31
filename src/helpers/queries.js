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

export const obtenerColorPorID = async (id) => {
    try{
        const respuesta = await fetch(urlColor+ `/${id}`)
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
};

export const crearColor = async (colorNuevo) => {
    try{
        const respuesta = await fetch(urlColor,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(colorNuevo)
        })
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
};

export const editarColor = async (colorEditado, id) => {
    try{
        const respuesta = await fetch(urlColor+ `/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(colorEditado)
        })
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
};

