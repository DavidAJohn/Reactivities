# Reactivities

This application was built while following the Udemy course ["Complete Guide to Building an app with .NET Core and React"](https://www.udemy.com/course/complete-guide-to-building-an-app-with-net-core-and-react) by Neil Cummings.

Neil's repository for the course can be found here: https://github.com/TryCatchLearn/Reactivities

For a completely faithful version of the application, you should check Neil's repo, because I've made some changes.

The biggest change is to the method of publishing the application. Neil chose to build the React application and copy the files into a wwwroot folder inside the .NET application, thereby hosting the React application as static files with the .NET application around it set up to look to the index.html file inside the wwwroot folder. In the course, this is then hosted as one application on Heroku.

I chose instead to separate the applications, hosting the .NET API application on Heroku, but hosting the React application on Netlify. This meant making a change to the CORS policy and setting up automatic deployment on both systems. Netlify's deployment system is clever enough to allow you to specify a sub folder within the repository which contains changes to the client application, allowing changes to be made to the .NET application without triggering a full re-build and deployment of the React client app.

**Unfortunately, with Heroku beginning to charge for hosting and Postgres databases from 28th November 2022, I have decided to delete the .NET deployment, so the live site no longer functions.**
