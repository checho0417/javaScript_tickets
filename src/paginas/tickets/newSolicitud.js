import React, {useState, useEffect} from 'react';
import { Link, useNavigate} from "react-router-dom";
import APIInvoke from '../../utils/APIInvoke'
import swal from 'sweetalert';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';



const NewSolicitud = () => {

    const navigate = useNavigate();

    const[cliente, setCliente]= useState({
      usuario:'',
      contraseña:'',
      nombre:'',
      tipo_documento:'',
      num_documento:''
    }); 

    const{usuario,contraseña,nombre,tipo_documento,num_documento }= cliente;

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
        num_documento: cliente.num_documento
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
    <div className="wrapper">
    <Navbar></Navbar>
    <SidebarContainer></SidebarContainer>
    <div className="content-wrapper">
      <ContentHeader
        titulo={"Reclamos Clientes"}
        breadCrumb1={"Inicio"}
        breadCrumb2={"Solicitudes"}
        ruta1={"/Home"}
      />

      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Tickets</h3>
          </div>
          <div className="card-body">
          <div className="card">
        <div className="card-body login-card-body"  >
            <div className="login-box">
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
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NewSolicitud;
