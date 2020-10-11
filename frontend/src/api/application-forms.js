import axios from "axios"
import "./interceptor"

const BASE_URL = "/api/application-forms"

export const fetchForm = ({ token, recruitmentId }) =>
  axios
    .get(`${BASE_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        recruitmentId,
      },
    })
    .catch(() =>
      Promise.resolve({
        data: {
          referenceUrl: "https://www.google.com",
          answers: [
            {
              contents: "스타트업을 하고 싶습니다.",
              recruitmentItemId: 1,
            },
            {
              contents: "책임감",
              recruitmentItemId: 2,
            },
          ],
        },
      }),
    )

export const fetchMyApplicationForms = token => {
  return axios
    .get(`${BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch(() =>
      Promise.resolve({
        data: [
          {
            recruitmentId: 6,
            submitted: false,
          },
          {
            recruitmentId: 2,
            submitted: false,
          },
          {
            recruitmentId: 1,
            submitted: true,
          },
        ],
      }),
    )
}

export const saveForm = ({ token, data }) =>
  axios.post(`${BASE_URL}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

export const updateForm = ({ token, data }) =>
  axios.put(`${BASE_URL}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
