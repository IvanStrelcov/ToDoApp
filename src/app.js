import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import 'lodash';
import 'angular-ui-bootstrap';

import ng from 'angular';

import Components from './components';

ng.module('app', [Components, 'ui.bootstrap']);
