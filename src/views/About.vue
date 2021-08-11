<template>
<div>
 <div class="about">
    <h1>{{titulo}}</h1>
    <!-- <h1>This is an about page</h1> -->
    <h2 v-for="(item, index) in tareasState" :key="index">
      Nombre:{{item.nombre}}, Apellido:{{item.apellido}}
      </h2>
    <h3>Contador: {{contador}}</h3>
   
  </div>
</div>
  
</template>

<script>

import {mapState} from "vuex";  
export default {
  
  computed:{
    ...mapState('tareas',['tareasState','contador']),
   ...mapState(['titulo']),

    

    //el primer tareas es el que esta en el store, el segundo es el que esta dentro de tareas, osea ya vendria a ser el modulo 
  }
  
}
</script>


