const getStoredReadList = () => {
  const storedListStr = localStorage.getItem('read-list');
  if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList
  }else{
    return [];
  }
}

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if(storedList.includes(id)){
    console.log(id,"Alreday exist in the read list")
  }else{
    storedList.push(id)
    const newStoredListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', newStoredListStr)
  }
}