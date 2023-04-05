const localStorageKey = "portfolioEntries";

export function getEntries() {
  const entriesJSON = localStorage.getItem(localStorageKey);
  return entriesJSON ? JSON.parse(entriesJSON) : [];
}

export function addEntry(entry) {
  const currentEntries = getEntries();
  const newEntry = { ...entry, id: Date.now() };
  const updatedEntries = [...currentEntries, newEntry];
  localStorage.setItem(localStorageKey, JSON.stringify(updatedEntries));
  return newEntry;
}

export function updateEntry(entry) {
  const currentEntries = getEntries();
  const updatedEntries = currentEntries.map((e) =>
    e.id === entry.id ? entry : e
  );
  localStorage.setItem(localStorageKey, JSON.stringify(updatedEntries));
  return entry;
}

export function deleteEntry(entryId) {
  const currentEntries = getEntries();
  const updatedEntries = currentEntries.filter((e) => e.id !== entryId);
  localStorage.setItem(localStorageKey, JSON.stringify(updatedEntries));
}
