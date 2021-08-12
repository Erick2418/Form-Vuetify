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
      :items="items"
      :search="search"
    ></v-data-table>
  </v-card>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    data () {
      return {
        search: '',
        usuario_modelo: [{ id: 1,name: 'Mishell', email: 'Mishell@gmail.com', sueldo: '1500' } ],
        headers: [//columnas
          { text: 'id', align: 'start', sortable: false, value: 'id' },
          { text: 'firstname', align: 'start', sortable: false, value: 'firstname' },
          { text: 'fecha',align: 'start', sortable: false, value: 'fecha' },
          { text: 'correo',align: 'start', sortable: false, value: 'correo' },
          { text: 'telefono',align: 'start', sortable: false, value: 'telefono' },
          { text: 'sueldo',align: 'start', sortable: false, value: 'sueldo' },
        ],
        items:[],// lo agrego desde el mounted, con el metodo setusertable
      }
    },
    created(){
        this.setUserTable();
        // this.items=this.personas;
    },
    mounted:{
      
    },
    methods:{
        async setUserTable(){
          await this.getUserApi();
          this.items=this.personas;
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
