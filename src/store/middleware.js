export const loggerMiddleWare = (storeApi) => (next) => (action) => {
    const previousStore = storeApi.getState();
    console.log("previousStore==>", previousStore);
    const result = next(action);
    const newStore = storeApi.getState();
    console.log("newStore==>", newStore);
    return result;
}