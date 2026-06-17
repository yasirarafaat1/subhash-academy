'use client'

import { useEffect, useRef, useState } from 'react'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import toast from 'react-hot-toast'
import { app, db } from '@/lib/firebase'

// Automatically requests notification permission and stores FCM token.
export default function NoticePushAuto() {
  const [done, setDone] = useState(false)
  const running = useRef(false)

  useEffect(() => {
    if (running.current || done) return
    running.current = true
    enable().finally(() => {
      setDone(true)
      running.current = false
    })
  }, [done])

  return null
}

const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY?.trim()

async function enable() {
  if (typeof window === 'undefined') return
  if (!('Notification' in window)) return
  if (!vapidKey) {
    console.warn('Missing VAPID key; cannot enable push.')
    return
  }

  try {
    const messagingModule = await import('firebase/messaging')
    const supported = await messagingModule.isSupported()
    if (!supported) return

    // If already granted and token stored, skip
    const stored = localStorage.getItem('noticePushToken')
    if (Notification.permission === 'granted' && stored) return

    const permission = await Notification.requestPermission()
    if (permission !== 'granted') return

    // Ensure service worker exists and is active
    const swUrl = '/firebase-messaging-sw.js'
    const probe = await fetch(swUrl, { cache: 'no-store' })
    if (!probe.ok) throw new Error('Service worker 404')
    await navigator.serviceWorker.register(swUrl)
    const registration = await navigator.serviceWorker.ready

    const messaging = messagingModule.getMessaging(app)
    const token = await messagingModule.getToken(messaging, {
      vapidKey,
      serviceWorkerRegistration: registration,
    })
    if (!token) throw new Error('No FCM token')

    await setDoc(
      doc(db, 'fcmTokens', token),
      {
        token,
        createdAt: serverTimestamp(),
        userAgent: navigator.userAgent,
      },
      { merge: true }
    )
    localStorage.setItem('noticePushToken', token)
    toast.success('Notifications enabled for new notices')
  } catch (err) {
    console.error('Push enable failed', err)
  }
}
