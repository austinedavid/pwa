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
  const handleInstallClick = () => {
    if (gottenprops) {
      gottenprops.prompt();
      gottenprops.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
          console.log(choiceResult)
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
