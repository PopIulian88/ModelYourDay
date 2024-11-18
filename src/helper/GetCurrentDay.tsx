export const getCurrentDay = () => {
    const date = new Date();
    return date.getDay() - 1;
}