// Dynamic service worker for Firebase Cloud Messaging.
// Served at /firebase-messaging-sw.js (required path for FCM).
import { NextResponse } from 'next/server'

export const runtime = 'edge'

const requiredEnv = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID',
]

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

function buildScript() {
  const missing = requiredEnv.filter((k) => !process.env[k])
  const warn = missing.length ? `// Missing env: ${missing.join(', ')}` : ''

  return `
    ${warn}
    importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
    importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

    firebase.initializeApp(${JSON.stringify(config)});
    const messaging = firebase.messaging();

    messaging.onBackgroundMessage(function(payload) {
      const notification = payload.notification || {};
      const data = payload.data || {};
      const title = notification.title || 'New notice available';
      const options = {
        body: notification.body || data.body || '',
        icon: notification.icon || '/logo.png',
        badge: '/logo.png',
        data: { link: data.link || notification.click_action || '/' },
        tag: 'notice-updates',
        renotify: true,
      };
      self.registration.showNotification(title, options);
    });

    self.addEventListener('notificationclick', function(event) {
      const target = event.notification?.data?.link || '/';
      event.notification.close();
      event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
          for (const client of list) {
            if (client.url === target && 'focus' in client) return client.focus();
          }
          if (clients.openWindow) return clients.openWindow(target);
        })
      );
    });
  `
}

export async function GET() {
  const body = buildScript()
  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
