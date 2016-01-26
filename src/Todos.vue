<template lang="jade">
	.container
		.row
			.col-xs-12
				.jumbotron
					h2 {{title}}
					h4 {{todos}}
					form(v-on:submit.prevent="setCount(todo)")
						.form-group
							label Todo Count
							input.form-control(v-model="todo")
						.form-group
							button.btn.btn-primary(type="submit") Submit
</template>

<script>
import io from "socket.io-client/socket.io.js"

	export default {
		socket:null,
		ready (){
			this.socket = io('http://localhost:3000');
			this.$watch("todo",(new_val, old_val) => {
				this.socket.emit("count", new_val)
				this.todos = new_val;
			} )
			this.socket.on('count', function(data){
				this.todos = data;
			}.bind(this));
		},
		data(){
			return {
				title:"Todos Route",
				todos:0,
				todo:0
			}
		}
	}
</script>