const express = require('express')
var router = express.Router()

// Home page -----

router.get('/', (req, res) => {
	res.render('api/index')
})

// -----

// Data Routes -----

// Require controller modules.
var organizationController = require('../controllers/organizationController')

// POST request for creating organization.
router.post('/organization/create', organizationController.organization_create_post)

// GET request for one organization.
router.get('/organization/:id', organizationController.organization_get)

// POST request for one organization.
router.post('/organization/:id/delete', organizationController.organization_delete_post)

// GET request for all organizations.
router.get('/organizations', organizationController.organizations_get)

// GET request for all root organizations.
router.get('/organizations/root', organizationController.organizations_root_get)

// GET request for delete all organizations.
router.get('/organizations/delete/all', organizationController.organizations_delete_all_get)

// GET request for organization members.
router.get('/organization/:id/members', organizationController.organization_members_get)
// -----

var userController = require('../controllers/userController')

// POST request for creating user.
router.post('/user/create', userController.user_create_post)

// GET request for one user.
router.get('/user/:id', userController.user_get)

// GET request for all users.
router.get('/users', userController.users_get)

router.get('/users/delete/all', userController.users_delete_all_get)

router.post('/user/:id/delete', userController.user_delete_post)

// -----

const noticeController = require('../controllers/noticeController')

router.post('/notice/create', noticeController.notices_create_post)

//export this router to use in our index.
module.exports = router
