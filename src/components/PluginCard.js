import React from 'react';
import vscodeLogo from '@site/static/img/vscode-logo.png'
import intellijLogo from '@site/static/img/intellij-logo.png'

const vscodeName = "VS Code";
const intellijName = "IntelliJ";

export const PluginCard = ({children, plugin, target}) => (
  <a href={target} className="plugin-card">
    <div class="plugin-card-grid">
      <img src={ plugin == "VS Code" ? vscodeLogo : intellijLogo}/>
      <div class="plugin-card-title">
        <span class="text-gray-500 font-normal block text-sm">Guide for</span>
        { plugin }
      </div>
    </div>
    {children}
  </a>
);