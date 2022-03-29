import React from 'react';
import vscodeLogo from '@site/static/img/vscode-logo.png'
import intellijLogo from '@site/static/img/intellij-idea-logo.png'
import webstromLogo from '@site/static/img/webstorm-logo.png'
import eclipseLogo from '@site/static/img/eclipse-logo.png'

const findLogo = (plugin) => {
  switch(plugin) {
    case "VS Code":
      return vscodeLogo;
    case "IntelliJ IDEA":
      return intellijLogo;
    case "Eclipse":
      return eclipseLogo;
    case "WebStorm":
      return webstromLogo;
    default:
      return "";
  } 
}

export const PluginCard = ({children, plugin, target, languages}) => (
  <a href={target} className="plugin-card">
    <div class="plugin-card-grid">
      <img src={findLogo(plugin)}/>
      <div class="plugin-card-title">
        { plugin }
        <span class="text-gray-500 font-normal block text-sm">{languages}</span>
      </div>
    </div>
    {children}
  </a>
);