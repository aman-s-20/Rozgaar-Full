const express = require("express");
const jwtAuth = require("../lib/jwtAuth");



const router = express.Router();
const jobApiController = require('../controllers/jobApiController');
// To add new job
router.post("/jobs", jwtAuth,(req,res)=> jobApiController.addNewJob(req,res));

// to get all the jobs [pagination] [for recruiter personal and for everyone]
router.get("/jobs", jwtAuth,(req,res)=> jobApiController.listJobs(req,res));

// to get info about a particular job
router.get("/jobs/:id", jwtAuth,(req,res)=> jobApiController.getJobInfo(req,res));

// to update info of a particular job
router.put("/jobs/:id", jwtAuth,(req,res)=> jobApiController.updateJobInfo(req,res));

// to delete a job
router.delete("/jobs/:id", jwtAuth,(req,res)=> jobApiController.deleteJob(req,res));

// get user's personal details
router.get("/user", jwtAuth,(req,res)=> jobApiController.getUserPersonalDetail(req,res));

// get user details from id
router.get("/user/:id", jwtAuth,(req,res)=> jobApiController.getUserDetailById(req,res));

// update user details
router.put("/user", jwtAuth,(req,res)=> jobApiController.updateUserDetail(req,res));

// apply for a job [todo: test: done]
router.post("/jobs/:id/applications", jwtAuth,(req,res)=> jobApiController.applyForJob(req,res)); 

// recruiter gets applications for a particular job [pagination] [todo: test: done]
router.get("/jobs/:id/applications", jwtAuth,(req,res)=> jobApiController.applicationListForRecruiter(req,res));

// recruiter/applicant gets all his applications [pagination]
router.get("/applications", jwtAuth,(req,res)=> jobApiController.getAllApplications(req,res));

// update status of application: [Applicant: Can cancel, Recruiter: Can do everything] [todo: test: done]
router.put("/applications/:id",(req,res)=> jobApiController.updateJobStatus(req,res));

// get a list of final applicants for current job : recruiter
// get a list of final applicants for all his jobs : recuiter
router.get("/applicants", jwtAuth,(req,res)=> jobApiController.getListofFinalApplicant(req,res));

// to add or update a rating [todo: test]
router.put("/rating", jwtAuth,(req,res)=> jobApiController.addOrUpdateRating(req,res));

// get personal rating
router.get("/rating", jwtAuth,(req,res)=> jobApiController.getPersonalRating(req,res));



module.exports = router;
