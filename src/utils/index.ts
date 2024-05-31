export const formatDate = (updatedAt: string): string => {
  if (!updatedAt) return "";
  const date = new Date(updatedAt);
  const now = new Date();

  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return `hoje às ${date.getHours()}:${
      date.getMinutes() < 10 ? "0" : ""
    }${date.getMinutes()}`;
  }

  if (diffDays === 1) {
    return `há 1 dia`;
  }

  if (diffDays <= 30) {
    return `há ${diffDays} dias`;
  }

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `em ${day}/${month}/${year}`;
};