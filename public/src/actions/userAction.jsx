export const CHANGE_USERNAME="CHANGE_USERNAME";

export function changeUser(username) {
  return {
    type:CHANGE_USERNAME,
    payload:username
  }
}