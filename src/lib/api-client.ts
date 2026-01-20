"use client";

/**
 * Service API client pour communiquer avec le backend
 * Gère l'authentification, les requêtes, et les erreurs
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

interface ApiRequestOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: any;
  headers?: Record<string, string>;
}

class ApiClient {
  private getAuthHeaders(): Record<string, string> {
    const token = localStorage.getItem("token");
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return headers;
  }

  async request<T>(
    endpoint: string,
    options: ApiRequestOptions = {},
  ): Promise<ApiResponse<T>> {
    const { method = "GET", body, headers = {} } = options;

    const url = `${API_URL}${endpoint}`;
    const allHeaders = {
      ...this.getAuthHeaders(),
      ...headers,
    };

    try {
      const response = await fetch(url, {
        method,
        headers: allHeaders,
        body: body ? JSON.stringify(body) : undefined,
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          error: data.error || "An error occurred",
        };
      }

      return {
        data: data as T,
        message: data.message,
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  // Auth endpoints
  async register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) {
    return this.request("/api/auth/register", {
      method: "POST",
      body: { email, password, firstName, lastName },
    });
  }

  async login(email: string, password: string) {
    return this.request("/api/auth/login", {
      method: "POST",
      body: { email, password },
    });
  }

  async verifyToken(token: string) {
    return this.request("/api/auth/verify", {
      method: "POST",
      body: { token },
    });
  }

  // Categories
  async getCategories() {
    return this.request("/api/categories", { method: "GET" });
  }

  async createCategory(
    title: string,
    description: string,
    icon: string,
    order: number,
    isGrand?: boolean,
  ) {
    return this.request("/api/categories", {
      method: "POST",
      body: { title, description, icon, order, isGrand },
    });
  }

  // Submissions
  async getSubmissions(categoryId?: string, status?: string) {
    let endpoint = "/api/submissions";
    const params = new URLSearchParams();

    if (categoryId) params.append("categoryId", categoryId);
    if (status) params.append("status", status);

    if (params.toString()) {
      endpoint += `?${params.toString()}`;
    }

    return this.request(endpoint, { method: "GET" });
  }

  async submitCandidate(
    categoryId: string,
    fullName: string,
    email: string,
    biography: string,
    achievements: string[],
    projectTitle: string,
    projectDesc: string,
    mediaUrl?: string,
  ) {
    return this.request("/api/submissions", {
      method: "POST",
      body: {
        categoryId,
        fullName,
        email,
        biography,
        achievements,
        projectTitle,
        projectDesc,
        mediaUrl,
      },
    });
  }

  // Nominations
  async getNominations(candidateId?: string) {
    let endpoint = "/api/nominations";
    if (candidateId) {
      endpoint += `?candidateId=${candidateId}`;
    }
    return this.request(endpoint, { method: "GET" });
  }

  async nominateCandidate(
    candidateId: string,
    categoryId: string,
    message?: string,
  ) {
    return this.request("/api/nominations", {
      method: "POST",
      body: { candidateId, categoryId, message },
    });
  }

  // Votes
  async getVotes(candidateId?: string) {
    let endpoint = "/api/votes";
    if (candidateId) {
      endpoint += `?candidateId=${candidateId}`;
    }
    return this.request(endpoint, { method: "GET" });
  }

  async voteForCandidate(candidateId: string, weight?: number) {
    return this.request("/api/votes", {
      method: "POST",
      body: { candidateId, weight },
    });
  }

  // Admin - Export data
  async exportData(
    type:
      | "full"
      | "stats"
      | "users"
      | "submissions"
      | "nominations"
      | "votes" = "full",
  ) {
    return this.request(`/api/admin/export?type=${type}`, { method: "GET" });
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export type helpers
export type { ApiResponse, ApiRequestOptions };
