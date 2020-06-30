'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')

Route.get('/books', 'BookController.index')
Route.post('/books', 'BookController.store')
Route.get('/books/create', 'BookController.create')
Route.get('/books/:id/edit', 'BookController.edit')
Route.get('/books/:id/delete', 'BookController.destroy').as('books.destroy')
Route.get('/books/:id', 'BookController.show')
Route.put('/books/:id', 'BookController.update')
