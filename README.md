# mposCalculator

React Calculator built for use with our Dynamics 365 Modern Point of Sale system (MPOS). Designed to fulfill custom requirements, and ease of use for employees. It is enabled to be embedded inside the application so the computers can run in Kiosk mode. 
# Hosting and Deployment

The application uses [AWS CDK](https://aws.amazon.com/cdk/) to deploy the application. It builds with a custom construct that creates a Cloudfront distribution, ACM certificates and S3 bucket for hosting.
## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

Built with [React.JS](https://reactjs.org/)