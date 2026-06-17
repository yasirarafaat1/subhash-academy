"use client"
import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, deleteDoc, doc, addDoc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from '@/lib/firebase';
import { Loader2, Plus, Trash2, Eye, EyeOff, Edit2, X, Save, LogOutIcon, LucideUserCog2 } from "lucide-react";
import toast from "react-hot-toast";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const ADMIN_PASSWORD = "subhashacdmy";

interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: Timestamp;
}

interface Notice {
  id?: string;
  title: string;
  content: string;
  link?: string;
  isImportant: boolean;
  createdAt?: any;
}

export default function DataPanel() {
  const [activeTab, setActiveTab] = useState<'submissions' | 'notices'>('submissions');
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);
  const [noticeModalOpen, setNoticeModalOpen] = useState<boolean>(false);
  const [submissionModalOpen, setSubmissionModalOpen] = useState<boolean>(false);
  const [editingNoticeId, setEditingNoticeId] = useState<string | null>(null);
  const [noticeForm, setNoticeForm] = useState<Omit<Notice, 'id'>>({
    title: '',
    content: '',
    link: '',
    isImportant: false,
  });
  const [noticeFormError, setNoticeFormError] = useState<string>('');
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentNoticePage, setCurrentNoticePage] = useState(1);
  const itemsPerPage = 8;

  // Check for stored password on component mount
  useEffect(() => {
    const storedPassword = localStorage.getItem("adminPassword");
    if (storedPassword === ADMIN_PASSWORD) {
      setIsPasswordCorrect(true);
    }
  }, []);

  const handleLogin = () => {
    if (!password.trim()) {
      setLoginError('Password is required.');
      return;
    }

    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('adminPassword', password);
      setIsPasswordCorrect(true);
      setLoginError('');
    } else {
      setLoginError('Incorrect password. Please try again.');
    }
  };

  // Fetch data when tab changes or after successful authentication
  useEffect(() => {
    if (isPasswordCorrect) {
      if (activeTab === 'submissions') {
        fetchSubmissions();
      } else {
        fetchNotices();
      }
    }
  }, [isPasswordCorrect, activeTab]);

  // Fetch form submissions from Firestore
  const fetchSubmissions = async () => {
    setIsLoading(true);
    try {
      const q = query(collection(db, "submissions"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);

      const data: FormSubmission[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        phone: doc.data().phone,
        message: doc.data().message,
        timestamp: doc.data().timestamp as Timestamp,
      }));

      setSubmissions(data);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      toast.error("Error loading form submissions");
    } finally {
      setIsLoading(false);
    }
  };

  // Delete a single submission
  const deleteSubmission = async (id: string) => {
    if (confirm("Are you sure you want to delete this entry?")) {
      try {
        await deleteDoc(doc(db, "submissions", id));
        setSubmissions(submissions.filter((submission) => submission.id !== id));
        toast.success("Entry deleted successfully");
      } catch (error) {
        console.error("Error deleting submission:", error);
        toast.error("Failed to delete entry");
      }
    }
  };

  const filteredSubmissions = submissions.filter((submission) => {
    const search = searchTerm.toLowerCase();
    return (
      submission.name.toLowerCase().includes(search) ||
      submission.email.toLowerCase().includes(search) ||
      submission.phone.toLowerCase().includes(search) ||
      submission.message.toLowerCase().includes(search)
    );
  });

  const sortedSubmissions = [...filteredSubmissions].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a.timestamp.toMillis() - b.timestamp.toMillis();
    }
    return b.timestamp.toMillis() - a.timestamp.toMillis();
  });

  const totalPages = Math.max(1, Math.ceil(sortedSubmissions.length / itemsPerPage));
  const currentSubmissions = sortedSubmissions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  const noticeTotalPages = Math.max(1, Math.ceil(notices.length / itemsPerPage));
  const currentNotices = notices.slice(
    (currentNoticePage - 1) * itemsPerPage,
    currentNoticePage * itemsPerPage
  );

  const goToNoticePage = (page: number) => {
    setCurrentNoticePage(Math.min(Math.max(page, 1), noticeTotalPages));
  };

  const openSubmissionModal = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
    setSubmissionModalOpen(true);
  };

  const closeSubmissionModal = () => {
    setSelectedSubmission(null);
    setSubmissionModalOpen(false);
  };

  // Fetch notices from Firestore
  const fetchNotices = async () => {
    setIsLoading(true);
    try {
      const q = query(collection(db, 'notices'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        content: doc.data().content,
        link: doc.data().link,
        isImportant: doc.data().isImportant || false,
        createdAt: doc.data().createdAt
      })) as Notice[];
      setNotices(items);
      setCurrentNoticePage(1);
    } catch (error) {
      console.error('Error fetching notices:', error);
      toast.error('Failed to load notices');
    } finally {
      setIsLoading(false);
    }
  };

  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const sendNoticePush = async (payload: { title: string; content: string; link?: string | null }) => {
    try {
      const snapshot = await getDocs(collection(db, 'fcmTokens'));
      const tokens = snapshot.docs.map((doc) => doc.id);
      if (tokens.length === 0) return;

      const batches = chunkArray(tokens, 900);
      await Promise.all(
        batches.map((batch) =>
          fetch('/api/notify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              tokens: batch,
              title: payload.title,
              body: payload.content,
              link: payload.link || window.location.origin,
            }),
          })
        )
      );
      toast.success('Subscribers notified');
    } catch (error) {
      console.error('Error sending push notifications:', error);
      toast.error('Notice added, but push notification failed');
    }
  };

  // Handle form submission for new notice
  const openAddNoticeModal = () => {
    setEditingNoticeId(null);
    setNoticeForm({ title: '', content: '', link: '', isImportant: false });
    setNoticeFormError('');
    setNoticeModalOpen(true);
  };

  const openEditNoticeModal = (notice: Notice) => {
    setEditingNoticeId(notice.id ?? null);
    setNoticeForm({
      title: notice.title,
      content: notice.content,
      link: notice.link || '',
      isImportant: notice.isImportant,
    });
    setNoticeFormError('');
    setNoticeModalOpen(true);
  };

  const closeNoticeModal = () => {
    setNoticeModalOpen(false);
    setEditingNoticeId(null);
    setNoticeFormError('');
  };

  const handleNoticeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!noticeForm.title.trim() || !noticeForm.content.trim()) {
      setNoticeFormError('Title and content are required.');
      return;
    }

    try {
      if (editingNoticeId) {
        await updateDoc(doc(db, 'notices', editingNoticeId), {
          ...noticeForm,
          link: noticeForm.link?.trim() || null,
        });
        toast.success('Notice updated successfully');
      } else {
        await addDoc(collection(db, 'notices'), {
          ...noticeForm,
          link: noticeForm.link?.trim() || null,
          createdAt: Timestamp.now(),
        });
        toast.success('Notice added successfully');
        await sendNoticePush({
          title: noticeForm.title,
          content: noticeForm.content,
          link: noticeForm.link?.trim() || null,
        });
      }
      closeNoticeModal();
      fetchNotices();
    } catch (error) {
      console.error('Error saving notice:', error);
      toast.error('Failed to save notice');
    }
  };

  // Toggle notice importance
  const toggleNoticeImportance = async (id: string, currentStatus: boolean) => {
    try {
      await updateDoc(doc(db, 'notices', id), {
        isImportant: !currentStatus
      });
      fetchNotices();
    } catch (error) {
      console.error('Error updating notice:', error);
      toast.error('Failed to update notice');
    }
  };

  // Delete a notice
  const deleteNotice = async (id: string) => {
    if (confirm('Are you sure you want to delete this notice?')) {
      try {
        await deleteDoc(doc(db, 'notices', id));
        toast.success('Notice deleted');
        fetchNotices();
      } catch (error) {
        console.error('Error deleting notice:', error);
        toast.error('Failed to delete notice');
      }
    }
  };

  // Login form
  if (!isPasswordCorrect) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (loginError) setLoginError('');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleLogin();
                    }
                  }}
                  className="w-full p-2 pr-10 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {loginError && (
                <p className="mt-2 text-sm text-red-600">{loginError}</p>
              )}
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => window.location.href = '/'}
              className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main admin panel
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="sticky top-0 bg-blue-600 text-white p-4 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="flex items-center text-xl font-bold">
            <LucideUserCog2  className="w-6 h-6 mr-1"/>
            Admin Panel
            </h1>
          <button
            onClick={() => {
              localStorage.removeItem("adminPassword");
              setIsPasswordCorrect(false);
              setPassword("");
            }}
            className="flex items-center px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-sm"
          >
            <LogOutIcon className="w-4 h-4 mr-1"/>
            Sign Out
          </button>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <Dialog open={submissionModalOpen} onOpenChange={(open) => {
          if (!open) closeSubmissionModal();
          else setSubmissionModalOpen(true);
        }}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Submission Details</DialogTitle>
              <DialogDescription>
                Review the full form submission details below.
              </DialogDescription>
            </DialogHeader>
            {selectedSubmission ? (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="mt-1 text-base font-medium text-gray-900">{selectedSubmission.name}</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="mt-1 text-base font-medium text-gray-900">{selectedSubmission.email}</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="mt-1 text-base font-medium text-gray-900">{selectedSubmission.phone || 'N/A'}</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Submitted</p>
                    <p className="mt-1 text-base font-medium text-gray-900">{selectedSubmission.timestamp?.toDate().toLocaleString()}</p>
                  </div>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Message</p>
                  <p className="mt-1 whitespace-pre-line text-gray-900">{selectedSubmission.message}</p>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closeSubmissionModal}
                    className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500">No submission selected.</p>
            )}
          </DialogContent>
        </Dialog>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 border-b">
          <button
            onClick={() => setActiveTab('submissions')}
            className={`px-4 py-2 rounded-t-lg text-sm font-medium ${activeTab === 'submissions'
              ? 'bg-white text-blue-600 border-t border-l border-r border-gray-200'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            Form Submissions
          </button>
          <button
            onClick={() => setActiveTab('notices')}
            className={`px-4 py-2 rounded-t-lg text-sm font-medium ${activeTab === 'notices'
              ? 'bg-white text-blue-600 border-t border-l border-r border-gray-200'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            Manage Notices
          </button>
        </div>

        {activeTab === 'submissions' ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">

            {isLoading ? (
              <div className="p-8 flex justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              </div>
            ) : submissions.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No submissions found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentSubmissions.map((submission) => (
                      <tr key={submission.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {submission.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.phone || 'N/A'}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                          {submission.message}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.timestamp?.toDate().toLocaleString()}
                        </td>
                        <td className="flex items-center px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                          <button
                            onClick={() => openSubmissionModal(submission)}
                            className="text-blue-600 hover:text-blue-900 flex items-center"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </button>
                          <button
                            onClick={() => deleteSubmission(submission.id)}
                            className="text-red-600 hover:text-red-900 flex items-center"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {totalPages > 1 && (
                  <div className="border-t border-gray-200 bg-white px-4 py-4">
                    <Pagination>
                      <PaginationPrevious
                        href="#"
                        aria-disabled={currentPage === 1}
                        className={currentPage === 1 ? 'pointer-events-none opacity-40' : ''}
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) goToPage(currentPage - 1);
                        }}
                      />
                      <PaginationContent>
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                          <PaginationItem key={page}>
                            <PaginationLink
                              href="#"
                              isActive={page === currentPage}
                              className={page === currentPage ? 'pointer-events-none' : ''}
                              onClick={(e) => {
                                e.preventDefault();
                                if (page !== currentPage) goToPage(page);
                              }}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                      </PaginationContent>
                      <PaginationNext
                        href="#"
                        aria-disabled={currentPage === totalPages}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-40' : ''}
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) goToPage(currentPage + 1);
                        }}
                      />
                    </Pagination>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Manage Notices</h2>
                  <p className="text-sm text-gray-500">Create or edit notices from this panel.</p>
                </div>
                <button
                  onClick={openAddNoticeModal}
                  className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Notice
                </button>
              </div>
            </div>

            <Dialog
              open={noticeModalOpen}
              onOpenChange={(open) => {
                if (!open) closeNoticeModal();
                else setNoticeModalOpen(true);
              }}
            >
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{editingNoticeId ? 'Edit Notice' : 'Add Notice'}</DialogTitle>
                  <DialogDescription>
                    {editingNoticeId
                      ? 'Update the notice details below and save your changes.'
                      : 'Create a new notice and notify subscribers if needed.'}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleNoticeSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      value={noticeForm.title}
                      onChange={(e) => setNoticeForm({ ...noticeForm, title: e.target.value })}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter notice title"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                    <textarea
                      value={noticeForm.content}
                      onChange={(e) => setNoticeForm({ ...noticeForm, content: e.target.value })}
                      className="w-full p-2 border rounded min-h-[120px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter notice content..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Link (optional)</label>
                    <input
                      type="url"
                      value={noticeForm.link || ''}
                      onChange={(e) => setNoticeForm({ ...noticeForm, link: e.target.value })}
                      placeholder="https://example.com"
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      id="isImportant"
                      type="checkbox"
                      checked={noticeForm.isImportant}
                      onChange={(e) => setNoticeForm({ ...noticeForm, isImportant: e.target.checked })}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="isImportant" className="text-sm text-gray-700">
                      Mark as Important
                    </label>
                  </div>
                  {noticeFormError && (
                    <p className="text-sm text-red-600">{noticeFormError}</p>
                  )}
                  <div className="flex justify-end gap-2 pt-3">
                    <button
                      type="button"
                      onClick={closeNoticeModal}
                      className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                      <Save className="w-4 h-4 mr-1" />
                      Save
                    </button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">All Notices</h2>
              </div>
              {isLoading ? (
                <div className="p-8 flex justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                </div>
              ) : notices.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  No notices found. Add your first notice above.
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {currentNotices.map((notice) => (
                    <div
                      key={notice.id}
                      className={`p-4 hover:bg-gray-50 ${notice.isImportant ? 'bg-yellow-50' : ''}`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-medium">{notice.title}</h3>
                            {notice.isImportant && (
                              <span className="px-2 py-0.5 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                                Important
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-gray-700 whitespace-pre-line">{notice.content}</p>
                          <p className="mt-2 text-xs text-gray-500">
                            Created: {notice.createdAt?.toDate().toLocaleString()}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => notice.id && toggleNoticeImportance(notice.id, notice.isImportant)}
                            className={`p-1.5 rounded-full ${notice.isImportant
                              ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
                              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                              }`}
                            title={notice.isImportant ? 'Mark as Normal' : 'Mark as Important'}
                          >
                            {notice.isImportant ? '★' : '☆'}
                          </button>
                          <button
                            onClick={() => notice.id && openEditNoticeModal(notice)}
                            className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50"
                            title="Edit notice"
                          >
                            <Edit2 className="w-4 h-4 mr-1" />
                            Edit
                          </button>
                          <button
                            onClick={() => notice.id && deleteNotice(notice.id)}
                            className="p-1.5 text-red-500 hover:bg-red-50 rounded-full"
                            title="Delete notice"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {noticeTotalPages > 1 && (
                <div className="border-t border-gray-200 bg-white px-4 py-4">
                  <Pagination>
                    <PaginationPrevious
                      href="#"
                      aria-disabled={currentNoticePage === 1}
                      className={currentNoticePage === 1 ? 'pointer-events-none opacity-40' : ''}
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentNoticePage > 1) goToNoticePage(currentNoticePage - 1);
                      }}
                    />
                    <PaginationContent>
                      {Array.from({ length: noticeTotalPages }, (_, index) => index + 1).map((page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            isActive={page === currentNoticePage}
                            className={page === currentNoticePage ? 'pointer-events-none' : ''}
                            onClick={(e) => {
                              e.preventDefault();
                              if (page !== currentNoticePage) goToNoticePage(page);
                            }}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                    </PaginationContent>
                    <PaginationNext
                      href="#"
                      aria-disabled={currentNoticePage === noticeTotalPages}
                      className={currentNoticePage === noticeTotalPages ? 'pointer-events-none opacity-40' : ''}
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentNoticePage < noticeTotalPages) goToNoticePage(currentNoticePage + 1);
                      }}
                    />
                  </Pagination>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
