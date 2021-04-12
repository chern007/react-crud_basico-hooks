import React, { useState } from 'react';

const Usuarios = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')
    const [lista, setLista] = useState([])
    const [error, setError] = useState('')
    const [fallo, setFallo] = useState(false)
    const [modoEdicion, setModoEdicion] = useState(false)


    const agregarUsuario = (e) => {
        e.preventDefault();

        if (!nombre.trim()) {
            setFallo(true);
            setError('Lo siento introduce un nombre.');
            return;
        }

        if (!edad.trim()) {
            setFallo(true);
            setError('Lo siento introduce una edad.');
            return;
        }


        const usuario = {
            nombre,
            edad
        };

        setLista([...lista, usuario]);
        setNombre('')
        setEdad('')
        setFallo(false)

    }

    const borrarUsuario = (nombre) => {

        const listaFiltrada = lista.filter((item) => { return (item.nombre != nombre); })

        console.log("-->");
        console.log(listaFiltrada);
        console.log("-->");

        setLista(listaFiltrada)

    }

    const primeraEdicion = (item) => {

        setNombre(item.nombre)
        setEdad(item.edad)
        setModoEdicion(true)

    }

    const editarListaUsuarios = (e) => {
        e.preventDefault();

        const listaActualizada = lista.map((item) => { return item.nombre === nombre ? { nombre, edad } : item });
        setLista(listaActualizada);
        setModoEdicion(false);
        setEdad('');
        setNombre('');

    }

    return (

        <div className="row">

            <div className="col6 m-2">
                <h2>Listado de Usuarios</h2>
                <hr />
                <ul className="list-group">
                    {
                        lista.map((l, index) => {
                            console.log(index);
                            return (
                                <li key={index} className="list-group-item">{l.nombre} - {l.edad}
                                    <button onClick={() => (primeraEdicion(l))} className="btn btn-sm btn-primary m-2 float right" >EDITAR</button>
                                    <button onClick={() => (borrarUsuario(l.nombre))} className="btn btn-danger btn-sm btn-primary float right" >BORRAR</button>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>

            <div className="col6 m-2">
                <h2>Formulario de usuarios</h2>
                <hr />
                {
                    fallo ? (
                        <span>{error}</span>
                    ) :
                        (
                            <span></span>
                        )
                }
                <form className="form-group">
                    <input onChange={(e) => { setNombre(e.target.value) }} className="form-control mb-2" type="text" placeholder="Introduce el nombre" value={nombre} />
                    <input onChange={(e) => { setEdad(e.target.value) }} className="form-control mb-2" type="text" placeholder="Introduce edad" value={edad} />
                    <button onClick={(e) => { modoEdicion ? editarListaUsuarios(e) : agregarUsuario(e) }} className="btn btn-info btn-block" type="submit">{modoEdicion ? "EDITAR" : "AGREGAR"}</button>

                </form>
            </div>





        </div>

    )
}

export default Usuarios