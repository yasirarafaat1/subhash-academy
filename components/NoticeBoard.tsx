'use client'

import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { format } from 'date-fns'
import { Link as LinkIcon, Share2 } from 'lucide-react'
import toast from 'react-hot-toast'
import { db } from '@/lib/firebase'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export interface Notice {
  id: string
  title: string
  content: string
  link?: string | null
  createdAt: Date
  isImportant: boolean
}

export default function NoticeBoard() {
  const [notices, setNotices] = useState<Notice[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [sharingId, setSharingId] = useState<string | null>(null)

  useEffect(() => {
    const q = query(collection(db, 'notices'), orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items = snapshot.docs.map((doc) => {
          const data = doc.data()
          return {
            id: doc.id,
            title: data.title,
            content: data.content,
            link: data.link || null,
            isImportant: data.isImportant || false,
            createdAt: data.createdAt?.toDate(),
          } as Notice
        })
        setNotices(items)
        setIsLoading(false)
      },
      (error) => {
        console.error('Error fetching notices:', error)
        setIsLoading(false)
      }
    )

    return () => unsubscribe()
  }, [])

  const handleShare = async (notice: Notice) => {
    if (typeof window === 'undefined') return
    const shareUrl = `${window.location.origin}/#notice-${notice.id}`

    try {
      setSharingId(notice.id)
      if (navigator.share) {
        await navigator.share({
          title: notice.title,
          text: notice.content,
          url: shareUrl,
        })
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl)
        toast.success('Link copied to clipboard')
      } else {
        toast.error('Sharing is not supported in this browser.')
      }
    } catch (error) {
      console.error('Share failed', error)
      toast.error('Unable to share this notice right now')
    } finally {
      setSharingId(null)
    }
  }

  if (isLoading) return <div className="p-4 text-center">Loading notices...</div>
  if (notices.length === 0) return null

  return (
    <div className="w-full px-4 py-8 overflow-x-hidden">
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader className="bg-blue-50 dark:bg-blue-900/20 rounded-t-lg border-b">
          <CardTitle className="text-xl font-bold text-center">Notice Board</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[500px] overflow-y-auto">
            {notices.map((notice) => (
              <div
                key={notice.id}
                id={`notice-${notice.id}`}
                onClick={() => {
                  if (!notice.link) return
                  if (notice.link.startsWith('http')) {
                    window.open(notice.link, '_blank', 'noopener,noreferrer')
                  } else {
                    window.location.href = notice.link
                  }
                }}
                className={`p-4 transition-all ${
                  notice.isImportant ? 'bg-yellow-50 dark:bg-yellow-900/20' : ''
                } ${
                  notice.link ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/30' : 'cursor-default'
                }`}
                style={{ minHeight: '80px' }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">{notice.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 break-words">{notice.content}</p>
                    {notice.link && (
                      <a
                        href={notice.link}
                        target={notice.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-2 inline-flex items-center gap-1 text-blue-700 dark:text-blue-300 underline decoration-2 underline-offset-4 font-medium break-all"
                      >
                        <LinkIcon className="h-4 w-4" />
                        {notice.link}
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">
                    <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {notice.createdAt ? format(notice.createdAt, 'MMM d, yyyy') : 'No date'}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleShare(notice)
                      }}
                      className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-300 text-xs border border-blue-200 dark:border-blue-800 px-2 py-1 rounded hover:bg-blue-50 dark:hover:bg-blue-900/30"
                    >
                      <Share2 className="h-3 w-3" />
                      {sharingId === notice.id ? 'Sharing…' : 'Share'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
