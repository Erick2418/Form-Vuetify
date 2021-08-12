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
    <button @click="setUserTable" >PUSH ME</button>
    {{personas}}
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    data () {
      return {
        search: '',
        usuario_modelo: [{ id: 1,name: 'Mishell', email: 'Mishell@gmail.com', sueldo: '1500' } ],
        headers: [
          { text: 'Nombre', align: 'start', sortable: false, value: 'id' },
          { text: 'Nombre', align: 'start', sortable: false, value: 'name' },
          { text: 'Email',align: 'start', sortable: false, value: 'email' },
          { text: 'Sueldo',align: 'start', sortable: false, value: 'sueldo' },
        ],
        desserts:[],// lo agrego desde el mounted, con el metodo setusertable
      }
    },
    methods:{
        setUserTable(){
          this.getUserApi();
        },
       ...mapActions('usuario',['getUserApi']),
    },
    computed:{
      ...mapState('usuario',['personas']),
      
    },
    mounted(){
      // this.desserts.push(this.usuario_modelo);
      // this.setUserTable();
     
    }
    
  }

</script>
