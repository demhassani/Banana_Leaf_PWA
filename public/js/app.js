if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register('/public/sw.js').then(function(registration) {
      console.log('Service worker registration succeeded:', registration);
    }, /*catch*/ function(error) {
      console.log('Service worker registration failed:', error);
    });
  } else {
    console.log('Service workers are not supported.');
  }

  let installPromptEvent;

window.addEventListener('beforeinstallprompt' , (e) => {
    e.preventDefault();
    console.log('before install prompt event')
    installPromptEvent = e;
});


document.querySelector('.btn-banner').addEventListener('click' , (e) => {
    e.preventDefault();
    console.log(installPromptEvent);
    if(installPromptEvent) {
        installPromptEvent.prompt();

        installPromptEvent.userChoice
            .then((choiceResult) => {
                if(choiceResult.outcome === 'accepted') {
                    console.log('User Accepted');
                } else {
                    console.log('User dismissed');
                }

                installPromptEvent = null;
            })
    }
})
