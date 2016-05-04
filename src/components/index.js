import ng from 'angular';

import Header from './header';
import Main from './main';
import AddCard from './addCard';
import AddRow from './addRow';
import CardList from './cardlist';
import Card from './card';
import Todo from './todo';

export default ng.module('app.components', [Header, Main, AddCard, AddRow, CardList, Card, Todo]).name;
