import{_ as r}from"./checkra1n.ace0089d.js";import{_ as c,r as l,o as u,c as d,a as e,b as o,d as t,w as s,e as a}from"./app.cc9d0172.js";const h={},p={class:"custom-container danger"},y=e("p",{class:"custom-container-title"},"DANGER",-1),f=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.")],-1),_=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode"),e("p",null,"If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.")],-1),m={class:"custom-container warning"},g=e("p",{class:"custom-container-title"},"WARNING",-1),w=e("code",null,"Right Before Trigger",-1),b=e("h2",{id:"downloads-linux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads-linux","aria-hidden":"true"},"#"),o(" Downloads (Linux)")],-1),k={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},v={href:"https://checkra.in/releases/0.12.2-beta#all-downloads",target:"_blank",rel:"noopener noreferrer"},x={href:"https://checkra.in/releases/0.10.1-beta#all-downloads",target:"_blank",rel:"noopener noreferrer"},I=e("p",null,[e("img",{src:r,alt:"A screenshot of the checkra1n application"})],-1),q=e("h2",{id:"installing-checkra1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-checkra1n","aria-hidden":"true"},"#"),o(" Installing checkra1n")],-1),S={class:"custom-container tip"},A=e("p",{class:"custom-container-title"},"TIP",-1),O={href:"https://checkra.in/linux",target:"_blank",rel:"noopener noreferrer"},C=a("<li>Run the <code>checkra1n</code> binary in the terminal using <code>./checkra1n</code><ul><li>You may need to run <code>sudo chmod a+x ./checkra1n</code> if the binary doesn&#39;t run</li><li>If you&#39;re on an A11 device, you will need to head into <code>Options</code>, then enable the <code>Skip A11 BPR Check</code> option once it runs</li><li>If you&#39;re on iOS 14.6 or later, you will need to head into <code>Options</code>, then enable the <code>Allow Untested Versions</code> option once it runs</li><li>If you&#39;re on an A8X or A9X device and are on iOS 14.4 to 14.4.2, you will need to head into <code>Options</code>, then enable the <code>Allow Untested Versions</code> option once it runs</li></ul></li><li>Click <code>Start</code> and follow all onscreen prompts</li>",2),U=e("code",null,"Start",-1),T=e("ul",null,[e("li",null,"Follow the instructions until your device shows a black screen")],-1),B=e("li",null,"After this, checkra1n should automatically install",-1),N=a('<p>Your iOS device should now reboot.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>While you could, at this stage, install Cydia instead of continuing with the Odysseyra1n steps, we don&#39;t recommend it because of the fact that:</p><ul><li>People generally tend to have more stability when using Odysseyra1n instead of installing Cydia</li><li>Certain ease-of-use functionality (such as shshd, which automatically saves blobs for you when jailbroken) is not available</li><li>Some tweaks may require or be better tested with software that Odysseyra1n utilizes, rather than the software that is used when you choose to install Cydia</li></ul></div><p>To install Odysseyra1n, <u>do not</u> open the checkra1n app and install Cydia. Instead, follow the following instructions to install Sileo.</p><h2 id="the-odysseyra1n-script" tabindex="-1"><a class="header-anchor" href="#the-odysseyra1n-script" aria-hidden="true">#</a> The Odysseyra1n script</h2>',4),L={class:"custom-container tip"},R=e("p",{class:"custom-container-title"},"TIP",-1),V={href:"https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771",target:"_blank",rel:"noopener noreferrer"},D=a("<ol><li>Open the terminal app on your computer</li><li>Ensure that your computer is trusted by your device</li><li>Install &quot;iproxy&quot; by pasting and executing the following command: <ul><li>Ubuntu/Debian: <code>sudo apt install libusbmuxd-tools</code></li><li>Arch Linux: <code>pacman -S libusbmuxd</code></li></ul></li><li>Install the Odysseyra1n script by pasting and executing the following command: <code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)&quot;</code></li></ol>",1),P=a('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3);function G(W,E){const i=l("router-link"),n=l("ExternalLinkIcon");return u(),d("div",null,[e("div",p,[y,e("p",null,[o("If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc.) this guide will not work, and you should follow "),t(i,{to:"/using-odysseyn1x"},{default:s(()=>[o("Using Odysseyn1x")]),_:1}),o(" instead.")])]),f,_,e("div",m,[g,e("p",null,[o("A7 devices will likely fail to successfully jailbreak with checkra1n on Linux, as a result, you'll need to use an older checkra1n version and quickly unplug and replug your device once you see "),w,o(". It is highly recommended to follow "),t(i,{to:"/installing-chimera"},{default:s(()=>[o("Installing Chimera")]),_:1}),o(" instead.")])]),b,e("ul",null,[e("li",null,[o("The latest release of "),e("a",k,[o("checkra1n"),t(n)]),e("ul",null,[e("li",null,[o("If you are on an A8X or A9X device, you should instead get the 0.12.2 release of "),e("a",v,[o("checkra1n"),t(n)])]),e("li",null,[o("If you are on an A7 device, you should instead get the 0.10.1 release of "),e("a",x,[o("checkra1n"),t(n)])])])])]),I,q,e("div",S,[A,e("p",null,[o("checkra1n provides native support to machines running a Debian-based distro (e.g Ubuntu). It's recommended that you follow "),e("a",O,[o("specific instructions"),t(n)]),o(" provided by the checkra1n team themselves.")])]),e("ol",null,[C,e("li",null,[o("You will now be presented with instructions in how to reboot your device into "),t(i,{to:"/faq/#what-is-dfu-mode"},{default:s(()=>[o("DFU mode")]),_:1}),o(", click "),U,o(" to begin "),T]),B]),N,e("div",L,[R,e("p",null,[o("If you would prefer to do so, instead of running the script on your computer, you can run the Odysseyra1n script using the "),e("a",V,[o("shortcut"),t(n)]),o(" by opening this page on your device and then clicking the shortcut hyperlink.")])]),D,e("p",null,[o("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),t(i,{to:"/faq/#what-are-tweaks"},{default:s(()=>[o("tweaks")]),_:1}),o(", themes, packages and more.")]),P])}var X=c(h,[["render",G],["__file","index.html.vue"]]);export{X as default};
