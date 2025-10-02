// Service Worker Registration
export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/sw.js`;

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          console.log('Service Worker registered: ', registration);

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, show update prompt
                  showUpdateNotification();
                }
              });
            }
          });
        })
        .catch((error) => {
          console.log('Service Worker registration failed: ', error);
        });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}

// Show update notification
function showUpdateNotification() {
  // Create a toast notification for app updates
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 right-4 bg-primary text-white px-4 py-3 rounded-lg shadow-lg z-50 max-w-sm';
  notification.innerHTML = `
    <div class="flex items-center justify-between">
      <div>
        <h4 class="font-semibold">Update Available</h4>
        <p class="text-sm">A new version of AgriSure is available!</p>
      </div>
      <button onclick="window.location.reload()" class="ml-4 bg-white text-primary px-3 py-1 rounded text-sm font-medium hover:bg-gray-100">
        Update
      </button>
    </div>
  `;

  document.body.appendChild(notification);

  // Auto remove after 10 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 10000);
}

// Request notification permission
export function requestNotificationPermission() {
  if ('Notification' in window && 'serviceWorker' in navigator) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted');
      }
    });
  }
}

// Check if app is installed
export function isInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone === true;
}

// Install prompt handling
let deferredPrompt;

export function setupInstallPrompt() {
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;

    // Show install button or prompt
    showInstallPrompt();
  });
}

function showInstallPrompt() {
  if (deferredPrompt) {
    const installButton = document.createElement('button');
    installButton.className = 'fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg z-50';
    installButton.textContent = 'Install AgriSure';
    installButton.onclick = async () => {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to install prompt: ${outcome}`);
      deferredPrompt = null;
      installButton.remove();
    };

    document.body.appendChild(installButton);

    // Auto remove after 30 seconds
    setTimeout(() => {
      if (installButton.parentNode) {
        installButton.parentNode.removeChild(installButton);
      }
    }, 30000);
  }
}