export const timeAgo = (timestamp) => {
  timestamp = new Date(timestamp)
  const now = Date.now()

  const diff = now - timestamp

  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour
  const week = 7 * day
  const month = 30 * day

  if (diff < minute) {
    return '現在'
  } else if (diff < hour) {
    const minutes = Math.floor(diff / minute)
    return `${minutes} 分鐘之前`
  } else if (diff < day) {
    const hours = Math.floor(diff / hour)
    return `${hours} 小時之前`
  } else if (diff < week) {
    const days = Math.floor(diff / day)
    return `${days} 天之前`
  } else if (diff < month) {
    const weeks = Math.floor(diff / week)
    return `${weeks} 週前`
  } else {
    const months = Math.floor(diff / month)
    return `${months} 月前`
  }
}
