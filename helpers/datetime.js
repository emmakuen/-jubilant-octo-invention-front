const useRelativeTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);

  const seconds = Math.round((now.getTime() - date.getTime()) / 1000);
  if (seconds < 60) return "Just now";

  const minutes = seconds / 60;
  if (minutes < 60) {
    return Math.floor(minutes) === 1
      ? "One minute ago"
      : `${Math.floor(minutes)} min ago`;
  }

  if (date.toDateString() === yesterday.toDateString()) return "Yesterday";

  const hours = minutes / 60;
  if (hours < 24) {
    return Math.floor(hours) === 1
      ? "One hour ago"
      : `${Math.floor(hours)} hrs ago`;
  }

  const days = hours / 24;
  if (days < 7) {
    return Math.floor(days) === 1
      ? "One day ago"
      : `${Math.floor(days)} days ago`;
  }

  const weeks = days / 7;
  if (Math.floor(weeks) === 1) return "One week ago";

  return `${Math.floor(weeks)} weeks ago`;
};

module.exports = {
  useRelativeTime,
};
