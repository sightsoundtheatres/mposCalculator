import { App, Tags } from 'aws-cdk-lib';
import { MposCalcStack } from '../lib/mposcalc-frontend-stack';

const app = new App();
const awsAccount = process.env.AWS_ACCOUNT as string;
const domainName = process.env.DNS_NAME as string;

let prodMposCalcStack = new MposCalcStack(app, 'MPOS-Calculator-PROD', {
  env: {
    account: awsAccount,
    region: 'us-east-1'
  },
  domainName: [domainName],
  deploymentSource:'../build/'
});

Tags.of(prodMposCalcStack).add('DR', 'Primary');
Tags.of(prodMposCalcStack).add('Environment', 'PROD');
