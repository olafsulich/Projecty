export const documentsCollection = (doc: { id: string; data: () => {} }) => ({ id: doc.id, ...doc.data() });
