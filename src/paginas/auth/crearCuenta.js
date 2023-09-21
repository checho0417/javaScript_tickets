import React, {useState, useEffect} from 'react';
import { Link, useNavigate} from "react-router-dom";
import APIInvoke from '../../utils/APIInvoke'
import swal from 'sweetalert';



const CrearCuenta = () => {

    const navigate = useNavigate();

    const[cliente, setCliente]= useState({
      usuario:'',
      contraseña:'',
      nombre:'',
      tipo_documento:'',
      num_documento:'',
      rol:'',
    }); 

    const{usuario,contraseña,nombre,tipo_documento,num_documento,rol}= cliente;

    const onChange = (e) => {
        setCliente({
          ...cliente,
          [e.target.name]: e.target.value
      })
    }

    useEffect(() =>{
        document.getElementById("usuario").focus();
      },[])

    const crearCuenta = async () =>{

      const  data={
        usuario: cliente.usuario,
        contraseña: cliente.contraseña,
        nombre: cliente.nombre,
        tipo_documento: cliente.tipo_documento,
        num_documento: cliente.num_documento,
        rol: cliente.rol
      }
      const response = await APIInvoke.invokePOST(`/Cliente`, data);
      navigate("/")
      console.log (response)
    


    } 
  
    const onSubmit = (e) => {
      e.preventDefault();
      crearCuenta();
    }


  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}>
            <b>REGISTRARSE</b>
          </Link>
        </div>

      <div className="card">
        <div className="card-body login-card-body">
          <form onSubmit={onSubmit}>

            <div className="input-group mb-3">
              <input type="text"
                className="form-control"
                placeholder="Usuario"
                id="usuario"
                name="usuario"
                values={usuario}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input type="password"
                className="form-control"
                placeholder="Contraseña"
                id="contraseña"
                name="contraseña"
                values={contraseña}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input type="text"
                className="form-control"
                placeholder="Nombre"
                id="nombre"
                name="nombre"
                values={nombre}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input type="text"
                className="form-control"
                placeholder="Tipo Documento"
                id="tipo_documento"
                name="tipo_documento"
                values={tipo_documento}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            
            <div className="input-group mb-3">
              <input 
                type="number"
                className="form-control"
                placeholder="Numero Documento"
                name="num_documento"
                id="num_documento"
                values={num_documento}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input type="text"
                className="form-control"
                placeholder="rol"
                id="rol"
                name="rol"
                values={rol}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>

              <div className="col-15">
                  <button type="submit" className="btn btn-primary btn-block">
                    REGISTRARME
                  </button>
              </div>
          </form>
          <div className="social-auth-links text-center mb-3">
            <Link to={"/"} className="btn btn-block btn-danger">
               INICIAR SESION
            </Link>
          </div>
      </div>
    </div>
        </div>
      </div>
  );
};

export default CrearCuenta;
