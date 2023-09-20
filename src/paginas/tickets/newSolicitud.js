import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";

const NewSolicitud = () => {
  const navigate = useNavigate();

  const [tickets, setTickets] = useState({
    empresa: "",
    solicitud_cliente: "",
  });

  const { empresa, solicitud_cliente } = tickets;

  const onChange = (e) => {
    setTickets({
      ...tickets,
      [e.target.name]: e.target.value,
    });
  };

  const crearSolicitud = async () => {
    const data = {
      empresa: tickets.empresa,
      solicitud_cliente: tickets.solicitud_cliente,
    };
    const response = await APIInvoke.invokePOST(`/Tickets`, data);
    navigate("/Tickets");
    console.log(response);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearSolicitud();
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Nueva Solicitud"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Nueva Solicitud"}
          ruta1={"/Home"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Tickets</h3>
            </div>
            <div className="card-body">
              <div className="card">
                <div className="card-body login-card-body">
                  <div className="login-box">
                    <form onSubmit={onSubmit}>
                    <h5>Empresa</h5>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Digita El Nombre De La Empresa"
                          id="empresa"
                          name="empresa"
                          values={empresa}
                          onChange={onChange}
                          required
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-envelope" />
                          </div>
                        </div>
                      </div>

                      <h5>Descipcion Del Problema</h5>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Solicitud"
                          id="solicitud_cliente"
                          name="solicitud_cliente"
                          values={solicitud_cliente}
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
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          REGISTRAR RECLAMO
                        </button>
                      </div>
                    </form>
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
