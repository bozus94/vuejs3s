<template>
  <div class="container">
    <form @beforeinput="addingOn">
      <label>Name
        <input type="text" v-model="teacher.name">
      </label>
      <label>Surname
        <input type="text" v-model="teacher.surname">
      </label>
      <label>Dni
        <input type="text" v-model="teacher.dni">
      </label>
      <label>Materias
        <input type="text" v-model="subj">
        <button @click.prevent="addSubject">Agregar</button>
        <ul>
          <li v-for="(subject, index) in teacher.subjects" :key="index">{{ subject }}</li>
        </ul>
      </label>
      Documento
      <label class="switch">
      <input type="checkbox" v-model="teacher.document">
      <span class="slider round"></span>
    </label>
      <button v-if="!editing" @click.prevent="addTeacher">Enviar</button>
      <button v-else @click.prevent="SaveTeacher()">Guardar</button>
    </form>
    <table>
      <thead>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>DNI</th>
        <th>Materias</th>
        <th>Documento</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        <tr v-if="adding">
          <td>{{ teacher.name }}</td>
          <td>{{ teacher.surname }}</td>
          <td>{{ teacher.dni }}</td>
          <td>
            <ul><li v-for="subject in teacher.subjects" :key="subject">{{ subject }}</li></ul>
          </td>
          <td>{{ teacher.document ? 'enviado' : 'no enviado' }}</td>
          <td>
            <button @click="addingOf()">Cancelar</button>
          </td>
        </tr>
        <tr v-for="(te, index) in teachers" :key="index">
          <td>{{ te.name }}</td>
          <td>{{ te.surname }}</td>
          <td>{{ te.dni }}</td>
          <td>
            <ul><li v-for="subject in te.subjects" :key="subject">{{ subject }}</li></ul>
          </td>
          <td>{{ te.document ? 'enviado' : 'no enviado' }}</td>
          <td>
            <button @click="deleteTeacher(index)">Eliminar</button>
            <button @click="updateTeacher(index)">Editar</button>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';

interface ITeacher{
  name: string;
  surname: string;
  dni: string;
  subjects: Array<string>;
  document: boolean;
}

let teacher: Ref<ITeacher> = ref({
  name: '',
  surname: '',
  dni: '',
  subjects: [],
  document: false
});

let subj: Ref<string> = ref('');
let editing: Ref<boolean> = ref(false);
let adding: Ref<boolean> = ref(false);

let teachers: Ref<Array<ITeacher>> = ref([]);

const addSubject = () => {
  teacher.value.subjects.push(subj.value);
  subj.value = ''
}

const addTeacher = () => {
  teachers.value.push({
    name: teacher.value.name,
    surname: teacher.value.surname,
    dni: teacher.value.dni,
    subjects: teacher.value.subjects,
    document: teacher.value.document,
  })

  clearTeacher();
  adding.value = false;
}

const updateTeacher = (index: number) => {
  editing.value = true;
  const toedit = teachers.value.slice(index, 1)[0];
  teacher.value = toedit;
}

const SaveTeacher = () => {
  const edit = {
    name: teacher.value.name,
    surname: teacher.value.surname,
    dni: teacher.value.dni,
    subjects: teacher.value.subjects,
    document: teacher.value.document,
  };

  teachers.value.map(t => t.dni !== edit.dni ? t : edit);
  clearTeacher();
  editing.value = false;
}

const clearTeacher = () => {
  teacher.value.dni = '';
  teacher.value.name = '';
  teacher.value.surname = '';
  teacher.value.subjects = [];
  teacher.value.document = false;
  subj.value = ''
}

const deleteTeacher = (index: number) => {
  teachers.value.splice(index, 1);
  console.log('teacher anulado');
}

const addingOn = () => {
  if (!editing.value) {
    adding.value = true;
  }
}

const addingOf = () => {
  clearTeacher()
  adding.value = false;
}

</script>

<style scope>
*{
  box-sizing: border-box;
  font-size: 16px;
}
body{
  padding: 20px;
}
form{
  display:flex;
  flex-direction: column;
  gap: 15px;
}
form > button{
  width: 25%;
}
label{
  font-size: 1.10rem;
}

.container{
  padding: 15px;
  display:flex;
  -ms-flex-align: center;
  flex-wrap: wrap;
  gap: 5rem;
}
</style>
