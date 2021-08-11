<template>
<div>
  <v-card>
    <v-card-title>
      Usuarios Registrados
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
  <div>
    {{usersApi}}
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
 import axios from 'axios'
 import Swal from 'sweetalert2'
export default {
    data () {
      return {
        usersApi:[],
        search: '',
        // usuario_modelo: { id: 1,name: 'Mishell', email: 'Mishell@gmail.com', sueldo: '1500' } ,
        headers: [
          { text: 'Nombre', align: 'start', sortable: false, value: 'id' },
          { text: 'Nombre', align: 'start', sortable: false, value: 'name' },
          { text: 'Email',align: 'start', sortable: false, value: 'email' },
          { text: 'Sueldo',align: 'start', sortable: false, value: 'sueldo' },
        ],
        desserts: [],// lo agrego desde el mounted, con el metodo setusertable
      }
    },
    methods:{
        setUserTable(){
            this.personas.forEach(persona => {
                 this.desserts.push(persona);
            });
            // console.log('soy funcion')
        },
         async getUser () {
           let apiRes;
           try {
              apiRes = await axios.get('http://localhost:3000/api/user',{
                headers: {
                  'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6IklzYWJlbEBnbWFpbC5jb20iLCJpYXQiOjE2Mjg3MTU5NzIsImV4cCI6MTYyODcyMzE3Mn0.PScV67FpT9QB307HEGo5201cU0e4Zx5ieKUNANwV-m4'
                }
             })
              this.usersApi=apiRes.data.users;
            } catch (err) {
              apiRes = err.response;
            
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: apiRes.data.msg + ", inicie sesion e intente nuevamente",

              })
            } 
           
         
      },
    },
    computed:{
      ...mapState('usuario',['personas']),
    },
    mounted(){
      // this.desserts.push(this.usuario_modelo);
      this.setUserTable();
      this.getUser();
    }
    
  }

</script>
