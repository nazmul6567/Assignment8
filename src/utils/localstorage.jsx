import { toast } from 'react-toastify';

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
export const updateList = app => {
  const Installed = loadInstalled();

  try {
    const isDuplicate = Installed.some(p => p.id === app.id);
    if (isDuplicate) {
      toast("Already added in Installed");
      return false;
    }

    const updatedInstalled = [...Installed, app];
    localStorage.setItem("Installed", JSON.stringify(updatedInstalled));
    toast("App Installed Successfully");
    return true;
  } catch (err) {
    console.log(err);
    return false;
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
