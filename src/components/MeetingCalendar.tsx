import React, { useEffect, useState } from 'react';
import EditMeetingModal from './EditMeetingModal';
import { Meeting } from '../types/Meeting';

const MeetingCalendar: React.FC = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [level, setLevel] = useState<string>('Team');
  const [participants, setParticipants] = useState<string[]>(['']);
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [currentMeeting, setCurrentMeeting] = useState<Meeting | null>(null);

  // Load meetings from localStorage on component mount
  useEffect(() => {
    const storedMeetings = localStorage.getItem('meetings');
    if (storedMeetings) {
      setMeetings(JSON.parse(storedMeetings));
    }
  }, []);

  // Save meetings to localStorage whenever meetings state changes
  useEffect(() => {
    localStorage.setItem('meetings', JSON.stringify(meetings));
  }, [meetings]);

  const validateEmails = (emails: string[]): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emails.every((email) => emailRegex.test(email));
  };

  const addMeeting = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    if (!loggedInUserEmail) {
      setError('You must be logged in to create a meeting.');
      return;
    }

    // Trim inputs
    const trimmedTitle = title.trim();
    const trimmedDate = date.trim();
    const trimmedTime = time.trim();
    const trimmedLevel = level.trim();
    const trimmedParticipants = participants.map((email) => email.trim());
    const trimmedDescription = description.trim();

    // Validation
    if (
      !trimmedTitle ||
      !trimmedDate ||
      !trimmedTime ||
      !trimmedLevel ||
      !trimmedDescription
    ) {
      setError('Please fill in all required fields.');
      return;
    }

    if (
      trimmedParticipants.length === 0 ||
      trimmedParticipants.some((email) => email === '')
    ) {
      setError('Please provide at least one participant email.');
      return;
    }

    if (!validateEmails(trimmedParticipants)) {
      setError('Please enter valid email addresses.');
      return;
    }

    if (
      meetings.some(
        (meeting) =>
          meeting.date === trimmedDate && meeting.time === trimmedTime
      )
    ) {
      setError('A meeting is already scheduled at this date and time.');
      return;
    }

    const newMeeting: Meeting = {
      id: Date.now(),
      title: trimmedTitle,
      date: trimmedDate,
      time: trimmedTime,
      level: trimmedLevel,
      participants: trimmedParticipants,
      description: trimmedDescription,
      creatorEmail: loggedInUserEmail,
    };

    setMeetings([...meetings, newMeeting]);
    setTitle('');
    setDate('');
    setTime('');
    setLevel('Team');
    setParticipants(['']);
    setDescription('');
    setError('');
  };

  const deleteMeeting = (idToDelete: number) => {
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    const meetingToDelete = meetings.find(
      (meeting) => meeting.id === idToDelete
    );

    if (!meetingToDelete) {
      setError('Meeting not found.');
      return;
    }

    if (meetingToDelete.creatorEmail !== loggedInUserEmail) {
      setError('You can only delete meetings you created.');
      return;
    }

    setMeetings(meetings.filter((meeting) => meeting.id !== idToDelete));
  };

  const openEditModal = (meeting: Meeting) => {
    setCurrentMeeting(meeting);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setCurrentMeeting(null);
    setIsEditModalOpen(false);
  };

  const saveEditedMeeting = (updatedMeeting: Meeting) => {
    setMeetings(
      meetings.map((meeting) =>
        meeting.id === updatedMeeting.id ? updatedMeeting : meeting
      )
    );
    setError('');
  };

  return (
    <section id="meeting-calendar" className="py-24">
      <h2 className="section-heading">Meeting Calendar</h2>
      <div className="max-w-4xl p-6 mx-auto rounded-lg shadow-lg bg-navy-light">
        {/* Add Meeting Form */}
        <form onSubmit={addMeeting} className="flex flex-col gap-4">
          {error && <div className="text-sm text-red-500">{error}</div>}
          <div className="flex flex-col">
            <label htmlFor="title" className="block mb-1 text-slate-lightest">
              Meeting Title<span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter meeting title"
              className="p-2 border rounded border-slate focus:outline-none focus:border-green"
              required
            />
          </div>
          {/* Remaining input fields... */}
        </form>

        {/* Scheduled Meetings */}
        <h3 className="mt-12 mb-4 text-xl font-semibold text-green">
          Scheduled Meetings
        </h3>
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
                      {meeting.creatorEmail ===
                        localStorage.getItem('loggedInUserEmail') && (
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={() => openEditModal(meeting)}
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
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit Meeting Modal */}
      {currentMeeting && (
        <EditMeetingModal
          meeting={currentMeeting}
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          onSave={saveEditedMeeting}
        />
      )}
    </section>
  );
};

export default MeetingCalendar;
