"use client"
import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, deleteDoc, doc, addDoc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from '@/lib/firebase';
import { Loader2, Plus, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

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
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);
  const [newNotice, setNewNotice] = useState<Omit<Notice, 'id'>>({ 
    title: '', 
    content: '',
    link: '',
    isImportant: false 
  });

  // Check for stored password on component mount
  useEffect(() => {
    const storedPassword = localStorage.getItem("adminPassword");
    if (storedPassword === ADMIN_PASSWORD) {
      setIsPasswordCorrect(true);
    }
  }, []);

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

  // Delete all submissions
  const deleteAllSubmissions = async () => {
    if (confirm("Are you sure you want to delete all entries? This cannot be undone.")) {
      try {
        const q = query(collection(db, "submissions"));
        const querySnapshot = await getDocs(q);
        
        // Delete each document
        const deletePromises = querySnapshot.docs.map(doc => 
          deleteDoc(doc.ref)
        );
        
        await Promise.all(deletePromises);
        setSubmissions([]);
        toast.success("All entries deleted successfully");
      } catch (error) {
        console.error("Error deleting all submissions:", error);
        toast.error("Failed to delete all entries");
      }
    }
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
    } catch (error) {
      console.error('Error fetching notices:', error);
      toast.error('Failed to load notices');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission for new notice
  const handleNoticeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNotice.title || !newNotice.content) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    try {
      await addDoc(collection(db, 'notices'), {
        ...newNotice,
        link: newNotice.link?.trim() || null,
        createdAt: Timestamp.now()
      });
      toast.success('Notice added successfully');
      setNewNotice({ title: '', content: '', link: '', isImportant: false });
    } catch (error) {
      console.error('Error adding notice:', error);
      toast.error('Failed to add notice');
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
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && password === ADMIN_PASSWORD) {
                    localStorage.setItem("adminPassword", password);
                    setIsPasswordCorrect(true);
                  }
                }}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter password"
              />
            </div>
            <button
              onClick={() => {
                if (password === ADMIN_PASSWORD) {
                  localStorage.setItem("adminPassword", password);
                  setIsPasswordCorrect(true);
                } else {
                  toast.error("Incorrect password!");
                }
              }}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Sign In
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
      <div className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <button
            onClick={() => {
              localStorage.removeItem("adminPassword");
              setIsPasswordCorrect(false);
              setPassword("");
            }}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-sm"
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="container mx-auto p-4">
        {/* Tabs */}
        <div className="flex space-x-2 mb-6 border-b">
          <button
            onClick={() => setActiveTab('submissions')}
            className={`px-4 py-2 rounded-t-lg text-sm font-medium ${
              activeTab === 'submissions' 
                ? 'bg-white text-blue-600 border-t border-l border-r border-gray-200' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Form Submissions
          </button>
          <button
            onClick={() => setActiveTab('notices')}
            className={`px-4 py-2 rounded-t-lg text-sm font-medium ${
              activeTab === 'notices' 
                ? 'bg-white text-blue-600 border-t border-l border-r border-gray-200' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Manage Notices
          </button>
        </div>

        {activeTab === 'submissions' ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Form Submissions</h2>
              <button
                onClick={deleteAllSubmissions}
                disabled={submissions.length === 0}
                className={`px-3 py-1 text-sm rounded flex items-center ${
                  submissions.length === 0
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Delete All
              </button>
            </div>

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
                    {submissions.map((submission) => (
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
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Add New Notice Form */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Add New Notice</h2>
              </div>
              <div className="p-6">
                <form onSubmit={handleNoticeSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={newNotice.title}
                      onChange={(e) => setNewNotice({...newNotice, title: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter notice title"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Content <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={newNotice.content}
                      onChange={(e) => setNewNotice({...newNotice, content: e.target.value})}
                      className="w-full p-2 border rounded min-h-[100px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter notice content..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Link (optional)
                    </label>
                    <input
                      type="url"
                      value={newNotice.link || ''}
                      onChange={(e) => setNewNotice({...newNotice, link: e.target.value})}
                      placeholder="https://example.com"
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isImportant"
                      checked={newNotice.isImportant}
                      onChange={(e) => setNewNotice({...newNotice, isImportant: e.target.checked})}
                      className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="isImportant" className="ml-2 text-sm text-gray-700">
                      Mark as Important
                    </label>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Notice
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Notices List */}
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
                  {notices.map((notice) => (
                    <div 
                      key={notice.id} 
                      className={`p-4 hover:bg-gray-50 ${
                        notice.isImportant ? 'bg-yellow-50' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <h3 className="text-lg font-medium">
                              {notice.title}
                            </h3>
                            {notice.isImportant && (
                              <span className="ml-2 px-2 py-0.5 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                                Important
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-gray-700 whitespace-pre-line">
                            {notice.content}
                          </p>
                          <p className="mt-2 text-xs text-gray-500">
                            Created: {notice.createdAt?.toDate().toLocaleString()}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => notice.id && toggleNoticeImportance(notice.id, notice.isImportant)}
                            className={`p-1.5 rounded-full ${
                              notice.isImportant 
                                ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                            }`}
                            title={notice.isImportant ? 'Mark as Normal' : 'Mark as Important'}
                          >
                            {notice.isImportant ? '★' : '☆'}
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
