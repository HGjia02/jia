'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/students',controller.students.index);
  router.get('/insertstudent',controller.students.insertStudent);
  router.post('/students',controller.students.create);
  router.post('/deletestudent',controller.students.destroy);
  
  router.get('/clazz',controller.clazz.index);
  router.get('/insertclazz',controller.clazz.insertClazz);
  router.post('/clazz', controller.clazz.create);
  router.post('/deleteclazz', controller.clazz.destroy);
  
  router.get('/', app.middleware.checklogin() ,controller.dl.index);
  router.get('/login', controller.dl.index);
  // router.get('/logins', controller.dl.dl);
  router.post('/login', controller.dl.login);
  router.get('/logout', app.middleware.checklogin(), controller.dl.logout);
  router.post("/zc",controller.zc.zc);
  router.get("/zhuce", controller.zc.echo);
  
};
