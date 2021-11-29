import * as cdk from '@aws-cdk/core';
import * as ssFE from '@sightsoundtheatres/cdk-sightsound-fe';

export interface MposCalcStackStackProps extends cdk.StackProps {
  /**
   * The domain name for the site to use
   */
  readonly domainName?: string[];
  /**
   * Location of FE code to deploy
   */
  readonly deploymentSource: string;
}

export class MposCalcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: MposCalcStackStackProps) {
    super(scope, id, props);

    new ssFE.FrontendConstruct
      (this, 'MposCalcStackStack', {
      domainNames: props.domainName,
      deploymentSource: props.deploymentSource
    });
  }
}
