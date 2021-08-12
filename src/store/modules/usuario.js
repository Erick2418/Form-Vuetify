import axios from 'axios'
import Swal from 'sweetalert2'

const personas_generadas = [
  {
    id: 1,
    name: 'Sara',
    email: 'Leila@gmail.com',
    sueldo: '1500',
  },
  {
    id: 2,
    name: 'Mirka',
    email: 'Mirka@gmail.com',
    sueldo: '1500',
  },
  {
    id:3,
    name: 'Isabel',
    email: 'Isabel@gmail.com',
    sueldo: '1500',
  },
  {
    id: 4,
    name: 'Cristina',
    email: 'Cristina@gmail.com',
    sueldo: '1500',
  }
];

export default {
    namespaced:true,
      state: {
        personas:[],
        fecha_state:'12/12/2020',
      },
      mutations: {
        establecerFecha(state,payload){
            state.fecha_state=payload;
        },
        setPersonas(state,payload){
          state.personas=payload
        }

      },
      actions: {
        getUserApi: async function ({commit}) {
          let apiUsuario;
          try {
             apiUsuario = await axios.get('http://localhost:3000/api/user',{
               headers: {
                 'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6IklzYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2Mjg3MjI1OTQsImV4cCI6MTYyODcyOTc5NH0.JZJtNaoFWdTf6g0dAMyxDOZJcsJ_N4Y48QCGBwbZNpU'
               }
            }).then(({data}) => {
              console.log(data);
              commit('setPersonas',data);
            });
            //  this.usersApi=apiUsuario.data.users;
           }catch (err) {
             apiUsuario = err.response;
           
             Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: apiUsuario.data.msg + ", inicie sesion e intente nuevamente",

             })
           }        
        },
      },
      modules: {
    
      }
    }