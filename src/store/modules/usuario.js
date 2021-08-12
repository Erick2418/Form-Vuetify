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
const initial_data={
  "firstname":"Novale",
  "fecha": "12/12/12",
  "correo": "Novale@gmail.com",
  "telefono": "123456",
  "sueldo": "122"
}
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
        },
      
      
      },
      actions: {
        getUserApi: async function ({commit}) {
          let apiUsuario;
          try {
             apiUsuario = await axios.get('http://localhost:3000/api/user',{
               headers: {
                 'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6IklzYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2Mjg3ODA1ODEsImV4cCI6MTYyODc4Nzc4MX0.tIZZNsVwE4_2HaHdUUnZ-tRbaQZolmTQFoksGhUQz6c'
               }
            }).then(({data}) => {
              console.log(data.users);
              commit('setPersonas',data.users);
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
        postUserApi: async function ({state}) {
          // console.log();
          let apiUsuario;
          const header={
            'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6IklzYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2Mjg3ODA1ODEsImV4cCI6MTYyODc4Nzc4MX0.tIZZNsVwE4_2HaHdUUnZ-tRbaQZolmTQFoksGhUQz6c'
          }
          try {
             apiUsuario = await axios.post('http://localhost:3000/api/user',state.persona,
             {headers:header}
             )
            //  .then(({data}) => {
            //   console.log(data.users);
            //   // commit('setPersonas',data.users);
            // });
            //  this.usersApi=apiUsuario.data.users;
           }catch (err) {
             apiUsuario = err.response;
           
             Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text:  ", intente nuevamente",

             })
           }        
        },


      },
      modules: {
    
      }
    }