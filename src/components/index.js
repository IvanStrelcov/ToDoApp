import ng from 'angular';

import Header from './header';
import Main from './main';
import EmptyWell from './emptywell';
import CardList from './cardlist';
import Card from './card';
import Todo from './todo';

export default ng.module('app.components', [Header, Main, EmptyWell, CardList, Card, Todo]).name;
