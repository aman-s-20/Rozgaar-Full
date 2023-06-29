const express = require("express");
const jwtAuth = require("../lib/jwtAuth");



const router = express.Router();
const jobApiController = require('../controllers/jobApiController');
// To add new job
router.post("/jobs", jwtAuth, jobApiController.addNewJob);

// to get all the jobs [pagination] [for recruiter personal and for everyone]
router.get("/jobs", jwtAuth, jobApiController.listJobs);

// to get info about a particular job
router.get("/jobs/:id", jwtAuth, jobApiController.getJobInfo);

// to update info of a particular job
router.put("/jobs/:id", jwtAuth, jobApiController.updateJobInfo);

// to delete a job
router.delete("/jobs/:id", jwtAuth, jobApiController.deleteJob);

// get user's personal details
router.get("/user", jwtAuth, jobApiController.getUserPersonalDetail);

// get user details from id
router.get("/user/:id", jwtAuth, jobApiController.getUserDetailById);

// update user details
router.put("/user", jwtAuth, jobApiController.updateUserDetail);

// apply for a job [todo: test: done]
router.post("/jobs/:id/applications", jwtAuth, jobApiController.applyForJob); 

// recruiter gets applications for a particular job [pagination] [todo: test: done]
router.get("/jobs/:id/applications", jwtAuth, jobApiController.applicationListForRecruiter);

// recruiter/applicant gets all his applications [pagination]
router.get("/applications", jwtAuth, jobApiController.getAllApplications);

// update status of application: [Applicant: Can cancel, Recruiter: Can do everything] [todo: test: done]
router.put("/applications/:id", jobApiController.updateJobStatus); 

// get a list of final applicants for current job : recruiter
// get a list of final applicants for all his jobs : recuiter
router.get("/applicants", jwtAuth, jobApiController.getListofFinalApplicant);

// to add or update a rating [todo: test]
router.put("/rating", jwtAuth, jobApiController.addOrUpdateRating);

// get personal rating
router.get("/rating", jwtAuth, jobApiController.getPersonalRating);



module.exports = router;
