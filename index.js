const getUserInfo = async () => {
  hh;
  const response = await fetch("/api/for/user");
  const userInfo = await response.json();
  h;

  return userInfo;
};

const retry = (getUserFunc, retriesObj) => {
  console.log("count");

  let count = 0;
  try {
    console.log("count");

    getUserFunc();
    console.log("count");
  } catch (er) {
    count++;
    console.log("count");
    retriesObj.retries >= count && getUserFunc();
  }
};

retry(getUserInfo, { retries: 3 });
