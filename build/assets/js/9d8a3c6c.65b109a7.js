"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[117],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),d=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,y=p["".concat(u,".").concat(h)]||p[h]||c[h]||r;return n?o.createElement(y,i(i({ref:t},s),{},{components:n})):o.createElement(y,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4711:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"Python",slug:"/configuration/python",sidebar_position:2},u=void 0,d={unversionedId:"configuration/python-config",id:"configuration/python-config",title:"Python",description:"Using Layers",source:"@site/docs/configuration/python-config.mdx",sourceDirName:"configuration",slug:"/configuration/python",permalink:"/configuration/python",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Python",slug:"/configuration/python",sidebar_position:2},sidebar:"sidebar",previous:{title:"NodeJS",permalink:"/configuration/nodejs"},next:{title:"AWS CDK",permalink:"/self-hosted-broker/aws-cdk"}},s={},c=[{value:"Using Layers",id:"using-layers",level:2},{value:"Step 1 - Deploy Your Function to AWS Lambda",id:"step-1---deploy-your-function-to-aws-lambda",level:3},{value:"Step 2 - Configure Your Function",id:"step-2---configure-your-function",level:3},{value:"Step 3: Configure Handler",id:"step-3-configure-handler",level:3},{value:"Step 4: Invoke Your Function",id:"step-4-invoke-your-function",level:3},{value:"Without Layers",id:"without-layers",level:2},{value:"Step 1:  Install Thundra\u2019s python package",id:"step-1--install-thundras-python-package",level:3},{value:"Step 2: Deploy Your Function to AWS Lambda.",id:"step-2-deploy-your-function-to-aws-lambda",level:3},{value:"Step 3: Configure Your Function",id:"step-3-configure-your-function",level:3},{value:"Step 4: Configure Handler",id:"step-4-configure-handler",level:3},{value:"Step 5: Invoke your function!",id:"step-5-invoke-your-function",level:3}],p={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"using-layers"},"Using Layers"),(0,r.kt)("p",null,"Integrating Serverless Debugger using AWS Lambda Layers is the recommended (and easier) way to get started with Serverless Debugger.\nDepending on whether or not you choose to use a custom runtime, you can integrate Serverless Debugger with no code changes\nat all or just by wrapping your handler function."),(0,r.kt)("h3",{id:"step-1---deploy-your-function-to-aws-lambda"},"Step 1 - Deploy Your Function to AWS Lambda"),(0,r.kt)("p",null,"Bundle all your Python module files and any additional required Python libraries, and then\nupload it to the AWS Lambda console using the ",(0,r.kt)("strong",{parentName:"p"},"Upload a.zip file")," option for the code entry type.\nNote that Thundra dependencies are not expected to be in the artifact to be uploaded, as they\ncome with a layer that will be utilized at a later point"),(0,r.kt)("h3",{id:"step-2---configure-your-function"},"Step 2 - Configure Your Function"),(0,r.kt)("p",null,"Add the API key to the environment variables on the Amazon Lambda console."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Add Thundra layer"),"\nNext, add the Thundra layer by clicking on the Layers option in the Designer tab on your\nLambda function console. Then select the \u201cAdd Layer\u201d button and add the Thundra layer's ARN."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"arn:aws:lambda:${region}:269863060030:layer:thundra-lambda-python-layer:${latest-version} \n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Latest version of the Thundra Python layer  ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/endpoint.svg?url=https://thundra-layer-python-svd2fu4gtfa3.runkit.sh/",alt:"Thundra Python Layer"})," "))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that the region of the ARN is dynamic, so you need to change it accordingly to\nthe region where you deploy your function. So let\u2019s say that you deploy your Lambda\nfunction to the Oregon (us-west-2) region. The layer ARN\nwill be ",(0,r.kt)("inlineCode",{parentName:"p"},"arn:aws:lambda:us-west-2:269863060030:layer:thundra-lambda-python-layer:${layer-version}")))),(0,r.kt)("h3",{id:"step-3-configure-handler"},"Step 3: Configure Handler"),(0,r.kt)("p",null,"Set the handler to ",(0,r.kt)("inlineCode",{parentName:"p"},"thundra.handler.wrapper"),". Set the\n",(0,r.kt)("inlineCode",{parentName:"p"},"thundra_agent_lambda_handler")," environment variable value to your original handler\n(e.g., handler.handle )."),(0,r.kt)("h3",{id:"step-4-invoke-your-function"},"Step 4: Invoke Your Function"),(0,r.kt)("p",null,"Clicking on the \u201cTest\u201d button, which is located on the top right side of the AWS console, will result\nin an invocation of your function (after you have configured test data per the specifications of\nyour function)"),(0,r.kt)("p",null,"After generating your first invocation, the \u201cNext\u201d button will appear in the Invocation Monitor bar.\nSimply click the button to see monitoring data from your invocation."),(0,r.kt)("h2",{id:"without-layers"},"Without Layers"),(0,r.kt)("h3",{id:"step-1--install-thundras-python-package"},"Step 1:  Install Thundra\u2019s python package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"pip3 install thundra -t .\n")),(0,r.kt)("h3",{id:"step-2-deploy-your-function-to-aws-lambda"},"Step 2: Deploy Your Function to AWS Lambda."),(0,r.kt)("p",null,"Bundle all your Python module files and any additional required Python libraries, and then\nupload it to the AWS Lambda console using the \u201cUpload a.zip file\u201d option for the code entry type."),(0,r.kt)("h3",{id:"step-3-configure-your-function"},"Step 3: Configure Your Function"),(0,r.kt)("p",null,"Add the API key to the environment variables on the Amazon Lambda console"),(0,r.kt)("h3",{id:"step-4-configure-handler"},"Step 4: Configure Handler"),(0,r.kt)("p",null,"Set the handler to ",(0,r.kt)("inlineCode",{parentName:"p"},"thundra.handler.wrapper"),". Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"thundra_agent_lambda_handler"),"\nenvironment variable value to your handler."),(0,r.kt)("h3",{id:"step-5-invoke-your-function"},"Step 5: Invoke your function!"),(0,r.kt)("p",null,"Clicking on the \u201cTest\u201d button, which is located on the top right side of the AWS console, will result\nin an invocation of your function (after you have configured test data per the specifications of\nyour function)."),(0,r.kt)("p",null,"Now you can try to invoke your Lambda function and see the details of your invocation in the\nThundra console!"))}h.isMDXComponent=!0}}]);