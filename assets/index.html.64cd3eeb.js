import{_ as n,r as t,o as c,c as d,a as e,b as i,d as o,w as r,e as s}from"./app.cc9d0172.js";const u={},p=s('<p>Questo ti guider\xE0 nel processo di salvataggio dei blobs che sono necessari se si desidera effettuare il downgrade ad una versione di iOS o iPadOS pi\xF9 vecchia e non pi\xF9 firmata. Ci sono diversi metodi che puoi provare. Per i dispositivi unjailbroken, \xE8 necessario utilizzare il metodo &quot;Computer&quot;.</p><h2 id="salvare-i-blobs-con-shshd" tabindex="-1"><a class="header-anchor" href="#salvare-i-blobs-con-shshd" aria-hidden="true">#</a> Salvare i blobs con shshd</h2><p>shshd \xE8 un tweak utilizzato per il salvataggio automatico dei blobs. Una volta che l&#39;hai installato, non dovrai preoccuparti di salvare manualmente i blobs in quanto gestisce tutto in background. Devi essere in jailbroken per usare shshd. Se non sei jailbroken, segui <a href="#saving-blobs-with-tss-saver-website">Salvare i blobs con il sito web di TSS Saver</a>.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>shshd \xE8 compatibile solo con i jailbreak che si basano su Procursus, come Taurine, Odyssey, Chimera e Odysseyra1n. Se stai usando unc0ver o checkra1n, segui <a href="#saving-blobs-with-tss-saver-app">Salvare i blobs con l&#39;App di TSS Saver</a>.</p></div><ol><li>Apri il gestore dei pacchetti</li><li>Cerca il pacchetto <code>shshd</code></li><li>Scarica e installa il pacchetto</li><li>Premi &quot;Fatto&quot; quando viene richiesto</li></ol>',5),b={href:"https://tsssaver.1conan.com/v2/",target:"_blank",rel:"noopener noreferrer"},h=s('<h3 id="eseguire-shshd-manualmente" tabindex="-1"><a class="header-anchor" href="#eseguire-shshd-manualmente" aria-hidden="true">#</a> Eseguire shshd manualmente</h3><p>Non dovresti aver bisogno di eseguire shshd manualmente, ma pu\xF2 essere eseguito attraverso un terminale.</p><ol><li>Fai SSH nel tuo dispositivo o scarica NewTerm 2</li><li>Digita <code>sudo /usr/sbin/shshd</code> nel terminale <ul><li>Se richiesto per una password, inserisci la password di root (quella predefinita \xE8 impostata su <code>alpine</code>)</li></ul></li></ol><h2 id="salvare-i-blobs-con-l-app-di-tss-saver" tabindex="-1"><a class="header-anchor" href="#salvare-i-blobs-con-l-app-di-tss-saver" aria-hidden="true">#</a> Salvare i blobs con l&#39;App di TSS Saver</h2><p>L&#39;app TSS Saver pu\xF2 essere installata su dispositivi jailbroken e consente di salvare facilmente i tuoi blobs solamente con un clic. Se non sei jailbroken, segui <a href="#saving-blobs-with-tss-saver-website">Salvare i blobs con il sito web di TSS Saver</a>.</p>',5),v={href:"https://repo.1conan.com/",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[i("Scarica e installa TSS Saver "),e("ul",null,[e("li",null,[i("Se stai usando unc0ver su iOS 14, scarica e installa anche "),e("code",null,"libkrw")]),e("li",null,[i("Se stai usando Taurine su iOS 14, scarica e installa "),e("code",null,"libkernrw")])])],-1),g=e("li",null,'Premi "Save Blobs"',-1),S=e("li",null,'Una volta ricevuto il messaggio di conferma, clicca "Open"',-1),f=s('<h2 id="salvare-i-blobs-con-il-sito-web-di-tss-saver" tabindex="-1"><a class="header-anchor" href="#salvare-i-blobs-con-il-sito-web-di-tss-saver" aria-hidden="true">#</a> Salvare i blobs con il sito web di TSS Saver</h2><p>Il sito web di TSS Saver consente di salvare i blobs del dispositivo inserendo alcune informazioni specifiche del dispositivo. Una volta salvati, \xE8 quindi possibile accedere ai blobs inserendo queste informazioni di nuovo.</p><p>Gli utenti con un dispositivo A12+ devono essere jailbroken per poter utilizzare il sito web di TSS Saver, visto che \xE8 un requisito per impostare i valori di ApNoncs e Generator Se non sei jailbroken, segui <a href="#saving-blobs-with-blobsaver">Salvare i blobs con blobsaver</a></p><h3 id="ottenere-generatore-e-apnonce-solo-a12-jailbroken" tabindex="-1"><a class="header-anchor" href="#ottenere-generatore-e-apnonce-solo-a12-jailbroken" aria-hidden="true">#</a> Ottenere Generatore e ApNonce (solo A12+ Jailbroken)</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Se stai usando unc0ver o Taurine su iOS 14, installa rispettivamente libkrw o libkernrw.</p></div><ol><li>Apri un&#39;app Terminale ed esegui <code>sudo dimentio &gt; dimentio.txt</code><ul><li>In alternativa, puoi ottenere il tuo Generatore e ApNonce dalla sezione Generator nell&#39;App di TSS Saver</li></ul></li><li>Vai a /var/mobile su Filza e apri dimentio.txt</li><li>Copiare il numero 0x dopo <code>Current nonce is</code> nella parte inferiore del file di testo cos\xEC come il numero che viene dopo <code>entangled nonce:</code>. Il numero 0x \xE8 il tuo Generatore, e il numero del nonce entangled \xE8 il tuo ApNonce. Tienili al sicuro da qualche parte, ne avrai bisogno pi\xF9 tardi</li><li>Segui il resto di questa guida</li></ol><h3 id="salvare-i-blobs-tutti-i-dispositivi" tabindex="-1"><a class="header-anchor" href="#salvare-i-blobs-tutti-i-dispositivi" aria-hidden="true">#</a> Salvare i blobs (Tutti i Dispositivi)</h3>',7),_=e("li",null,"Collega il tuo dispositivo iOS al tuo Mac o PC",-1),q={href:"https://www.apple.com/itunes/",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,"Vai alla pagina di riepilogo del dispositivo",-1),z=e("li",null,[i("Fai clic due volte sul campo Numero seriale "),e("ul",null,[e("li",null,"Esso dovrebbe cambiare per mostrare il tuo numero ECID")])],-1),x=e("li",null,"Appuntati l'ECID da qualche parte in modo da poterlo leggere pi\xF9 tardi",-1),T={href:"https://tsssaver.1conan.com/v2/",target:"_blank",rel:"noopener noreferrer"},w=e("li",null,"Inserisci l'ECID del tuo dispositivo",-1),A={href:"https://itunes.apple.com/us/app/ax-cpu/id1048174418?mt=8",target:"_blank",rel:"noopener noreferrer"},O=e("li",null,"Gli utenti con A12+ dovranno inserire ApNonce e Generator",-1),I=e("li",null,"Fai clic su Submit",-1),C=e("h2",{id:"salvare-i-blobs-con-blobsaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#salvare-i-blobs-con-blobsaver","aria-hidden":"true"},"#"),i(" Salvare i blobs con blobsaver")],-1),P=e("p",null,"blobsaver \xE8 un programma per PC multipiattaforma, compatibile con Windows, macOS e Linux, che ti permette di salvare facilmente i tuoi blobs su qualsiasi dispositivo, jailbroken o meno. Non \xE8 conveniente come le altre opzioni, ma funziona con la maggior parte dei dispositivi.",-1),B=e("h3",{id:"blobsaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#blobsaver","aria-hidden":"true"},"#"),i(" blobsaver")],-1),N={href:"https://github.com/airsquared/blobsaver/releases",target:"_blank",rel:"noopener noreferrer"},E=e("li",null,"Connetti il tuo dispositivo iOS al tuo computer e assicurati che sia sbloccato",-1),j=e("li",null,'Clicca sul primo pulsante "Read from device", che inserir\xE0 il tuo ECID e le informazioni del dispositivo nel programma',-1),G=e("li",null,"Se il tuo dispositivo iOS non \xE8 A12 o superiore, non \xE8 necessario ottenere un APNonce e si pu\xF2 saltare il passo successivo",-1),D=s('<h3 id="ottenere-apnonce-e-generator-specifici-per-il-dispositivo" tabindex="-1"><a class="header-anchor" href="#ottenere-apnonce-e-generator-specifici-per-il-dispositivo" aria-hidden="true">#</a> Ottenere APNonce e generator specifici per il dispositivo</h3><p>Assicurati che il tuo dispositivo sia sbloccato e connesso al tuo computer durante questo processo.</p><ol><li>Clicca sul secondo pulsante &quot;Read from device&quot; accanto al campo APNonce</li><li>Se sei jailbroken o hai generatore/apnonce gi\xE0 impostati sul tuo dispositivo, seleziona &quot;Jailbroken&quot;. Altrimenti, seleziona &quot;Unjailbroken&quot;</li></ol><p>Il dispositivo si riavvier\xE0 in modalit\xE0 di recupero pi\xF9 volte. Quando si riavvia in modalit\xE0 normale, sblocca il dispositivo iOS.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Se rimani bloccato in modalit\xE0 di recupero, prova a utilizzare l&#39;opzione &quot;Exit Recovery Mode&quot; dal menu &quot;Help&quot; su blobsaver.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Questi valori possono essere riutilizzati in qualsiasi momento per salvare i blobs se jailbroken o meno.</p></div><h3 id="salvare-i-blobs" tabindex="-1"><a class="header-anchor" href="#salvare-i-blobs" aria-hidden="true">#</a> Salvare i Blobs</h3><ol><li>Una volta compilate tutte le informazioni, fai clic su &quot;Go&quot; per salvare i blobs</li><li>\xC8 inoltre possibile fare clic su &quot;Save device&quot; per salvare le informazioni del dispositivo corrente, in modo da poter salvare i blobs per esso in modo pi\xF9 veloce</li></ol><h3 id="salvare-i-blobs-automaticamente-in-background" tabindex="-1"><a class="header-anchor" href="#salvare-i-blobs-automaticamente-in-background" aria-hidden="true">#</a> Salvare i blobs automaticamente in background</h3><ol><li>\xC8 possibile impostare blobsaver per salvare i blobs automaticamente in background, senza dover aprire manualmente blobsaver</li><li>Una volta che si dispone di uno o pi\xF9 dispositivi salvati, fare clic su &quot;Background Settings&quot; per iniziare a configurarlo</li><li>Seleziona per quali dispositivi si desidera salvare automaticamente i blobs in background, e blobsaver li tester\xE0 per assicurarsi che le informazioni del dispositivo siano corrette</li><li>\xC8 successivamente possibile modificare la frequenza con la quale i blobs vengono salvati, utilizzando il pulsante &quot;Change Frequency&quot;</li><li>Una volta pronto, fai clic su &quot;Start Background&quot; per attivarlo</li><li>Ora puoi chiudere blobsaver e i blobs saranno salvati automaticamente in background durante l&#39;intervallo impostato</li></ol><h2 id="salvataggio-dei-blobs-onboard" tabindex="-1"><a class="header-anchor" href="#salvataggio-dei-blobs-onboard" aria-hidden="true">#</a> Salvataggio dei Blobs Onboard</h2><p>Il salvataggio dei Blobs Onboard \xE8 il processo di salvataggio la firma precedente dell&#39;ultimo aggiornamento che hai eseguito, e la conversione di essa in un blob utilizzabile. Dato che hai aggiornato mentre la versione era ancora firmata, puoi riutilizzare questi blobs, ed essi saranno ancora validi. Tuttavia, il tipo di blobs che verr\xE0 salvato dipender\xE0 da come si \xE8 aggiornato alla versione corrente.</p><h3 id="blobs-onboard-ota" tabindex="-1"><a class="header-anchor" href="#blobs-onboard-ota" aria-hidden="true">#</a> Blobs Onboard OTA</h3><p>Se hai aggiornato alla versione della quale vuoi salvare i Blobs Onboard utilizzando l&#39;app Impostazioni tramite aggiornamento over-the-air, allora i blobs saranno &quot;Blobs OTA&quot;. Questi blobs richiedono un <strong>exploit bootrom</strong> per essere utilizzati, e <strong>solo</strong> con l&#39;argomento <code>--use-pwndfu</code> su FutureRestore possono essere usati.</p><h3 id="blobs-onboard-itunes" tabindex="-1"><a class="header-anchor" href="#blobs-onboard-itunes" aria-hidden="true">#</a> Blobs Onboard iTunes</h3><p>Se hai aggiornato/ripristinato alla versione della quale vuoi salvare i Blobs Onboard utilizzando iTunes / Finder, allora i Blobs Onboard saranno salvati come blobs normali e sarete in grado di usarli. Tuttavia, differiscono a seconda che si sia ripristinato o aggiornato utilizzando un computer.</p><p>Se <em>hai ripristinato</em> usando un computer, i tuoi blobs saranno &quot;Erase&quot; blobs, e <strong>non</strong> potranno essere utilizzati con l&#39;opzione &quot;Update (-u)&quot; su FutureRestore.</p><p>Se hai <em>aggiornato</em> usando un computer, i tuoi blobs saranno &quot;Update&quot; blobs, e potranno essere utilizzati <strong>solo</strong> con l&#39;opzione &quot;Update (-u)&quot; su FutureRestore.</p><h3 id="salvare-i-blobs-onboard" tabindex="-1"><a class="header-anchor" href="#salvare-i-blobs-onboard" aria-hidden="true">#</a> Salvare i Blobs Onboard</h3>',19),F={href:"https://apt.arx8x.net",target:"_blank",rel:"noopener noreferrer"},U=s('<li>Scarica il Tweak <code>System Info</code> <img src="https://imgur.com/a/g8XZPrM" alt=""></li><li>Dopo aver scaricato System Info, apri le Impostazioni e vai su <code>Generali &gt; Info</code></li><li>Scorri verso il basso fino a <code>ECID</code></li><li>Esegui uno swipe verso sinistra su <code>ECID</code> e clicca <code>APTicket</code></li><li>Clicca su <code>Submit</code></li>',5),y={href:"https://shsh.host",target:"_blank",rel:"noopener noreferrer"},R=e("h3",{id:"verificare-il-tipo-di-blob",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#verificare-il-tipo-di-blob","aria-hidden":"true"},"#"),i(" Verificare il Tipo di Blob")],-1),M={href:"https://github.com/tihmstar/img4tool",target:"_blank",rel:"noopener noreferrer"},V=e("ol",null,[e("li",null,[i("Scarica gli zip IPSW e OTA da internet, estrai il file BuildManifest.plist da entrambi gli iPSW. "),e("ul",null,[e("li",null,"Google \xE8 tuo amico")])]),e("li",null,[i("Esegui "),e("code",null,"img4tool -v IPSW_BuildManifest.plist -s blob.shsh2 e img4tool -v OTA_BuildManifest.plist -s blob.shsh2")]),e("li",null,"Scorri attraverso l'output e controlla con quale BuildManifest img4tool ha riportato un successo.")],-1);function W(L,Q){const a=t("ExternalLinkIcon"),l=t("router-link");return c(),d("div",null,[p,e("p",null,[i("I blobs verranno salvati in automatico quando installi shshd, ogni volta che si ri-esegue il jailbreak, e ogni settimana. I blobs sono disponibili sul sito web "),e("a",b,[i("TSS saver"),o(a)]),i('. Per recuperarli, vai su "retrieve" e inserisci il tuo ECID.')]),h,e("ol",null,[e("li",null,[i("Aggiungi "),e("a",v,[i("repo.1conan.com"),o(a)]),i(" alle sorgenti nel tuo "),o(l,{to:"/it_IT/package-managers"},{default:r(()=>[i("gestore di pacchetti preferito")]),_:1})]),m,g,S]),f,e("ol",null,[_,e("li",null,[i("Apri iTunes o Finder "),e("ul",null,[e("li",null,[i("Gli utenti Windows devono scaricare la versione "),e("a",q,[i("normale"),o(a)]),i(", NON la versione del Windows Store")])])]),k,z,x,e("li",null,[i("Apri il sito web "),e("a",T,[i("TSS Saver"),o(a)])]),w,e("li",null,[i("Seleziona il tuo dispositivo "),e("ul",null,[e("li",null,[i("Gli utenti con iPhone 6S, 6S Plus e iPhone SE avranno bisogno di ottenere la loro board configuration tramite "),e("a",A,[i("AX-CPU"),o(a)]),i(" sull'App Store")]),O])]),I]),C,P,B,e("ol",null,[e("li",null,[i("Scarica, installa e avvia l'ultima versione di "),e("a",N,[i("blobsaver"),o(a)])]),E,j,G]),D,e("ol",null,[e("li",null,[i("Aggiungi la repo "),e("a",F,[i("https://apt.arx8x.net"),o(a)]),i(" sul tuo "),o(l,{to:"/it_IT/package-managers"},{default:r(()=>[i("gestore di pacchetti preferito")]),_:1})]),U]),e("p",null,[i('Apparir\xE0 un popup con il messaggio "APTicket Submitted" una volta terminato. Ora puoi accedere ai tuoi blobs su '),e("a",y,[i("shsh.host"),o(a)]),i(".")]),R,e("p",null,[i("Per verificare i tipi di blobs che possiedi, usa "),e("a",M,[i("img4tool"),o(a)])]),V])}var J=n(u,[["render",W],["__file","index.html.vue"]]);export{J as default};
