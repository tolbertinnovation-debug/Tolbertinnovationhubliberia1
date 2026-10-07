const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('tihDesktop',{
  updates:force=>ipcRenderer.invoke('updates:status',force),
  read:()=>ipcRenderer.invoke('study:read'),write:data=>ipcRenderer.invoke('study:write',data),export:()=>ipcRenderer.invoke('study:export'),import:()=>ipcRenderer.invoke('study:import'),
  openVideo:id=>ipcRenderer.invoke('study:open-video',id),openHub:destination=>ipcRenderer.invoke('study:open-hub',destination),
  account:()=>ipcRenderer.invoke('account:status'),signIn:(email,password)=>ipcRenderer.invoke('account:sign-in',email,password),refresh:()=>ipcRenderer.invoke('account:refresh'),signOut:()=>ipcRenderer.invoke('account:sign-out'),
  course:id=>ipcRenderer.invoke('course:read',id),grade:(id,answers)=>ipcRenderer.invoke('course:grade',id,answers),report:id=>ipcRenderer.invoke('course:report',id)
});
