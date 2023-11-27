function convertEpochToIST(epochTimestamp) {
  const date = new Date(epochTimestamp * 1000);
  date.setUTCHours(date.getUTCHours() + 5, 30);
  const formattedDate = date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return formattedDate;
}
export {
    convertEpochToIST
}