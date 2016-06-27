import angular from 'angular';
import tasksList from './components/tasksList.component.js';
import taskItem from './components/taskItem.component.js';
import tasksService from './services/tasks.service.js';

angular
    .module('tasksApp', [])
    .component('tasksList', tasksList)
    .component('taskItem', taskItem)
    .service('tasksService', tasksService);
