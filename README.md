# 🎨 Frontend - Paleta de Colores en React

Este proyecto es el **frontend** de la API de Paleta de Colores.  
Permite a los usuarios **crear, listar, editar, buscar y eliminar** colores mediante un formulario.  
Los datos se gestionan a través del backend desarrollado con **Express y MongoDB**.  

---

## **📌 Tecnologías Usadas**  

| **Tecnología**       | **Uso**                                         |  
|----------------------|-------------------------------------------------|  
| ⚛ React 19          | Biblioteca principal para la UI.                |  
| 🎨 React-Bootstrap  | Componentes y estilos responsivos.              |  
| 🟦 Bootstrap 5       | Estilos CSS base.                              |  
| 📝 SweetAlert2      | Ventanas modales y alertas de confirmación.     |  
| 📝 React-Hook-Form  | Manejo y validación de formularios.             |  
| 🔍 Fetch API / Axios| Comunicación con el backend.                     |  
| 🚀 Vite             | Entorno de desarrollo rápido.                   |  

---


## **🛠 Instalación y Ejecución**  

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/hernanortiz1/ejercicio6React.git
   cd ejercicio6
   ```

2. **Instala las dependencias**  
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto**  
   ```bash
   npm run dev
   ```

---
## 📋 Funcionalidades Principales  

- 🎨 **Agregar color** → mediante formulario con validaciones usando `react-hook-form`.  
- 🖼️ **Visualización de color** → muestra un cuadro con el color ingresado.  
- 📋 **Listado de colores** → obtenidos desde el backend.  
- 🗑️ **Eliminar color** → confirmación con SweetAlert2.  
- 🔍 **Botón Buscar** → permite buscar un color por nombre o código.  
- ⚠️ **Feedback visual de errores** con `react-bootstrap`.  

---

## **📂 Estructura del Proyecto**  
```
src/  
├── components/  
│   ├── FormularioColor.jsx        
│   ├── ListaTarjetas.jsx       
│   └── Tarjetas.jsx
├── helpers/
│   ├── queries.js           
├── App.jsx               # Componente principal  
└── main.jsx              # Punto de entrada  
```

---

## 👤 Autor

- **Hernán Ortiz**  
  [GitHub](https://github.com/hernanortiz1) | [LinkedIn](https://www.linkedin.com/in/hern%C3%A1n-ortiz/)  
  *Desarrollador*

