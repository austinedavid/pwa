"use client"
import { useEffect, useState, useRef } from 'react';

const InstallButton = () => {
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [gottenprops, setprops] = useState<any>()
  let deferredPrompt: any;
 

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
        console.log(e)
      e.preventDefault();
      deferredPrompt = e;
      setprops(e)
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);
console.log(deferredPrompt)
console.log(gottenprops)
  const handleInstallClick = () => {
    if (deferredPrompt) {
        console.log(deferredPrompt)
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
      });
    }
  };

  return (
    <button onClick={handleInstallClick} style={{ display: showInstallButton ? 'block' : 'none' }}>
      Install App
    </button>
  );
};

export default InstallButton;
