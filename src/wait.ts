export async function waitUntilResult<T>(
  getResultFn: () => T,
  expectedResult: T,
  timeout: number,
  step: number,
) {
  const startDate = new Date().getTime();
  let intervalCount = 1;

  return new Promise((res, rej) => {
    const intervalId = setInterval(() => {
      console.log(`waited ${intervalCount++ * step}`);

      const result = getResultFn();
      if (result == expectedResult) {
        clearInterval(intervalId);
        res(result);
      } else {
        const currentDate = new Date().getTime();
        if (currentDate - startDate > timeout) {
          clearInterval(intervalId);
          rej(new Error(`${timeout} ms timeout exeeded`));
        }
      }
    }, step);
  });
}
