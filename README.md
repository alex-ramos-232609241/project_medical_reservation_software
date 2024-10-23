# PatientsView

Este componente de React gestiona la visualización, filtrado, ordenamiento y paginación de una lista de pacientes. Utiliza Redux para manejar los datos y Material UI (MUI) para el diseño visual. También se integra con una API privada mediante `useAxiosPrivate`.

## Requisitos

- Node.js (versión 12 o superior)
- React (versión 17 o superior)
- Material UI (MUI)
- Redux Toolkit

## Instalación

1. Clona este repositorio.
2. Instala las dependencias ejecutando:
   ```bash
   npm install
   ```
3. Asegúrate de tener configurado el backend que proporciona la API de pacientes.

## Uso

1. Inicia la aplicación:
   ```bash
   npm start
   ```
2. Navega a `http://localhost:3000` en tu navegador para visualizar la lista de pacientes.

## Componentes Principales

- **PatientsView**: El componente principal que renderiza la lista de pacientes.
- **PatientsTableHead**: Renderiza la cabecera de la tabla con las opciones de ordenamiento.
- **PatientsTableRow**: Renderiza cada fila de la tabla.
- **PatientsTableToolbar**: Barra de herramientas para filtrar y añadir pacientes.
- **TableEmptyRows**: Renderiza filas vacías cuando faltan datos.
- **TableNoData**: Muestra un mensaje cuando no hay datos disponibles para mostrar.

## Funcionalidades

- **Filtrado por nombre**: Permite filtrar los pacientes en la tabla según su nombre.
- **Ordenamiento**: Se puede ordenar la lista por diferentes columnas.
- **Paginación**: Controla cuántos pacientes se muestran por página.
- **Añadir nuevos pacientes**: Permite la creación de nuevos pacientes.

## Hooks Utilizados

- **useAppDispatch**: Utilizado para despachar acciones de Redux.
- **useAxiosPrivate**: Hook personalizado para manejar solicitudes HTTP autenticadas con Axios.

