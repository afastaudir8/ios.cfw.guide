import{_ as r,r as a,o as s,c as d,a as e,b as i,d as o,w as c,e as n}from"./app.cc9d0172.js";const u={},h=n('<h2 id="required-reading" tabindex="-1"><a class="header-anchor" href="#required-reading" aria-hidden="true">#</a> Required Reading</h2><p>iOS and iPadOS devices can typically only update to firmware versions which Apple has &quot;signed&quot;. This usually means that you can only update to the most recent firmware versions. This is bad for jailbreaking, as most jailbreaks rely on exploits that have been patched in newer versions.</p><p>Fortunately, we can use different &quot;profiles&quot; to delay a firmware update. This is intended for organisations which require additional time to update their devices, however we can also use these to update to unsigned firmware versions.</p><p>This has a time limit, however. You will only be able to update to the following firmware versions before their respective expiration dates:</p><ul><li><strong>16.3</strong> - May 14th, 2023</li><li><strong>15.7.3</strong> - June 25th, 2023</li><li><strong>16.3.1</strong> - June 25th, 2023</li><li><strong>16.4</strong> - July 6th, 2023</li><li><strong>15.7.4</strong> - July 9th, 2023</li></ul>',5),p=e("code",null,"UTC 00:00",-1),g={href:"https://dhinakg.github.io/delayed-otas.html",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"Because you do not currently have a jailbreak (or you choose not to jailbreak for any reason), you'll have to use advanced methods, involving things such as resetting all contents and settings, to be able to update.",-1),_={class:"custom-container tip"},y=e("p",{class:"custom-container-title"},"TIP",-1),m=n('<h2 id="preparing" tabindex="-1"><a class="header-anchor" href="#preparing" aria-hidden="true">#</a> Preparing</h2><ol><li>Plug your iDevice into your computer and make a backup through iTunes or Finder</li></ol><p>After making a backup, what you need to do after is dependent on if you use macOS or Windows</p><h2 id="macos-apple-configurator-2" tabindex="-1"><a class="header-anchor" href="#macos-apple-configurator-2" aria-hidden="true">#</a> macOS - Apple Configurator 2</h2><ol><li>Go to the App Store on your Mac</li><li>Search for <code>Apple Configurator 2</code> and install it</li><li>Setup Apple Configurator 2</li><li>Click Get Started</li><li>Click on your device, and then click Prepare</li><li>Select <code>Manual Configuration</code></li><li>Choose <code>Do not enroll in MDM</code></li><li>Go to <code>Organization</code>, and click <code>New Organization</code></li><li>Either sign in to your Apple ID, or click Skip <ul><li>If you chose to skip signing into your Apple ID, add a name, then click Next</li></ul></li><li>Choose <code>Generate a new supervision identity</code><ul><li>If you&#39;ve done this before in Apple Configurator 2, you can <code>Choose an existing supervision identity</code> instead</li></ul></li><li>Configure the iOS Setup Assistant as you wish <ul><li>If you forgot to backup your data earlier in the guide, this is the last step where you&#39;ll be able to do this.</li></ul></li><li>Click <code>Prepare</code>, which will erase your device and supervise it</li></ol><h2 id="windows-imazing" tabindex="-1"><a class="header-anchor" href="#windows-imazing" aria-hidden="true">#</a> Windows - iMazing</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This method requires that you purchase iMazing, if you don&#39;t have money to purchase iMazing, you cannot follow this method</p></div>',7),v={href:"https://imazing.com/download/windows",target:"_blank",rel:"noopener noreferrer"},b=n("<li>After setting up iMazing, click the <code>Supervision</code> option</li><li>Click Next, click the button below <code>Organization</code>, then click Choose</li><li>Click the <code>+</code> button at the bottom left corner of the new window</li><li>Add a name, then click <code>Save</code></li><li>Click Choose, then click Next <ul><li>If you forgot to backup your data earlier in the guide, this is the last step where you&#39;ll be able to do this.</li></ul></li><li>Type the number it lists into the text box, then click <code>Next</code>, iMazing will erase your device and supervise it</li>",6),w=e("h2",{id:"updating-your-firmware-version",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#updating-your-firmware-version","aria-hidden":"true"},"#"),i(" Updating your firmware version")],-1),k=e("li",null,"When the device boots up after being erased, set it up, then open this page on your device",-1),x=e("li",null,[e("a",{href:"/assets/files/delay_15_7_3.mobileconfig"},"15.7.3")],-1),C=e("li",null,[e("a",{href:"/assets/files/delay_16_3.mobileconfig"},"16.3")],-1),S={href:"https://dhinakg.github.io/delayed-otas.html",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,"Reboot your device",-1),T=e("li",null,"Plug your device into power and connect to the Internet with Wi-Fi",-1),I=e("li",null,"Open the Settings application",-1),z=e("li",null,[i("Tap "),e("code",null,"General"),i(" -> "),e("code",null,"Software Update")],-1),O=e("li",null,"Ensure that the version displayed is the version you are intending to update to",-1),M=e("li",null,"Download and install the update",-1),N=e("li",null,"Once updated, remove the update profile through Settings",-1),q=e("p",null,"After updating, you can remove supervision and restore your backup you made earlier by erasing all content and settings.",-1),D=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[i("If the update was successful, continue to "),e("a",{href:"/get-started"},"Get Started"),i(" to jailbreak your device.")])],-1),P={href:"https://github.com/dhinakg/",target:"_blank",rel:"noopener noreferrer"};function G(j,E){const t=a("ExternalLinkIcon"),l=a("router-link");return s(),d("div",null,[h,e("p",null,[i("Time is given in "),p,i(". For more expiration dates, view "),e("a",g,[i("dhinakg.github.io/delayed-otas.html"),o(t)]),i(".")]),f,e("div",_,[y,e("p",null,[i("If you're on iOS 15.7.1 or earlier, or are on iOS 16.0 to 16.1.2, you can follow "),o(l,{to:"/updating-blobless-nonjailbroken"},{default:c(()=>[i("Updating (Blobless) (Non-Jailbroken)")]),_:1}),i(" instead.")])]),m,e("ol",null,[e("li",null,[i("Download and install iMazing from "),e("a",v,[i("here"),o(t)])]),b]),w,e("ol",null,[k,e("li",null,[i("Tap a version below to install its respective update profile: "),e("ul",null,[x,C,e("li",null,[i("For more firmware versions, view "),e("a",S,[i("dhinakg.github.io/delayed-otas.html"),o(t)]),i(".")])])]),A,T,I,z,O,M,N]),q,D,e("p",null,[i("Credits to "),e("a",P,[i("dhinakg"),o(t)]),i(" for discovering this method.")])])}var F=r(u,[["render",G],["__file","index.html.vue"]]);export{F as default};
