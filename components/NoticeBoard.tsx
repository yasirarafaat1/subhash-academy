'use client'

import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy, Firestore } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'

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

  useEffect(() => {
    const q = query(collection(db, 'notices'), orderBy('createdAt', 'desc'))
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          content: data.content,
          link: data.link || null,
          isImportant: data.isImportant || false,
          createdAt: data.createdAt?.toDate()
        } as Notice;
      });
      setNotices(items);
      setIsLoading(false);
    }, (error) => {
      console.error('Error fetching notices:', error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [])

  if (isLoading) return <div className="p-4 text-center">Loading notices...</div>
  if (notices.length === 0) return null

  return (
    <div className="w-full px-4 py-8">
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader className="bg-blue-50 dark:bg-blue-900/20 rounded-t-lg border-b">
          <CardTitle className="text-xl font-bold text-center">Notice Board</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[500px] overflow-y-auto">
            {notices.map((notice) => (
              <div 
                key={notice.id}
                onClick={() => {
                  if (!notice.link) return;
                  if (notice.link.startsWith('http')) {
                    window.open(notice.link, '_blank', 'noopener,noreferrer');
                  } else {
                    window.location.href = notice.link;
                  }
                }}
                className={`p-4 transition-all ${
                  notice.isImportant ? 'bg-yellow-50 dark:bg-yellow-900/20' : ''
                } ${
                  notice.link ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/30' : 'cursor-default'
                }`}
                style={{ minHeight: '80px' }} // Ensure consistent height for each notice
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {notice.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {notice.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">
                    {notice.isImportant && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
                        Important
                      </span>
                    )}
                    <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {notice.createdAt ? format(notice.createdAt, 'MMM d, yyyy') : 'No date'}
                    </span>
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
