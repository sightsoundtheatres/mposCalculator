import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ssFE from '@sightsoundtheatres/cdk-sightsound-fe';

export interface MposCalcStackStackProps extends StackProps {
  /**
   * The domain name for the site to use
   */
  readonly domainName?: string[];
  /**
   * Location of FE code to deploy
   */
  readonly deploymentSource: string;
}

export class MposCalcStack extends Stack {
  constructor(scope: Construct, id: string, props: MposCalcStackStackProps) {
    super(scope, id, props);

    new ssFE.FrontendConstruct(this, 'MposCalcStackStack', {
      domainNames: props.domainName,
      deploymentSource: props.deploymentSource,
      distributionLocalIdOverride: 'MposCalcStackStackSiteDistributionCFDistribution191F1A0A'
    });
  }
}
