import { App, Tags } from 'aws-cdk-lib';
import { MposCalcStack } from '../lib/mposcalc-frontend-stack';

const app = new App();

let prodMposCalcStack = new MposCalcStack(app, 'MPOS-Calculator-PROD', {
  env: {
    account: '***REMOVED***',
    region: 'us-east-1'
  },
  domainName: ['mposcalculator.sight-sound.com'],
  deploymentSource:'../build/'
});

Tags.of(prodMposCalcStack).add('DR', 'Primary');
Tags.of(prodMposCalcStack).add('Environment', 'PROD');
