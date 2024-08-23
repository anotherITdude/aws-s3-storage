export const getFileExtension = (name: string): string => {
  const lastDotIndex = name.lastIndexOf(".");
  if (lastDotIndex === -1 || lastDotIndex === 0) {
    return ""; // No extension found or dot at the beginning of the filename
  }
  return name.slice(lastDotIndex + 1).toLowerCase();
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  return String(error);
};
