

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

      },
      modules: {
    
      }
    }