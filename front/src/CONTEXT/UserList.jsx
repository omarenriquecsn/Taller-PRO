import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

//contexto usario logeado global
const UserContex = createContext({
  userG: {},
  updateUser: () => {},
  addUser: () => {},
  exitLogin: () => {},
  appointments: () => {},
  addAppt: () => {},
  updateAppt: () => {},

});

// componente provider de usuario global
const UsersProvider = ({ children }) => {
  const storeUser = () => {
    const store = localStorage.getItem("userG");

    return store
      ? JSON.parse(store)
      : {
          Login: false,
          user: {},
        };
  };

  const [userG, setUser] = useState(storeUser);
  const [appointments, setAppointments] = useState([])

  // Agregar al local store la informacion del usuario logueado
  useEffect(() => {
    localStorage.setItem("userG", JSON.stringify(userG));
  }, [userG]);

  useEffect(() => {
    axios.get(`http://localhost:3000/appointments/${userG.user.id}`).then((res)=>{
      setAppointments(res.data)
  })
  }, [userG]);


  //Agregar usuario logeado al state
  const addUser = (user) => {
    localStorage.setItem("userG", JSON.stringify(userG));
    setUser(user);
  };

  //Actualizar email
  const updateUser = (email) => {
    const userUdate = { ...userG };
    userUdate.email = email;
    setUser(userUdate);
  };

  //cerrar sesion

  const exitLogin = () => {
    const exit = { ...userG };
    (exit.login = false), (exit.user = {});
    setUser(exit);
  };
const addAppt = (turno) => {
  turno.status = "active"
  turno.id = appointments.length +1
  console.log(turno)
  setAppointments([...appointments, turno])
}

const updateAppt = (id) => {
  const askConfirm = confirm("Esta Seguro que desea cancelar este turno")
  if(askConfirm){

    axios
    .put(`http://localhost:3000/appointments/cancel/${id}`).then(()=>{
      const updateT = appointments.map((appt)=>{
        
        if(appt.id === id){
          appt.status = "cancelled"
          return appt
        }
        return appt
      });
      setAppointments([...updateT])
    }).catch((error)=>{
      alert("Ocurrio un error al cancelar este turno")
      console.log("Error:", error)
    })
  }

}

  const valor = {
    userG,
    appointments,
    addUser,
    updateUser,
    exitLogin,
    addAppt,
    updateAppt,
  };

  return <UserContex.Provider value={valor}>{children}</UserContex.Provider>;
};

export { UserContex, UsersProvider };

UsersProvider.propTypes = {
  children: PropTypes.node,
};
