<h1 align="center">
  <a href="https://github.com/aman-s-20/Rozgaar-Full">
    <img src="https://lh3.googleusercontent.com/njNb85g7YYDY2l2tOXtW2RI879x_VP10RZmM8Zt3lRY_b7h5XNpSk8YMrQS6NmbVfKSN13x2zW-rf1eJut6JLQAv__2HIgsBYAQzyAdDb2ERzlDJy5mlNl0VVr-35itoRjJ1BIIGJA=w2400" alt="Rozgaar" width="400" height="250">
  </a>
  <br>
  Rozgaar
</h1>

<div align="center">
   <strong>Rozgaar</strong> - Job portal! <br>
<br> <br>
</div>
<hr>

# Rozgaar

<table>
  <tr>
    <td>
      Rozgaar aims to be a one-stop <strong>Progressive Web App (PWA)</strong> that acts like a <strong>Job Portal</strong>. It helps connect the companies with the desired workforce.
  </td>
 </tr>
</table>


<!-- ## Resources 🔨

- [Rozgaar](https://Rozgaar.vercel.app/)
  
## Features :man_technologist:

#### Added
- The entire website is designed with accessibility at the forefront.
- We built a button that allows you to modify the size of the text. 
- Furthermore, we incorporated how to use contrast in the website, highlight links,an option to increase the cursor size, etc using the <strong>Userway</strong>     tool to make the website more accessible to differently abled persons based on their needs. 
- We made the website a progressive web app.
- Companies can register their job positions, and people with special needs can apply for those jobs.
- Companies can hire test candidates for accessibility testing of their products.
- Backend Connectivity using firebase.

#### Future Scope
- Expand our sphere of service for not only differently abled people, but also for acid attack victims, transgender people who unfortunately gets detached from the   main labor force because of the socio norms of our country.
- Voice Navigation, voice control and Google assistant
- Authentication using face ID login
- Add resume and disability certificate uploading for the user
- Payment Gateway Integration -->

## Tech-Stack
<a href="https://www.w3.org/TR/html5/" title="HTML5"><img src="https://github.com/get-icon/geticon/raw/master/icons/html-5.svg" alt="HTML5" width="31px" height="31px"></a>
<a href="https://www.w3.org/TR/CSS/" title="CSS3"><img src="https://github.com/get-icon/geticon/raw/master/icons/css-3.svg" alt="CSS3" width="31px" height="31px"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript"><img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" width="31px" height="31px"></a>
<a href="https://nodejs.org/en/" title="Node JS"><img src="https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png" alt="Node JS" width="31px" height="31px"></a>
<a href="https://nodemon.io/" title="Nodemon"><img src="https://iconape.com/wp-content/files/sk/82865/svg/nodemon.svg" alt="Nodemon" width="31px" height="31px"></a>
<a href="https://reactjs.org/" title="React"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="" width="31px" height="31px"></a>
<a href="https://expressjs.com/" title="Express"><img src="https://github.com/get-icon/geticon/raw/master/icons/express.svg" alt="" width="31px" height="31px"></a>

## Team Members:
- [Aman Singh](https://github.com/aman-s-20)
- [Anupam Singh](https://github.com/anupam577)

<!-- ## Description 	:mag_right:
#### UI design:
- The UI is compatible according to the user's need.
- There are options to change the font-size, clickable link formatting, button contrast, text spacing etc as an accessibility button.

#### Backend Connecivity:
- Backend Connectivity using firebase is implemented.
- Jobs are displayed to the user according to their preferences. 
- Recruiters can add job details and it is stored in the backend. -->


# clone the repository to your local machine
$ git clone `git clone https://github.com/<YOUR-GITHUB-USERNAME>/Rozgaar-full.git`

# navigate to the project's directory and install all the relevant dev-dependencies
$ cd server && npm intsall

# Make a .env file and include the details MONGO=<mongodb_connection_uri>

# Start application
$ node server.js

### For Job Seeker
1. signup
2. login
3. update profile.
4. apply job.
5. rate job.

### For Recruiter
1. signup
2. login
3. update profile.
4. create job.
5. update job.
6. delete job.
7. view application for particular job.
8. current Employees


##    Collections 

| Name             | DESCRIPTION                                                                     |
| :--------------  | :------------------------------------------------------------------:            |
| userauths        | it keeps user email, password and type                                          |
| recruiterinfos   | it keeps the recruiter detail like [name, contactno., contact]                  |
| jobapplicantinfos| it keeps the applicant detail like [name, education, skill ]                    |
| jobs             | it keeps the detail of all jobs like [title, jobtype, maxapplicant]             |
| applications     | it keeps the job appliaction status detail like [accepted, rejected, finished]  |



## 🔨 API Endpoints

`/api`
| REQUEST METHODS | ENDPOINTS              | DESCRIPTION                                     |
| :-------------- | :-------:              | ------------------------------------------:     |
| POST            | /jobs                  | To add new job                                  |
| GET             | /jobs                  | to get all the jobs                             |
| GET             | /jobs/:id              | to get info about a particular job              |
| PUT             | /jobs/:id              | to update info of a particular job              |
| DELETE          | /jobs/:id              | to delete a job                                 |
| POST            | /jobs/:id/applications | apply for a job                                 |
| GET             | /jobs/:id/applications | recruiter gets applications for a particular job|
| GET             | /user                  | get user's personal details                     |
| PUT             | /user                  | update user details                             |  
| GET             | /user/:id              | get user details from id                        |
| GET             | /applications          | recruiter/applicant gets all his applications   |
| PUT             | /applications/:id      | update status of application:                   |
| GET             | /applicants            | get a list of final applicants for current job  |
| PUT             | /rating                | to add or update a rating                       |
| GET             | /rating                | get personal rating                             |


`/auth`
| REQUEST METHODS | ENDPOINTS | DESCRIPTION                    |
| :-------------- | :-------: | ------------------:            |
| POST            | /signup   | signup for applicant/recruiter |
| POST            | /login    | login for applicant/recruiter  |


`/upload`
| REQUEST METHODS | ENDPOINTS | DESCRIPTION                               |
| :-------------- | :-------: | --------------------------------:         |
| POST            | /resume   | upload resume to folder by applicant      |
| POST            | /profile  | upload profile pic to folder by applicant |

`/host`
| REQUEST METHODS | ENDPOINTS       | DESCRIPTION                    |
| :-------------- | :-------:       | -----------------------------: |
| GET             | /resume/:file   | get applicant resume           |
| GET             | /profile/:file  | get applicant profile img      |



