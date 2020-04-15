import React, { useState, useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';

const EditarProducto = () => {

    // Nuevo state de producto
    const [producto, setProducto] = useState({
        nombre: '',
        precio: 0
    })

    // Producto a editar
    const productoEditar = useSelector(state => state.productos.productoEditar);
    const { nombre, precio } = producto;

    // Llenar el state automaticamente
    useEffect(() => {
        setProducto(productoEditar)
    }, [productoEditar]);

    // Leer los datos del formulario
    const onChangeFormulario = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const submitEditarProducto = e => {
        e.preventDefault();

        editarProductoAction();
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar producto
                        </h2>

                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio producto"
                                    name="precio"
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Guardar cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
}

export default EditarProducto;