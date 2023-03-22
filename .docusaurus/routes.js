
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/','5aa'),
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
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
