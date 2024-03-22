export const getPSRData = async (orderDate, psrName) => {
  const url =
    "http://mailserver.sukkurbeverages.net:689/react/presell-sync-process/API/get_mysql_data.php";
  const data = {
    orderDate: orderDate,
    username: psrName,
  };
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json charset=utf-8",
    },
    body: JSON.stringify(data),
  }).catch((error) => {
    console.log(error);
  });
  return response.text();
};

export const syncData = async (orderDate, psrName) => {
  const url =
    "http://mailserver.sukkurbeverages.net:689/react/presell-sync-process/API/ora_sync_userwise_manual.php";
  const data = {
    orderDate: orderDate,
    username: psrName,
  };
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json charset=utf-8",
    },
    body: JSON.stringify(data),
  }).catch((error) => {
    console.log(error);
  });
  return response.text();
};
