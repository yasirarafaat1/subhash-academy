"use client"
import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { Timestamp } from "firebase/firestore";

const ADMIN_PASSWORD = "subhashacdmy";

interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: Timestamp;
}

function DataPanel() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);

  useEffect(() => {
    const storedPassword = localStorage.getItem("adminPassword");
    if (storedPassword === ADMIN_PASSWORD) {
      setIsPasswordCorrect(true);
    }
  }, []);

  useEffect(() => {
    if (isPasswordCorrect) {
      fetchSubmissions();
    }
  }, [isPasswordCorrect]);

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
      toast.success("Data loaded successfully");
    } catch (error) {
      console.error("Error fetching submissions:", error);
      toast.error("Error loading data");
    } finally {
      setIsLoading(false);
    }
  };

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

  const deleteAllSubmissions = async () => {
    if (confirm("Are you sure you want to delete all entries?")) {
      try {
        const q = query(collection(db, "submissions"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
        setSubmissions([]);
        toast.success("All entries deleted successfully");
      } catch (error) {
        console.error("Error deleting all submissions:", error);
        toast.error("Failed to delete all entries");
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="bg-white text-gray-950 w-full h-full shadow-2xl flex flex-col rounded-lg">
        {!isPasswordCorrect ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Enter Admin Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="px-4 py-2 border text-white rounded w-80 text-lg focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => {
                if (password === ADMIN_PASSWORD) {
                  localStorage.setItem("adminPassword", password);
                  setIsPasswordCorrect(true);
                } else {
                  toast.error("Incorrect password!");
                }
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-lg"
            >
              Submit
            </button>
          </div>
        ) : (
          <>
            <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center rounded-t-lg">
              <h2 className="text-2xl font-semibold">Admin Panel - Form Submissions</h2>
              <button
                onClick={deleteAllSubmissions}
                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
              >
                Delete All
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
                </div>
              ) : (
                <div className="overflow-auto h-full w-full">
                  <table className="min-w-full bg-white divide-y divide-gray-200">
                    <thead className="bg-gray-100 sticky top-0 shadow-md">
                      <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Phone</th>
                        <th className="px-6 py-3">Message</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {submissions.map((submission) => (
                        <tr key={submission.id}>
                          <td className="px-6 py-4">{submission.name}</td>
                          <td className="px-6 py-4">{submission.email}</td>
                          <td className="px-6 py-4">{submission.phone}</td>
                          <td className="px-6 py-4">{submission.message}</td>
                          <td className="px-6 py-4">{submission.timestamp.toDate().toLocaleString()}</td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => deleteSubmission(submission.id)}
                              className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
                            >
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
          </>
        )}
      </div>
    </div>
  );
}

export default DataPanel;