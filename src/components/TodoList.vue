<template>
   <section>
    <p class="counter">Задач всего: {{counter}}</p>
       <div class="message" v-for="item in messages" :key="item.id">
           <p :class="{'delete' : item.active}" @click="fullMes(item)">{{item.text}}</p>
           <button class="message-btn" @click="deleteMessage(item)" v-if="item.active==true">Clear</button>
       </div>
   </section>
</template>

<script>
export default {
    props: {
        messages: {
            type: Array,
            required: true
        }
    },
    data(){
        return{
            
        }
    },
    methods: {
        fullMes(item){
            item.active = true
        },
        deleteMessage(item){
            setTimeout(() => {
                this.$store.dispatch('deleteMessage', item)
            },500)
        }
    },
    computed: {
        counter(){
            return this.messages.length
        },
    }
}
</script>

<style  scoped>
.counter{
    font-size: 20px;
    font-style: italic;
    color: darkslategray;
    font-weight: 700;
}
.message{
    display: flex;
    justify-content: center;
    align-items: center;
}
.message-btn{
    margin-left: 1em;
    border: 1px solid #000;
    padding: 5px 7px;
    background-color: #fff;
    height: fit-content;
    color: #000;
}
.message-btn:hover{
    background-color: rgb(236, 111, 111);
    color: #fff;
}
.delete{
    text-decoration: line-through;
    color: rgb(61, 173, 61);
}
</style>