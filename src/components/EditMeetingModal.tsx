import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Meeting } from '../types/Meeting';

interface EditMeetingModalProps {
  meeting: Meeting | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (meetingData: Omit<Meeting, 'id' | 'creatorEmail'>) => void;
}

const EditMeetingModal: React.FC<EditMeetingModalProps> = ({
  meeting,
  isOpen,
  onClose,
  onSave,
}) => {
  const { darkMode } = useTheme();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [level, setLevel] = useState('Team');
  const [participants, setParticipants] = useState(['']);
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      if (meeting) {
        setTitle(meeting.title);
        setDate(meeting.date);
        setTime(meeting.time);
        setLevel(meeting.level);
        setParticipants(meeting.participants);
        setDescription(meeting.description);
      } else {
        setTitle('');
        setDate('');
        setTime('');
        setLevel('Team');
        setParticipants(['']);
        setDescription('');
      }
      setError('');
    }
  }, [isOpen, meeting]);

  const handleSave = () => {
    if (!title || !date || !time || !level || !description || participants.some((p) => !p)) {
      setError('All fields are required.');
      return;
    }

    onSave({ title, date, time, level, participants, description });
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        darkMode ? 'bg-black bg-opacity-75' : 'bg-gray-200'
      }`}
    >
      <div
        className={`w-full max-w-3xl p-6 rounded-lg shadow-lg ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute text-2xl top-4 right-4"
        >
          ×
        </button>
        <h2
          className={`mb-4 text-2xl font-semibold ${
            darkMode ? 'text-white' : 'text-black'
          }`}
        >
          {meeting ? 'Edit Meeting' : 'Create Meeting'}
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <form className="space-y-4">
          <div>
            <label htmlFor="title" className={`block mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className={`w-full p-2 border rounded ${
                darkMode
                  ? 'border-gray-600 bg-gray-700 text-white'
                  : 'border-gray-300 bg-white text-black'
              }`}
            />
          </div>
          <div>
            <label htmlFor="date" className={`block mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Date</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`w-full p-2 border rounded ${
                darkMode
                  ? 'border-gray-600 bg-gray-700 text-white'
                  : 'border-gray-300 bg-white text-black'
              }`}
            />
          </div>
          <div>
            <label htmlFor="time" className={`block mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Time</label>
            <input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={`w-full p-2 border rounded ${
                darkMode
                  ? 'border-gray-600 bg-gray-700 text-white'
                  : 'border-gray-300 bg-white text-black'
              }`}
            />
          </div>
          <div>
            <label htmlFor="participants" className={`block mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Participants (comma-separated)</label>
            <input
              id="participants"
              type="text"
              value={participants.join(', ')}
              onChange={(e) => setParticipants(e.target.value.split(',').map(p => p.trim()))}
              placeholder="user1@example.com, user2@example.com"
              className={`w-full p-2 border rounded ${
                darkMode
                  ? 'border-gray-600 bg-gray-700 text-white'
                  : 'border-gray-300 bg-white text-black'
              }`}
            />
          </div>
          <div>
            <label htmlFor="description" className={`block mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className={`w-full p-2 border rounded ${
                darkMode
                  ? 'border-gray-600 bg-gray-700 text-white'
                  : 'border-gray-300 bg-white text-black'
              }`}
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            className={`w-full py-2 rounded ${
              darkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-black'
            }`}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditMeetingModal;
