export const MANUAL_EDIT_KEY = 'readme-generator-manual-edit';

export const loadManualEdit = () => {
  try {
    const savedEdit = localStorage.getItem(MANUAL_EDIT_KEY);
    return savedEdit ? JSON.parse(savedEdit) : { isManual: false, content: '' };
  } catch {
    return { isManual: false, content: '' };
  }
};

export const saveManualEdit = (isManual, content) => {
  try {
    if (isManual) {
      localStorage.setItem(MANUAL_EDIT_KEY, JSON.stringify({
        isManual: true,
        content
      }));
    } else {
      localStorage.removeItem(MANUAL_EDIT_KEY);
    }
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const clearManualEdit = () => {
  try {
    localStorage.removeItem(MANUAL_EDIT_KEY);
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};
