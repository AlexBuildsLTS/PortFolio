import React, {useEffect, useState} from "react";
import {useTheme} from "../contexts/ThemeContext";
import {Meeting} from "../types/Meeting"; // Use imported Meeting interface

interface EditMeetingModalProps {
    meeting: Meeting;
    isOpen: boolean;
    onClose: () => void;
    onSave: (updatedMeeting: Meeting) => void;
}

const EditMeetingModal: React.FC<EditMeetingModalProps> = ({
                                                               meeting,
                                                               isOpen,
                                                               onClose,
                                                               onSave,
                                                           }) => {
    const { darkMode } = useTheme();
    const [title, setTitle] = useState(meeting.title);
    const [date, setDate] = useState(meeting.date);
    const [time, setTime] = useState(meeting.time);
    const [level, setLevel] = useState(meeting.level);
    const [participants, setParticipants] = useState(meeting.participants);
    const [description, setDescription] = useState(meeting.description);
    const [error, setError] = useState("");

    useEffect(() => {
        if (isOpen) {
            setTitle(meeting.title);
            setDate(meeting.date);
            setTime(meeting.time);
            setLevel(meeting.level);
            setParticipants(meeting.participants);
            setDescription(meeting.description);
            setError("");
        }
    }, [isOpen, meeting]);

    const handleSave = () => {
        if (!title || !date || !time || !level || !description || participants.some((p) => !p)) {
            setError("All fields are required.");
            return;
        }

        const updatedMeeting: Meeting = {
            ...meeting, // Ensure existing properties like `id` and `creatorEmail` are retained
            title,
            date,
            time,
            level,
            participants,
            description,
        };

        onSave(updatedMeeting);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${darkMode ? 'bg-black bg-opacity-75' : 'bg-gray-200'}`}>
            <div className={`w-full max-w-3xl p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className={`mb-4 text-2xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
                    Edit Meeting
                </h2>
                {error && <p className="text-red-500">{error}</p>}
                <form className="space-y-4">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        className={`w-full p-2 border rounded ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-black'}`}
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={`w-full p-2 border rounded ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-black'}`}
                    />
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className={`w-full p-2 border rounded ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-black'}`}
                    />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        className={`w-full p-2 border rounded ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-black'}`}
                    />
                    <button
                        type="button"
                        onClick={handleSave}
                        className={`w-full py-2 rounded ${darkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-black'}`}
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditMeetingModal;
