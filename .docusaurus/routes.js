
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','0d3'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','038'),
    exact: true
  },
  {
    path: '/blog/tags/serverlessdebugger',
    component: ComponentCreator('/blog/tags/serverlessdebugger','08e'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','48d'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','206'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/configuration/nodejs',
        component: ComponentCreator('/configuration/nodejs','b86'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/configuration/python',
        component: ComponentCreator('/configuration/python','8f8'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/extensions/vs-code',
        component: ComponentCreator('/extensions/vs-code','85d'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/self-hosted-broker/aws-cdk',
        component: ComponentCreator('/self-hosted-broker/aws-cdk','3e3'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/self-hosted-broker/CloudFormation',
        component: ComponentCreator('/self-hosted-broker/CloudFormation','175'),
        exact: true,
        'sidebar': "sidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
