<template>
<section>
    <form class="form" @submit.prevent="addMessage">
        <input class="form-input" v-model="message.text" type="text" placeholder="Введите задачу"/>
        <button class="form-btn">Добавить задание</button>
    </form>
</section>
</template>

<script>
export default {
    data(){
        return{
            message:{
                id: null,
                text: '',
                active: false
            }
        }
    },
    methods: {
        addMessage(){
            this.$store.dispatch('addMessage', {
                id: Math.floor(Math.random()* 10000),
                text: this.message.text,
                active: false
            })
            //reset 
                this.message.text = ''
        }
    }
}
</script>

<style scoped>
.header{
    color: burlywood;
}
</style>