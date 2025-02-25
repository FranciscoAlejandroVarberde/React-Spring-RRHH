import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ListadoEmpleado() {

    //url de nuesta back para poder utilizar nuestros datos
    const urlBase = "http://localhost:8080/rh-app/empleados";

    // useState monitorea los cambios de nuestro arreglo
    const[empleados,setEmpleados] = useState([]);

    //este hook se manda a llamar cuando se carga nuesta pagina
    useEffect(() => {
        cargarEmpleados();
    }, []);

    // Para abrir este modulo tenemos que abrir otra terminal y porne 
    // npm i axios
    // debido a que esto es una peticion de tipo asincrono, debemos usar la palabra await para que el backend responda
    const cargarEmpleados = async () => {
        const resultado = await axios.get(urlBase);
        console.log("Resultado cargar Empleados");
        console.log(resultado.data);
        setEmpleados(resultado.data);
    }

    return (
        <div className='container'>
            <div className='container text-center' style={{ margin: "30px" }}>
                Sistema de Recursos Humanos</div>
            <table className="table table-striped table-hover align-middle">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Empleado</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Sueldo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
