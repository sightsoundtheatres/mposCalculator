import { App, Tags } from 'aws-cdk-lib';
import { MposCalcStack } from '../lib/mposcalc-frontend-stack';

const app = new App();

let prodMposCalcStack = new MposCalcStack(app, 'MPOS-Calculator-PROD', {
  env: {
    account: '${{ secrets.AWS_ACCOUNT }}',
    region: 'us-east-1'
  },
  domainName: ['${{ secrets.DNS_NAME }}'],
  deploymentSource:'../build/'
});

Tags.of(prodMposCalcStack).add('DR', 'Primary');
Tags.of(prodMposCalcStack).add('Environment', 'PROD');
