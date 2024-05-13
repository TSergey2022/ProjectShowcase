import data from "./data.json";

const API_URL = "https://127.0.0.1"

export function fetchFavorite() {
  return fetch(`${API_URL}/favorite`)
    .catch(() => {
      return data.star.map((projectId: number) => data.projects.find(card=>card.id===projectId));
  });
}

export function fetchLastYear() {
  return fetch(`${API_URL}/lastYear`)
    .catch(() => {
      return data.lastYear.map((projectId)=> data.projects.find(card=>card.id===projectId));
  });
}

export function fetchTracks() {
  return fetch(`${API_URL}/tracks`)
    .catch(() => {
      return data.tracks;
  });
}

export function fetchProjects() {
  return fetch(`${API_URL}/projects`)
    .catch(() => {
      return data.projects;
  });
}

export function fetchProject(id: number | string) {
  return fetch(`${API_URL}/projects/${id}`)
    .catch(() => {
      return data.projects.find(project=>project.id.toString() === id.toString());
  });
}

export function fetchUsersInProject(id: number | string) {
  return fetch(`${API_URL}/projects/${id}/users`)
    .catch(() => {
      return data.projects.find(project=>project.id.toString() === id.toString())?.team.map(user => {
        return {
          id: user,
          full_name: data.users.find((u) => u.id === user)?.name,
          role: "Роль1"
        }
      });
  });
}

export {};