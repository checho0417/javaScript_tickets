import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import { Link } from "react-router-dom"; // Importa Link desde React Router
import bbdd from '../../bbdd.json';

const TicketsSolicitudes = () => {
  // Declarar un estado para almacenar los datos de los tickets
  const [tickets, setTickets] = useState([]);
  // Declarar un estado para controlar si se muestra el formulario de respuesta
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    // Extraer los datos de "Tickets" del archivo JSON
    const ticketsData = bbdd.Tickets || [];

    // Realizar una transformación para establecer "null" en lugar de cadenas vacías
    const transformedTickets = ticketsData.map((ticket) => {
      return {
        ...ticket,
        mensaje_empleado: ticket.mensaje_empleado || null,
      };
    });

    setTickets(transformedTickets);
  }, []);

  // Función para manejar el clic en el botón "Responder"
  const handleResponderClick = () => {
    setMostrarFormulario(true);
  };

  // Función para manejar el envío del formulario de respuesta
  const handleSubmitRespuesta = (e) => {
    e.preventDefault();
    // Aquí puedes enviar la respuesta al servidor o realizar otras acciones
    // Luego, puedes ocultar el formulario estableciendo mostrarFormulario en false
    setMostrarFormulario(false);
  };

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
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: 10 }}>#</th>
                    <th>Empresa</th>
                    <th>Solicitud Cliente</th>
                    <th>Mensaje Empleado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket, index) => (
                    <tr key={index}>
                      <td>{ticket.id}</td>
                      <td>{ticket.empresa}</td>
                      <td>{ticket.solicitud_cliente}</td>
                      <td>{ticket.mensaje_empleado}</td>
                      <td>
                        {ticket.mensaje_empleado === null ? (
                          <Link
                            to={`/Respuesta/${ticket.id}`} // Configura la ruta de navegación
                            className="btn btn-sm btn-primary"
                            onClick={handleResponderClick}
                          >
                            Responder
                          </Link>
                        ) : (
                          "Solucionado"
                        )}
                        {mostrarFormulario && (
                          <form onSubmit={handleSubmitRespuesta}>
                            <textarea
                              placeholder="Ingrese la respuesta..."
                              // Agrega los campos del formulario según tus necesidades
                            ></textarea>
                            <button type="submit" className="btn btn-sm btn-success">
                              Enviar Respuesta
                            </button>
                          </form>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TicketsSolicitudes;
