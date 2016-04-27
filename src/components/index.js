import ng from 'angular';

import Header from './header';
import Main from './main';
import EmptyWell from './emptywell';
import Row from './row';
import ToDoList from './todolist';
import ToDoComp from './todocomp';

export default ng.module('app.components', [Header, Main, EmptyWell, Row, ToDoList, ToDoComp]).name;
