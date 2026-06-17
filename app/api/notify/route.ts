import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

interface RequestBody {
  tokens: string[]
  title: string
  body: string
  link?: string | null
}

const FCM_ENDPOINT = 'https://fcm.googleapis.com/fcm/send'

export async function POST(req: Request) {
  const serverKey = process.env.FCM_SERVER_KEY || process.env.FIREBASE_SERVER_KEY
  if (!serverKey) {
    return NextResponse.json({ error: 'Missing FCM_SERVER_KEY' }, { status: 500 })
  }

  const { tokens, title, body, link }: RequestBody = await req.json()
  if (!tokens?.length) {
    return NextResponse.json({ message: 'No tokens to notify' }, { status: 200 })
  }

  const payload = {
    registration_ids: tokens,
    notification: {
      title: title || 'New notice',
      body: body || '',
      icon: '/logo.png',
      click_action: link || '/',
    },
    data: {
      link: link || '/',
    },
  }

  const resp = await fetch(FCM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `key=${serverKey}`,
    },
    body: JSON.stringify(payload),
  })

  const json = await resp.json()
  if (!resp.ok) {
    return NextResponse.json({ error: json }, { status: resp.status })
  }

  return NextResponse.json({
    success: true,
    successCount: json.success,
    failureCount: json.failure,
  })
}
