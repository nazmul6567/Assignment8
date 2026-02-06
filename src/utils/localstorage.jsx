// get
export const loadInstalled = () => {
  try {
    const data = localStorage.getItem('Installed');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// save
export const updateList = product => {
  const Installed = loadInstalled();

  try {
    const isDuplicate = Installed.some(p => p.id === product.id);
    if (isDuplicate) return alert('Already added in Installed');
    const updatedInstalled = [...Installed, product];
    localStorage.setItem('Installed', JSON.stringify(updatedInstalled));
  } catch (err) {
    console.log(err);
  }
};

// delete
export const removeFromInstalled = id => {
  const Installed = loadInstalled();
  try {
    const updatedInstalled = Installed.filter(p => p.id !== id);
    localStorage.setItem('Installed', JSON.stringify(updatedInstalled));
  } catch (err) {
    console.log(err);
  }
};
