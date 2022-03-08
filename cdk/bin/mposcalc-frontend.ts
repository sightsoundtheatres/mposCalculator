import { App, Tags } from 'aws-cdk-lib';
import { MposCalcStack } from '../lib/mposcalc-frontend-stack';

const app = new App();
const AWS_ACCOUNT = process.env.AWS_ACCOUNT as string;
const DNS_NAME = process.env.DNS_NAME as string;

let prodMposCalcStack = new MposCalcStack(app, 'MPOS-Calculator-PROD', {
  env: {
    account: AWS_ACCOUNT,
    region: 'us-east-1'
  },
  domainName: [DNS_NAME],
  deploymentSource:'../build/'
});

Tags.of(prodMposCalcStack).add('DR', 'Primary');
Tags.of(prodMposCalcStack).add('Environment', 'PROD');
