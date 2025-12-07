import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function loginUser(email, password) {
  const { data } = await axios.post(`${API_URL}/`, { email, password });

  if (data.token) {
    localStorage.setItem("token", data.token);
  }

  return data;
}

export async function registerUser(username, email, password) {
  try {
    const { data } = await axios.post(`${API_URL}/register`, {
      username,
      email,
      password,
    });

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erro ao criar usuário");
  }
}

export async function completeProfile(formData) {
  try {
    const endpoint = `${API_URL}/complete-profile`;

    const { data } = await axios.post(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Erro ao finalizar cadastro"
    );
  }
}

export async function createPost(formData) {
  try {
    const endpoint = `${API_URL}/posts`;

    const { data } = await axios.post(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erro ao criar post");
  }
}

export async function getPosts(filter) {
  try {
    const endpoint = `${API_URL}/posts${filter ? `?filter=${filter}` : ""
      }`;
    const token = localStorage.getItem("token");

    const { data } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;

  } catch (err) {
    console.log("Erro ao tentar buscar posts", err);
    throw new Error(
      err.response?.data?.message || "Erro ao buscar posts"
    );
  }
}

export async function getUserPosts(userId) {
  try {
    const endpoint = `${API_URL}/users/${userId}/posts`;
    const token = localStorage.getItem("token");

    const { data } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;

  } catch (err) {
    console.log("Erro ao tentar buscar posts do usuário", err);
    throw new Error(
      err.response?.data?.message || "Erro ao buscar posts do usuário"
    );
  }
}

export async function getPostById(id) {
  try {
    const endpoint = `${API_URL}/posts/${id}`;
    const { data } = await axios.get(endpoint);

    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Erro ao buscar post"
    );
  }
}

export async function deletePost(id) {
  try {
    const endpoint = `${API_URL}/posts/${id}`;
    const token = localStorage.getItem("token");

    const { data } = await axios.delete(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Erro ao deletar post"
    );
  }
}

export async function updatePost(id, formData) {
  try {
    const endpoint = `${API_URL}/posts/${id}`;

    const { data } = await axios.put(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Erro ao atualizar post"
    );
  }
}

export async function toggleLike(postId) {
  try {
    const endpoint = `${API_URL}/posts/${postId}/like`;
    const token = localStorage.getItem("token");

    const { data } = await axios.post(endpoint, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Erro ao curtir post"
    );
  }
}

export async function checkLike(postId) {
  try {
    const endpoint = `${API_URL}/posts/${postId}/like`;
    const token = localStorage.getItem("token");

    if (!token) {
      return { liked: false };
    }

    const { data } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.error("Erro ao verificar like:", error);
    return { liked: false };
  }
}

export async function getPostLikes(postId) {
  try {
    const endpoint = `${API_URL}/posts/${postId}/likes`;

    const { data } = await axios.get(endpoint);
    return data;
  } catch (error) {
    console.error("Erro ao buscar likes:", error);
    throw new Error(
      error.response?.data?.message || "Erro ao buscar likes"
    );
  }
}

export async function followUser(userId) {
  try {
    const endpoint = `${API_URL}/users/${userId}/follow`;
    const token = localStorage.getItem("token");

    const { data } = await axios.post(endpoint, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Erro ao seguir usuário"
    );
  }
}

export async function checkFollowStatus(userId) {
  try {
    const endpoint = `${API_URL}/users/${userId}/is-following`;
    const token = localStorage.getItem("token");

    if (!token) {
      return { isFollowing: false };
    }

    const { data } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.error("Erro ao verificar status de seguir:", error);
    return { isFollowing: false };
  }
}

export async function getNotifications() {
  try {
    const endpoint = `${API_URL}/notifications`;
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token não encontrado");
    }

    const { data } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.notifications || [];
  } catch (error) {
    console.error("Erro ao buscar notificações:", error);
    throw new Error(
      error.response?.data?.message || "Erro ao buscar notificações"
    );
  }
}

export async function markNotificationAsRead(notificationId) {
  try {
    const endpoint = `${API_URL}/notifications/${notificationId}/read`;
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token não encontrado");
    }

    const { data } = await axios.patch(endpoint, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.error("Erro ao marcar notificação como lida:", error);
    throw new Error(
      error.response?.data?.message || "Erro ao marcar notificação como lida"
    );
  }
}

export async function markAllNotificationsAsRead() {
  try {
    const endpoint = `${API_URL}/notifications/read-all`;
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token não encontrado");
    }

    const { data } = await axios.patch(endpoint, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.error("Erro ao marcar todas notificações como lidas:", error);
    throw new Error(
      error.response?.data?.message || "Erro ao marcar notificações como lidas"
    );
  }
}

export async function getUnreadNotificationsCount() {
  try {
    const endpoint = `${API_URL}/notifications/unread-count`;
    const token = localStorage.getItem("token");

    if (!token) {
      return { count: 0 };
    }

    const { data } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { count: data.unreadCount || 0 };
  } catch (error) {
    console.error("Erro ao buscar contagem de notificações não lidas:", error);
    return { count: 0 };
  }
}