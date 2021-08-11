<template>
    <div class="pa-16" style="max-width:100vh;">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
            ></v-text-field>

            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
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
            <v-text-field
            v-model="telefono"
            :counter="10"
            :rules="telefonoRules"
            label="Telefono"
            prefix="$"
            required
            ></v-text-field>
            <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Elige una Zona"
            required
            ></v-select>

            <v-select
            v-model="select2"
            :items="items2"
            :rules="[v => !!v || 'Item is required']"
            label="Elige un sector"
            required
            ></v-select>

            <InputDate/>

            <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
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
            color="primary"
            @click="resetValidation"
            >
            Reset Validation
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
      name: '',
      nameRules: [
        v => !!v || 'Name is required',//esto es para que no sea undefine
        v => (v && v.length <= 15) || 'Name must be less than 15 characters',
        v=>  /[A-Za-z ]+/.test(v) ||  'Not number'
        // [A-Za-z ]+
      ],
      email: '',
      emailRules: [
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
      items: [
        'Zona 1',
        'Zona 2',
        'Zona 3',
        'Zona 4',
      ],
       select2: null,
      items2: [
        'Sector 1',
        'Sector 2',
        'Sector 3',
        'Sector 4',
      ],
      checkbox: false,
    }),
    mounted(){
      this.getUser();
    },
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
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      submit () {
          const usuarioNew= user(this.name,this.email,this.fecha_state,this.sueldo,this.telefono);
          console.log( usuarioNew);
      },
    },
     components: {
      InputDate,
    },
    
}
</script>

