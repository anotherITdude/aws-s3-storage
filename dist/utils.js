"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = exports.getFileExtension = void 0;
const getFileExtension = (name) => {
    const lastDotIndex = name.lastIndexOf(".");
    if (lastDotIndex === -1 || lastDotIndex === 0) {
        return ""; // No extension found or dot at the beginning of the filename
    }
    return name.slice(lastDotIndex + 1).toLowerCase();
};
exports.getFileExtension = getFileExtension;
const getErrorMessage = (error) => {
    if (error instanceof Error)
        return error.message;
    return String(error);
};
exports.getErrorMessage = getErrorMessage;
