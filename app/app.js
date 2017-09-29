import { Router } from './router.js'
import { HomeController } from './components/home/home.controller.js'

let app = angular.module('App', ['ui.router'])

Router.configure(app);

app
  .controller('HomeController', HomeController)
