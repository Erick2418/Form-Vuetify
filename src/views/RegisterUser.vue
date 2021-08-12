<template>
    <div class="pa-16" style="max-width:100vh;">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="firstname"
            :counter="10"
            :rules="firstnameRules"
            label="Nombre"
            required
            ></v-text-field>

            <InputDate/>

            <v-text-field
            v-model="correo"
            :rules="correoRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="telefono"
            :counter="10"
            :rules="telefonoRules"
            label="Telefono"
            prefix="$"
            required
            ></v-text-field>

            <v-text-field
            v-model="sueldo"
            :counter="10"
            :rules="sueldoRules"
            label="Sueldo"
            prefix="$"
            type="number"
            required
            ></v-text-field>
           
                    

            <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Aceptar Terminos y Condiciones"
            required
            ></v-checkbox>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >
            Validate
            </v-btn>
            
            <v-btn
            color="error"
            class="mr-4"
            @click="reset"
            >
            Reset Form
            </v-btn>
           
            <v-btn
            color="warning"
            @click="submit"
            >
            submit
            </v-btn>
           
        </v-form>
    </div>
  
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import InputDate from './../components/InputDate.vue';
import {user} from './../models/user.model'

export default {
    data: () => ({
      valid: true,
      firstname: '',
      firstnameRules: [
        v => !!v || 'Name is required',//esto es para que no sea undefine
        v => (v && v.length <= 15) || 'Name must be less than 15 characters',
        v=>  /[A-Za-z ]+/.test(v) ||  'Not number'
        // [A-Za-z ]+
      ],
      correo: '',
      correoRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      sueldo: '',
      sueldoRules: [
        v => !!v || 'Sueldo is required',
        v => /[0-9]+/.test(v) || 'Sueldo must be valid',
      ],
      telefono: '',
      telefonoRules: [
        v => !!v || 'Telefono is required',
        v => /09+[0123456789]{1,9}/.test(v) || 'Telefono must be valid',
      ],
      select: null,
      checkbox: false,
    }),
    // mounted(){
    //   this.getUser();
    // },
    created(){
       
    },
    computed:{
   
      ...mapState('usuario',['fecha_state']),
    },
    methods: {
    
       ...mapMutations('usuario',['establecerFecha']),

      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
     
      submit () {
          const usuarioNew= user(this.firstname,this.correo,this.fecha_state,this.sueldo,this.telefono);
          console.log( usuarioNew);
      },
    },
     components: {
      InputDate,
    },
    
}
</script>

