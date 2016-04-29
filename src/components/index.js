import ng from 'angular';

import Header from './header';
import Main from './main';
import AddBtn from './addBtn';
import CardList from './cardlist';
import Card from './card';
import Todo from './todo';
// import Modal from './modal';

export default ng.module('app.components', [Header, Main, AddBtn, CardList, Card, Todo]).name;
