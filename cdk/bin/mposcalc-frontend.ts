#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MposCalcStack } from '../lib/mposcalc-frontend-stack';
import { Tags } from '@aws-cdk/core';

const app = new cdk.App();

let prodMposCalcStack =  new MposCalcStack(app, 'MPOS-Calculator-PROD', {
  env: {
    account: '***REMOVED***',
    region: 'us-east-1'
  },
  domainName: ['mposcalculator.sight-sound.com'],
  deploymentSource:'../build/'
});

Tags.of(prodMposCalcStack).add("DR", "Primary");
Tags.of(prodMposCalcStack).add("Environment", "PROD");
