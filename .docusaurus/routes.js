
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','a87'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','d62'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','d09'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','192'),
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
    component: ComponentCreator('/','d96'),
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
        path: '/examples',
        component: ComponentCreator('/examples','b2d'),
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
