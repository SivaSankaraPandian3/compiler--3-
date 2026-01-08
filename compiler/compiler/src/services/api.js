import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Problems API
export const problemsApi = {
    getAllTopics: async () => {
        const response = await api.get('/problems/topics/summary');
        return response.data;
    },
    getProblemsByTopic: async (topic) => {
        const response = await api.get(`/problems/topic/${encodeURIComponent(topic)}`);
        return response.data;
    },
    getProblemById: async (id) => {
        const response = await api.get(`/problems/${id}`);
        return response.data;
    },
    createProblem: async (problemData) => {
        const response = await api.post('/problems', problemData);
        return response.data;
    },
    updateProblem: async (id, problemData) => {
        const response = await api.put(`/problems/${id}`, problemData);
        return response.data;
    },
    deleteProblem: async (id) => {
        const response = await api.delete(`/problems/${id}`);
        return response.data;
    },
    clearAllProblems: async () => {
        const response = await api.delete('/problems/clear/all');
        return response.data;
    }
};

// Quizzes API
export const quizzesApi = {
    getAllTopics: async () => {
        const response = await api.get('/quizzes/topics');
        return response.data;
    },
    getQuizByTopicAndLevel: async (topic, level) => {
        const response = await api.get(`/quizzes/${topic}/${level}`);
        return response.data;
    }
};

// Progress API
export const progressApi = {
    getUserProgress: async (userId, topic) => {
        const response = await api.get(`/progress/${userId}/${topic}`);
        return response.data;
    },
    saveUserCode: async (data) => {
        const response = await api.post('/progress/save-code', data);
        return response.data;
    },
    markProblemSolved: async (data) => {
        const response = await api.post('/progress/mark-solved', data);
        return response.data;
    },
    getSolvedCount: async (userId, topic) => {
        const response = await api.get(`/progress/${userId}/${topic}/solved-count`);
        return response.data;
    }
};

// Students API
export const studentsApi = {
    submitQuiz: async (data) => {
        const response = await api.post('/students/submit-quiz', data);
        return response.data;
    }
};

export default api;
