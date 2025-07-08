import React, { useEffect, useState } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import EditMeetingModal from './EditMeetingModal';
import { Meeting } from '../types/Meeting';
import { Plus } from 'lucide-react';

const MeetingCalendar: React.FC = () => {
  const { currentUser } = useAuth();
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [error, setError] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentMeeting, setCurrentMeeting] = useState<Meeting | null>(null);

  useEffect(() => {
    const fetchMeetings = async () => {
      if (!currentUser) return;

      try {
        const q = query(
          collection(db, 'meetings'),
          where('creatorEmail', '==', currentUser.email)
        );
        const querySnapshot = await getDocs(q);
        const meetingsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Meeting[];
        setMeetings(meetingsData);
      } catch (err) {
        setError('Failed to fetch meetings.');
        console.error(err);
      }
    };

    fetchMeetings();
  }, [currentUser]);

  const handleSaveMeeting = async (meetingData: Omit<Meeting, 'id' | 'creatorEmail'>) => {
    if (!currentUser?.email) {
      setError('You must be logged in to create a meeting.');
      return;
    }
  
    try {
      if (currentMeeting) {
        // Update existing meeting
        const meetingDoc = doc(db, 'meetings', currentMeeting.id);
        await updateDoc(meetingDoc, meetingData);
        setMeetings((prevMeetings) =>
          prevMeetings.map((m) =>
            m.id === currentMeeting.id ? { ...m, ...meetingData } : m
          )
        );
      } else {
        // Add new meeting
        const docRef = await addDoc(collection(db, 'meetings'), {
          ...meetingData,
          creatorEmail: currentUser.email,
        });
        const newMeeting = { ...meetingData, id: docRef.id, creatorEmail: currentUser.email };
        setMeetings((prevMeetings) => [...prevMeetings, newMeeting]);
      }
      closeModal();
    } catch (err) {
      setError('Failed to save meeting.');
      console.error(err);
    }
  };

  const deleteMeeting = async (idToDelete: string) => {
    try {
      await deleteDoc(doc(db, 'meetings', idToDelete));
      setMeetings(meetings.filter((meeting) => meeting.id !== idToDelete));
    } catch (err) {
      setError('Failed to delete meeting.');
      console.error(err);
    }
  };

  const openModal = (meeting: Meeting | null = null) => {
    setCurrentMeeting(meeting);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentMeeting(null);
    setIsModalOpen(false);
  };

  return (
    <section id="meeting-calendar" className="py-24">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-heading">Meeting Calendar</h2>
          <button onClick={() => openModal()} className="flex items-center gap-2 btn-primary">
            <Plus size={18} />
            New Meeting
          </button>
        </div>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <div className="p-6 mx-auto rounded-lg shadow-lg bg-navy-light">
          {meetings.length === 0 ? (
            <p className="text-slate">No meetings scheduled.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full rounded-lg shadow bg-slate-lightest">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-slate-lightest">
                      Title
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-slate-lightest">
                      Date
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-slate-lightest">
                      Time
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-slate-lightest">
                      Level
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-center uppercase text-slate-lightest">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meetings.map((meeting) => (
                    <tr key={meeting.id} className="border-t">
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-slate">
                        {meeting.title}
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-slate">
                        {meeting.date}
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-slate">
                        {meeting.time}
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-slate">
                        {meeting.level}
                      </td>
                      <td className="px-6 py-4 text-sm text-center whitespace-nowrap">
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={() => openModal(meeting)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteMeeting(meeting.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <EditMeetingModal
          meeting={currentMeeting}
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={handleSaveMeeting}
        />
      )}
    </section>
  );
};

export default MeetingCalendar;
