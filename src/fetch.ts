import data from "./data.json";

const API_URL = "http://localhost:3000"

export function fetchFavorite() {
  return fetch(`${API_URL}/favorite`)
    .then((res) => {
      return res.json();
    })
    .then((data: number[]) => {
      return Promise.all(data.map((projectId: number) => fetchProject(projectId)));
    })
    .catch(() => {
      return data.star.map((projectId: number) => data.projects.find(card=>card.id===projectId));
    });
}

export function fetchLastYear() {
  return fetch(`${API_URL}/lastYear`)
    .then((res) => {
      return res.json();
    })
    .then((data: number[]) => {
      return Promise.all(data.map((projectId: number) => fetchProject(projectId)));
    })
    .catch(() => {
      return data.lastYear.map((projectId)=> data.projects.find(card=>card.id===projectId));
  });
}

export function fetchTracks() {
  return fetch(`${API_URL}/tracks`)
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      return data.tracks;
  });
}

export function fetchProjects() {
  return fetch(`${API_URL}/projects`)
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      return data.projects;
  });
}

export function fetchProject(id: number | string) {
  return fetch(`${API_URL}/projects/${id}`)
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      return data.projects.find(project=>project.id.toString() === id.toString());
    });
}

export function fetchUsersInProject(id: number | string) {
  return fetch(`${API_URL}/projects/${id}/users`)
    .then((res) => {
      return res.json();
    })
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