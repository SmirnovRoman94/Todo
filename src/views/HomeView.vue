<template>
  <div class="home">
    <h1>Add to do </h1>
    <Form/>
    <div class="todo">
      <TodoList :messages="getMes"/>
    </div>
    <div class="controls">
      <button class="controls-item" @click="allMessages">Все Сообщения</button>
      <button class="controls-item" @click="ActiveMes">Активные</button>
      <button class="controls-item" @click="PerformanceMes">Выполненые</button>
    </div>
  </div>
</template>

<script>

import TodoList from '@/components/TodoList'
import Form from '@/components/Form'
export default {
  name: 'HomeView',
  components: {
    Form,
    TodoList
  },
  data(){
    return{
      active: false,
      performance: true
    }
  },
  computed: {
    getMes(){
       return this.$store.getters.getMessages 
    }
  },
  methods: {
    allMessages(){
      this.$store.dispatch('allMesssages')
    },
    ActiveMes(){
      this.$store.dispatch('ActiveMessages', this.active)
    },
    PerformanceMes(){
      this.$store.dispatch('performance', this.performance)
    }
  }
}
</script>

<style scoped>
.controls{

  padding-top: 1em;
  border-top: 1px solid #000;
  width: 30%;
  margin: 0 auto;
}
.controls-item{
  margin-left: 1em;
  border: 1px solid #000;
  padding: 5px 7px;
  background-color: #fff;
  height: fit-content;
  color: #000;
}
.controls-item:hover{
  background-color: rgb(111, 236, 142);
  color: #fff;
}
.todo{
  min-height: 300px;
}
</style>
