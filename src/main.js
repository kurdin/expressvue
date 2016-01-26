import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from "vue-resource"
import App from './App.vue'
import Main from './Main.vue'
import Users from './Users.vue'
import Todos from './Todos.vue'
Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()

router.map({
	"/":{ component:Main },
	"/todos":{ component:Todos },
	"/users":{ component:Users },
})

router.start(App, "#app")
