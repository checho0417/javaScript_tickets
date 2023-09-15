import React,{useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from '../../utils/APIInvoke'
import swal from 'sweetalert';
import Cliente from '../../bbdd.json'

const Login = () => {

  //para redireccionar un componente a otro
  const navigate = useNavigate();

  // definir el estado inicial de las variables
  const [cliente, setCliente] = useState({
    usuario: '',
    contraseña: ''
    });

  const{ usuario, contraseña } = cliente;

  const onChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value 
    })
  }

  useEffect(() =>{
    document.getElementById("usuario").focus();
  },[]);

  const iniciarSesion = async () => {
      if (usuario.length < 5) {
      const msg = "El campo de usuario debe tener almenos 6 digitos";
      swal({
        title: 'Error',
        text: msg,
        icon: 'error',
        buttons: {
          confirm: {
            text: 'OK',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      });
    }else if (contraseña.length < 6) {
      const msg = "La contraseña debe ser mayor a 5 caracteres";
      swal({
        title: 'Error',
        text: msg,
        icon: 'error',
        buttons: {
          confirm: {
            text: 'OK',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      });
    } else {

      const data = {
        usuario: Cliente.usuario,
        contraseña: Cliente.contraseña
      };

      const clienteEncontrado = Cliente.Cliente.find(cliente => cliente.usuario === usuario);
      
      if (clienteEncontrado) {
        // Realiza la llamada a la API aquí o trabaja con los datos del cliente encontrado
        console.log("Inicio de sesión exitoso");
        console.log("Datos del cliente:", clienteEncontrado);
        
            if(clienteEncontrado.contraseña === contraseña){
              const msg = "INICIO DE SESION CORRECTAMENTE";
              
            swal({
              title: 'Exito',
              text: msg,
              icon: 'success',
              buttons: {
                confirm: {
                  text: 'OK',
                  value: true,
                  visible: true,
                  className: 'btn btn-danger',
                  closeModal: true
                }
              }
            });
              navigate("/home")
            }else{
            const msg = "contraseña Incorrecta";
            swal({
              title: 'Error',
              text: msg,
              icon: 'error',
              buttons: {
                confirm: {
                  text: 'OK',
                  value: true,
                  visible: true,
                  className: 'btn btn-danger',
                  closeModal: true
                }
              }
            });
            }
        // Realiza las acciones necesarias después del inicio de sesión exitoso
      } else {
        const msg = "El usuario no existe \n Intenta Nuevamente";
        swal({
          title: 'Error',
          text: msg,
          icon: 'error',
          buttons: {
            confirm: {
              text: 'OK',
              value: true,
              visible: true,
              className: 'btn btn-danger',
              closeModal: true
            }
          }
        });
      }
    }
  }
  

  const onSubmit = (e) => {
    e.preventDefault();
    iniciarSesion();
  }

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}>
            <b>INICIA TU SESION</b>
          </Link>
        </div>
      </div>

      <div className="card">
        <div className="card-body login-card-body">

          <form onSubmit={onSubmit}>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Usuario"
                id="usuario"
                name="usuario"
                value={usuario}
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
                type="password" 
                className="form-control"
                placeholder="Contraseña"
                id="contraseña"
                name="contraseña"
                value={contraseña}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>

            <div className="col-15">
                <button type="submit" className="btn btn-primary btn-block">
                  Ingresar
                </button>
            </div>
            
          </form>
          <div className="social-auth-links text-center mb-3">
            <Link to={"CrearCuenta"} className="btn btn-block btn-danger">
               Crear Una Cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
