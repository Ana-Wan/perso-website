import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Internship from './components/Internship'
import Education from './components/Education'
import Contact from './components/Contact'

Vue.use(Router);

export var routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/internship',
    name: 'internship',
    component: Internship
  },
  {
    path: '/education',
    name: 'education',
    component: Education
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
];

export default new Router({
  mode: 'history',
  routes: routes,
})
