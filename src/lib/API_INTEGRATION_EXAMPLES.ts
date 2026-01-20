/**
 * Guide d'intégration des API dans les composants React
 * Exemples pratiques pour chaque endpoint
 */

// ============================================
// 1. AUTHENTIFICATION
// ============================================

/*
import { apiClient } from '@/lib/api-client';

// Inscription
const handleRegister = async (data) => {
  const response = await apiClient.register(
    data.email,
    data.password,
    data.firstName,
    data.lastName
  );

  if (response.error) {
    console.error('Erreur:', response.error);
  } else {
    localStorage.setItem('token', response.data.token);
    router.push('/dashboard/user');
  }
};

// Connexion
const handleLogin = async (email, password) => {
  const response = await apiClient.login(email, password);

  if (response.error) {
    setError(response.error);
  } else {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    router.push('/dashboard/user');
  }
};

// Vérifier token
const verifyUserToken = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const response = await apiClient.verifyToken(token);
    if (response.error) {
      localStorage.removeItem('token');
      router.push('/auth/login');
    }
  }
};
*/

// ============================================
// 2. CATÉGORIES
// ============================================

/*
// Récupérer toutes les catégories
const loadCategories = async () => {
  const response = await apiClient.getCategories();
  if (!response.error) {
    setCategories(response.data);
  }
};

// Créer une catégorie (Admin)
const createNewCategory = async () => {
  const response = await apiClient.createCategory(
    'Nouvelle Catégorie',
    'Description',
    'IconName',
    9,
    false
  );
  if (!response.error) {
    console.log('Catégorie créée:', response.data);
  }
};
*/

// ============================================
// 3. CANDIDATURES
// ============================================

/*
// Soumettre une candidature
const submitCandidacy = async (formData) => {
  const response = await apiClient.submitCandidate(
    formData.categoryId,
    formData.fullName,
    formData.email,
    formData.biography,
    formData.achievements,
    formData.projectTitle,
    formData.projectDesc,
    formData.mediaUrl
  );

  if (response.error) {
    setError(response.error);
  } else {
    alert('Candidature soumise avec succès!');
  }
};

// Récupérer les candidatures
const loadSubmissions = async (categoryId) => {
  const response = await apiClient.getSubmissions(categoryId, 'APPROVED');
  if (!response.error) {
    setSubmissions(response.data);
  }
};
*/

// ============================================
// 4. NOMINATIONS
// ============================================

/*
// Nominer un candidat
const nominateCandidate = async (candidateId, categoryId) => {
  const response = await apiClient.nominateCandidate(
    candidateId,
    categoryId,
    'Message optionnel pour justifier la nomination'
  );

  if (response.error) {
    setError(response.error);
  } else {
    alert('Nomination enregistrée!');
  }
};

// Voir les nominations pour un candidat
const viewNominations = async (candidateId) => {
  const response = await apiClient.getNominations(candidateId);
  if (!response.error) {
    console.log('Nominations:', response.data);
  }
};
*/

// ============================================
// 5. VOTES
// ============================================

/*
// Voter pour un candidat
const voteForCandidate = async (candidateId) => {
  const response = await apiClient.voteForCandidate(candidateId, 1);

  if (response.error) {
    if (response.error.includes('already voted')) {
      setError('Vous avez déjà voté pour ce candidat');
    } else {
      setError(response.error);
    }
  } else {
    alert('Vote enregistré!');
  }
};

// Voir les votes pour un candidat
const viewVotes = async (candidateId) => {
  const response = await apiClient.getVotes(candidateId);
  if (!response.error) {
    setVoteCount(response.data.length);
  }
};
*/

// ============================================
// 6. ADMIN - EXPORT DONNÉES
// ============================================

/*
// Export toutes les données
const downloadFullExport = async () => {
  const response = await apiClient.exportData('full');
  
  if (!response.error) {
    // Créer un fichier JSON à télécharger
    const blob = new Blob([JSON.stringify(response.data, null, 2)], {
      type: 'application/json',
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aspa-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
};

// Export statistiques uniquement
const viewStats = async () => {
  const response = await apiClient.exportData('stats');
  if (!response.error) {
    console.log('Statistiques:', response.data.stats);
  }
};
*/

// ============================================
// EXEMPLE COMPLET: Composant Soumission
// ============================================

/*
'use client';

import { apiClient } from '@/lib/api-client';
import { useState } from 'react';

export function SubmissionForm({ categoryId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target);
    
    const response = await apiClient.submitCandidate(
      categoryId,
      formData.get('fullName'),
      formData.get('email'),
      formData.get('biography'),
      formData.get('achievements').split(','),
      formData.get('projectTitle'),
      formData.get('projectDesc'),
      formData.get('mediaUrl')
    );

    setLoading(false);

    if (response.error) {
      setError(response.error);
    } else {
      alert('Candidature soumise avec succès!');
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-600">{error}</p>}
      
      <input 
        name="fullName" 
        placeholder="Nom complet" 
        required 
      />
      <input 
        name="email" 
        type="email" 
        placeholder="Email" 
        required 
      />
      <textarea 
        name="biography" 
        placeholder="Biographie" 
        required 
      />
      <input 
        name="achievements" 
        placeholder="Réalisations (séparées par virgule)" 
        required 
      />
      <input 
        name="projectTitle" 
        placeholder="Titre du projet" 
        required 
      />
      <textarea 
        name="projectDesc" 
        placeholder="Description du projet" 
        required 
      />
      <input 
        name="mediaUrl" 
        type="url" 
        placeholder="URL du média" 
      />
      
      <button type="submit" disabled={loading}>
        {loading ? 'Soumission en cours...' : 'Soumettre'}
      </button>
    </form>
  );
}
*/

export {};
