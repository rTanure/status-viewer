export function formatDateTime(datetime: Date): string {
  const currentTime = new Date();
  const targetTime = new Date(datetime);
  const timeDifference = currentTime.getTime() - targetTime.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }

  const minutes = Math.floor(timeDifference / (1000 * 60));
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }

  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  if (hours < 24) {
    return `${hours} hours ago`;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return `${days} days ago`;
}