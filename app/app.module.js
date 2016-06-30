import angular from 'angular';
import ngRoute from 'angular-route';
import routing from './app.routes.js';
import tasksList from './components/tasksList.component.js';
import taskItem from './components/taskItem.component.js';
import tasksAdd from './components/tasksAdd.component.js';
import tasksService from './services/tasks.service.js';
import style from './assets/style.scss';
require('font-awesome/css/font-awesome.css');

angular
    .module('tasksApp', ['ngRoute'])
    .config(routing)
    .component('tasksList', tasksList)
    .component('taskItem', taskItem)
    .component('tasksAdd', tasksAdd)
    .service('tasksService', tasksService);
